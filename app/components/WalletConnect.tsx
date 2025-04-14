"use client";
import { useState } from "react";
import { ethers } from "ethers";
import Button from "@mui/material/Button";

declare global {
  interface Window {
    ethereum?: any;
  }
}

function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false);
  // Check if MetaMask is installed
  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
      } catch (err) {
        console.error("User rejected request", err);
      }
    } else {
      setIsConnected(false);
    }
  }
  return isConnected ? (
    <Button onClick={connect} variant="contained">
      Connect Wallet
    </Button>
  ) : (
    <Button variant="contained" disabled>
      Connected
    </Button>
  );
}

export default WalletConnect;
