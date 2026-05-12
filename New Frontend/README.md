# Crowdfunding DApp

A decentralized crowdfunding platform built with Web3 technologies that allows users to create fundraising campaigns and donate using cryptocurrency directly through smart contracts.

---

# Features

* Create crowdfunding campaigns
* Donate to active campaigns
* Wallet connection support
* Real-time campaign funding updates
* Smart contract powered transactions
* Responsive UI
* Toast notifications for transaction status
* Web3 integration using Ethers.js
* Campaign progress tracking

---

# Tech Stack

* React.js
* Vite
* Solidity
* Foundry
* Ethers.js
* Tailwind CSS (if applicable)
* React Hot Toast
* MetaMask

---

# Prerequisites

Before running the project locally, make sure you have the following installed:

* Node.js >= 18
* npm or yarn
* MetaMask browser extension
* Git

---

# Quick Installation

## 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd <PROJECT_FOLDER>
```

## 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

---

# Running the Frontend

Start the development server:

```bash
npm run dev
```

The application will start on:

```bash
http://localhost:5173
```

---


---

# Smart Contract Integration

```bash
src/contracts/
```

You should include:

* Contract ABI
* Contract Address
* Network Configuration

---

# Wallet Connection

This frontend supports MetaMask wallet connection.

Steps:

1. Install MetaMask
2. Connect to the supported network
3. Click the "Connect Wallet" button
4. Approve the wallet connection request

---

# Crowdfunding Functionalities

## Create Campaign

Users can create fundraising campaigns by providing:

* Campaign title
* Description
* Funding goal
* Campaign deadline
* Campaign image (optional)

## Donate to Campaign

Users can donate ETH directly to campaigns through the frontend.

## Track Campaign Progress

The frontend displays:

* Total amount raised
* Funding goal
* Percentage completed
* Remaining time

---

# Supported Networks

Example:

* Ethereum Sepolia Testnet
* Local Anvil Network
* Polygon Amoy

---

# Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build production files
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

# Common Issues

## MetaMask Not Detected

Make sure MetaMask is installed and enabled in your browser.

## Wrong Network

Switch MetaMask to the correct blockchain network.

## Transaction Failed

* Ensure you have enough ETH for gas fees
* Verify the contract address
* Check if the campaign is still active
* Ensure the campaign deadline has not expired

---

# Future Improvements

* Multi-wallet support
* Campaign categories
* Search and filter campaigns
* Dark mode
* User dashboard
* Donation history
* Campaign analytics
* IPFS image uploads
* NFT rewards for donors

---

# Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

Built by Rajat Singh.

---

# Support

If you found this project useful, consider giving it a star on GitHub.
