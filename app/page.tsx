"use client";
import { useState } from "react";
import { Container, Box, CircularProgress } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import EnterRaffle from "./components/EnterRaffle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A]">
      <h1 className="text-3xl font-bold text-[#60a5fa] mt-4 mb-2 ml-4">
        Lotto-Fi
      </h1>
      <Container
        className="bg-white w-3xl p-4 rounded mt-5 flex flex-col justify-center items-center"
        maxWidth="lg"
      >
        <p className="text-4xl font-bold text-[#1A1A1A] text-center mt-5">
          Win Big. No Risk. Fully Decentralized.
        </p>
        <p className="text-sm text-[#4a4a4a] font-semibold my-2">
          Minimum entry: 0.01 Sepolia ETH required to join the lottery.
        </p>
        <div className="flex justify-center items-center mt-5">
          <ConnectButton />
        </div>
        <EnterRaffle />
      </Container>
    </div>
  );
}
