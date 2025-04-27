import { useState } from "react";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { Button } from "@mui/material";
import { contractAddress } from "../constants/raffle";

export default function EnterRaffle() {
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { sendTransaction, failureReason, isError, isSuccess, isPending } =
    useSendTransaction();

  // if (isError) {
  //   setError(true);
  //   setErrorMessage(failureReason?.message || "An unknown error occurred.");
  // }
  // if (isSuccess) {
  //   setSuccess(true);
  //   setIsLoading(false);
  // }
  // if (isPending) {
  //   setIsLoading(true);
  // }

  return (
    <>
      {isError && errorMessage && (
        <div style={{ color: "red" }}>Error: {errorMessage}</div>
      )}
      {isSuccess && (
        <div style={{ color: "green" }}>Successfully entered the raffle!</div>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          sendTransaction({
            to: contractAddress,
            value: parseEther("0.01"),
          })
        }
      >
        Enter Raffle
      </Button>
    </>
  );
}
