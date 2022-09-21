import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { createTransferCheckedInstruction, getAssociatedTokenAddress, getMint } from "@solana/spl-token";
import BigNumber from "bignumber.js";
import products from "./products.json";

const usdcAddress = new PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr");
const sellerAddress = 'DXAtXoLr1Hz8rYMTWkWimGDCkWi344HTssxagGqCPTbb';
const sellerPublicKey = new PublicKey(sellerAddress);

const createTransaction = async (req, res) => {
    try {
        // Extract the data from the request body
        const { buyer, orderID, itemID } = req.body

         // If we don't have something we need, stop!
        if (!buyer) {
            return res.status(400).json({
            message: "Missing buyer address",
            });
        }
    
        if (!orderID) {
            return res.status(400).json({
            message: "Missing order ID",
            });
        }

        // Fetch item price
        const itemPrice = products.find((item) => item.id === itemID).price

        if (!itemPrice) {
            return res.status(404).json({
                message: "Item was not found, please check ID!"
            })
        }

        // Convert our price to the correct format
        const bigAmmount = BigNumber(itemPrice);
        const buyerPublicKey = new PublicKey(buyer);

        const network = WalletAdapterNetwork.Devnet;
        const endpoint = clusterApiUrl(network);
        const connection = new Connection(endpoint);

        const buyerUsdcAddress = await getAssociatedTokenAddress(usdcAddress, buyerPublicKey);
        const shopUsdcAddress = await getAssociatedTokenAddress(usdcAddress, sellerPublicKey);

        // blochash is sort of an ID for a block. It lets you identify each block
        const { blockhash } = await connection.getLatestBlockhash("finalized");

        // Getting the mint address of the token we want to transfer
        const usdcMint = await getMint(connection, usdcAddress);

        // The first two things we need - a recent block ID 
        // and the public key of the fee payer 
        const tx = new Transaction({
            recentBlockhash: blockhash,
            feePayer: buyerPublicKey,
        });
        
        // This is the "action" that the transaction will take
        // We're just going to transfer some SOL
        const transferInstruction = createTransferCheckedInstruction(
            buyerUsdcAddress,
            usdcAddress,
            shopUsdcAddress,
            buyerPublicKey,
            bigAmmount.toNumber() * 10 ** (await usdcMint).decimals,
            usdcMint.decimals
        );

        // Adding more instructions to the transaction
        transferInstruction.keys.push({
            pubkey: new PublicKey(orderID),
            isSigner: false,
            isWritable: false,
        })

        tx.add(transferInstruction);

        // Formatting our transaction
        const serializedTransaction = tx.serialize({
            requireAllSignatures: false,
        });
        const base64 = serializedTransaction.toString("base64");

        res.status(200).json({
            transaction: base64,
        });
    } catch (err) {
        console.error('Error ', err);

        res.status(500).json({ error: 'error creating tx' })
        return;
    }
}

export default function handler(req,res) {
    if (req.method === "POST") {
        createTransaction(req, res);
    } else {
        res.status(405).end();
    }
}