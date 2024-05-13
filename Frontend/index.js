import { contractAddress, abi } from "./constant.js";
import { ethers } from "./ethers-5.6.esm.min.js";

const connectButton = document.getElementById("connect");
const sendEther = document.getElementById("sendeth");
const Balance = document.getElementById("balance");
const Refund = document.getElementById("refundAmount");
const createRequest = document.getElementById("createRequest");
const voterRequest = document.getElementById("voterRequest");
const makePayment = document.getElementById("makePayment");

connectButton.onclick = CONNECT;
sendEther.onclick = SENDETHER;
Balance.onclick = BALANCE;
Refund.onclick = REFUND;
createRequest.onclick = CREATEREQUEST;
voterRequest.onclick = VOTERREQUEST;
makePayment.onclick = MAKEPAYMENT;

async function CONNECT() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    connectButton.innerHTML = "Connected";
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
    connectButton.innerHTML = "Please install MetaMask";
  }
}

async function SENDETHER() {
  const ethAmount = document.getElementById("ethAmount").value;
  console.log(`Funding with ${ethAmount}...`);
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.sendEth({
        value: ethers.utils.parseEther(ethAmount),
      });
      await transactionResponse.wait(1);
      console.log(`You funded this much ether ${transactionResponse} `);
    } catch (error) {
      console.log(error);
    }
  } else {
    sendEther.innerHTML = "Please install MetaMask";
  }
}
async function CREATEREQUEST() {
  const recipient = document.getElementById("requestId").value;
  const description = document.getElementById("description").value;
  const value = document.getElementById("value").value;
  console.log(
    `Creating request with this ${recipient} address and with this ${description} as description and this much value: ${value}`
  );
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.createRequest(
        description,
        recipient,
        ethers.utils.parseEther(value)
      );
      await transactionResponse.wait(1);
      console.log(
        `You created request with this as a parameter ${transactionResponse}`
      );
    } catch (error) {
      console.log(error);
    }
  } else {
    createRequest.innerHTML = "please install metamask ";
  }
}
async function BALANCE() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      const balance = await provider.getBalance(contractAddress);
      const Balance = ethers.utils.formatEther(balance);
      console.log(`Total donation in ethers is ${Balance}`);
    } catch (error) {
      console.log(error);
    }
  } else {
    balanceButton.innerHTML = "Please install MetaMask";
  }
}
async function REFUND() {
  console.log(`Withdrawing...`);
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.refund();
      console.log(`${transactionResponse}`);
    } catch (error) {
      console.log(error);
    }
  } else {
    withdrawButton.innerHTML = "Please install MetaMask";
  }
}

async function VOTERREQUEST() {
  const voterId = document.getElementById("voterId").value;
  console.log(`Your voter id is ${voterId}`);
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.voterRequest(voterId);
      console.log(
        `your voter request with id ${transactionResponse} has passed`
      );
    } catch (error) {
      console.log(error);
    }
  } else {
    voterRequest.innerHTML = "please install metamask";
  }
}
async function MAKEPAYMENT() {
  const voterNo = document.getElementById("voterNo").value;
  console.log(`voter no is this ${voterNo}`);
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.makePayment(voterNo);
      console.log(
        `payment successful with this voter no ${transactionResponse}`
      );
    } catch (error) {
      console.log(error);
    }
  } else {
    makePayment.innerHTML = "please install metamask";
  }
}
