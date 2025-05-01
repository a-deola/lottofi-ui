export const contractAddress = "0x4eb40f258B9484aa1E19431831c88B565f4a3814";
export const raffleAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entranceFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_vrfCoordinator",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "subscriptionId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "callBackGasLimit",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    type: "error",
    name: "OnlyCoordinatorCanFulfill",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "coordinator",
        type: "address",
      },
    ],
    type: "error",
    name: "OnlyOwnerOrCoordinator",
  },
  {
    inputs: [],
    type: "error",
    name: "Raffle__NotEnoughEth",
  },
  {
    inputs: [],
    type: "error",
    name: "Raffle__RaffleNotOpen",
  },
  {
    inputs: [],
    type: "error",
    name: "Raffle__TransferFailed",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numPlayers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "raffleState",
        type: "uint256",
      },
    ],
    type: "error",
    name: "Raffle__UpKeepNotNeeded",
  },
  {
    inputs: [],
    type: "error",
    name: "ZeroAddress",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vrfCoordinator",
        type: "address",
        indexed: false,
      },
    ],
    type: "event",
    name: "CoordinatorSet",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        indexed: true,
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        indexed: true,
      },
    ],
    type: "event",
    name: "OwnershipTransferRequested",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
        indexed: true,
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
        indexed: true,
      },
    ],
    type: "event",
    name: "OwnershipTransferred",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
        indexed: true,
      },
    ],
    type: "event",
    name: "RaffleEntered",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
        indexed: true,
      },
    ],
    type: "event",
    name: "RequestedRaffleWinner",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "winner",
        type: "address",
        indexed: true,
      },
    ],
    type: "event",
    name: "WinnerPicked",
    anonymous: false,
  },
  {
    inputs: [],
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "acceptOwnership",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
  },
  {
    inputs: [],
    stateMutability: "payable",
    type: "function",
    name: "enterRaffle",
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "getEntranceFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "indexOfPlayer",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    name: "getPlayer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "getRaffleState",
    outputs: [
      {
        internalType: "enum Raffle.RaffleState",
        name: "",
        type: "uint8",
      },
    ],
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "performUpkeep",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "rawFulfillRandomWords",
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "s_vrfCoordinator",
    outputs: [
      {
        internalType: "contract IVRFCoordinatorV2Plus",
        name: "",
        type: "address",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vrfCoordinator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "setCoordinator",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transferOwnership",
  },
  {
    inputs: [],
    stateMutability: "payable",
    type: "receive",
  },
];
