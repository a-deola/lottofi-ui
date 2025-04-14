import { useState } from "react";
import { ethers, Interface } from "ethers";
import Button from "@mui/material/Button";
import { isHexString } from "ethers";
import { contractAddress, raffleAbi } from "../constants/raffle";

type EnterRaffleProps = {
  onError: (msg: string) => void;
};

function EnterRaffle({ onError }: EnterRaffleProps) {
  const [error, setError] = useState<string | null>(null);

  async function enterRaffle() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, raffleAbi, signer);
      const iface = new Interface(raffleAbi);

      try {
        await contract.enterRaffle();
      } catch (err: any) {
        console.log("Error entering raffle:", err);
        // const errorData = err?.error?.data || err?.data;
        // if (errorData && isHexString(errorData)) {
        //   try {
        //     const decoded = iface.parseError(errorData);
        //     if (!decoded) throw new Error("Could not decode error");
        //     const caller = decoded.args[0];
        //     setError(`Unauthorized: ${caller}`);
        //     onError(`Unauthorized: ${caller}`);
        //   } catch (decodeErr) {
        //     console.error("Failed to decode custom error", decodeErr);
        //     setError("Transaction failed (unknown reason).");
        //     onError("Transaction failed (unknown reason).");
        //   }
        // } else {
        //   console.error("Unhandled error:", err);
        //   setError(err?.message || "Transaction failed.");
        //   onError(err?.message || "Transaction failed.");
        // }
      }
    }
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={enterRaffle}
        className="mt-4"
      >
        Enter Raffle
      </Button>
    </>
  );
}

export default EnterRaffle;
