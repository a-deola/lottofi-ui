"use client";
import { Container } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import EnterRaffle from "./components/EnterRaffle";

export default function Home() {
  return (
    <div className="flex relative flex-col min-h-screen bg-[#1A1A1A]">
      <div className="flex justify-between items-center mt-4 mb-2 mx-4">
        <h1 className="text-xl md:text-3xl font-bold text-[#60a5fa]">
          Lotto-Fi
        </h1>
        <ConnectButton />
      </div>
      <Container
        className="bg-white w-3xl p-4 rounded mt-5 flex flex-col justify-center items-center"
        maxWidth="lg"
      >
        <p className="text-xl md:text-4xl font-bold text-[#1A1A1A] text-center mt-5">
          Win Big. No Risks. Fully Decentralized.
        </p>
        <p className="text-xs md:text-sm text-center text-[#4a4a4a] font-semibold my-2">
          Minimum entry: 0.01 ETH required to join the lottery.
        </p>
        <EnterRaffle />
      </Container>
    </div>
  );
}
