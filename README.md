# Crowdfunding DApp

A decentralised crowdfunding platform on Ethereum where donors contribute ETH to campaigns, funds are locked until the goal is met, and milestone-based releases are governed by donor voting.

## Features

- **Contribute ETH** – Donors send ETH directly to any active campaign via the smart contract
- **Goal-Gated Funds** – Funds are held in the contract and only released once the funding goal is reached
- **Milestone-Based Release** – Campaign funds are distributed in stages; donors vote to approve each milestone before funds are released
- **Owner Withdrawal** – Campaign owner can withdraw approved funds after a successful milestone vote

## Tech Stack

- **Solidity** – Smart contract logic
- **Foundry** – Contract testing and deployment
- **React.js** – Frontend interface
- **Ethers.js** – Blockchain interaction from the frontend

## Getting Started

### Prerequisites

- Node.js installed
- Foundry installed — [getfoundry.sh](https://getfoundry.sh)
- MetaMask or any Ethereum wallet browser extension

### Clone the Repo

```bash
git clone https://github.com/RajatSinghhh/Crowdfunding
cd Crowdfunding
```

### Smart Contract Setup

```bash
# Install Foundry dependencies
forge install

# Run tests
forge test

# Deploy to a local network
forge script script/Deploy.s.sol --rpc-url http://localhost:8545 --broadcast
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The app will start at `http://localhost:3000`.

### Configuration

Create a `.env` file in the frontend directory:

```env
REACT_APP_CONTRACT_ADDRESS=your_deployed_contract_address
REACT_APP_RPC_URL=your_rpc_url
```

## How It Works

1. A campaign is created on-chain with a funding goal and milestone breakdown
2. Donors contribute ETH to the campaign through the frontend
3. Once the funding goal is reached, the contract locks the funds
4. The owner requests a milestone withdrawal
5. Donors vote to approve or reject the release
6. If approved, funds for that milestone are transferred to the campaign owner
7. The process repeats for each subsequent milestone

## Live Demo

[https://auditdrop.com/Projects/crowdfunding/](https://auditdrop.com/Projects/crowdfunding/)

## Author

**Rajat Singh** – [GitHub](https://github.com/RajatSinghhh) · [Portfolio](https://auditdrop.com)
