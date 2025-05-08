"use client";
import { useState, useEffect } from "react";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import { Button, Modal, CircularProgress, Box } from "@mui/material";
import { contractAddress } from "../constants/raffle";
import Notification from "./Notification";

export default function EnterRaffle() {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showNotif, setShowNotif] = useState<boolean>(false);
  const {
    data: txData,
    sendTransaction,
    isError,
    isPending,
    failureReason,
  } = useSendTransaction();

  const {
    isSuccess: isConfirmed,
    isError: isConfirmError,
    error: confirmError,
    isLoading: isConfirming,
  } = useWaitForTransactionReceipt({
    hash: txData ? txData : undefined,
  });

  useEffect(() => {
    if (isPending || isConfirming) {
      setIsLoading(true);
    }
  }, [isPending, isConfirming]);

  useEffect(() => {
    if (isConfirmed) {
      setShowNotif(true);
      setIsLoading(false);
    }
  }, [isConfirmed]);

  useEffect(() => {
    if (isError || isConfirmError) {
      setError(true);
      setErrorMessage(
        failureReason?.message ||
          confirmError?.message ||
          "An unknown error occurred."
      );
      setIsLoading(false);
    }
  }, [isError, isConfirmError, failureReason, confirmError]);

  return (
    <>
      {showNotif && txData && (
        <Notification
          message="Raffle Entered!"
          link={{
            href: `https://base-sepolia.blockscout.com/tx/${txData}`,
            label: "View on Base Sepolia Block Explorer",
          }}
          onClose={() => setShowNotif(false)}
          type="success"
        />
      )}
      {isLoading && (
        <Modal
          open={isLoading}
          onClose={() => {}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-descrip ztion"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 300,
              textAlign: "center",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            <CircularProgress size={80} />
            <h2 className="text-[#60a5fa]">Entering Raffle...</h2>
            <p className="text-white">
              Please confirm the transaction in your wallet.
            </p>
          </Box>
        </Modal>
      )}
      {error && errorMessage && (
        <div className="text-red-500 font-extrabold text-center">
          Error:{" "}
          {errorMessage.match(/MetaMask Tx Signature: (.*?)(?:\.|$)/)?.[1] ||
            errorMessage.split("Details:")[1]?.trim() ||
            errorMessage.split("Request Arguments:")[0]?.trim() ||
            "Something went wrong."}
        </div>
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
