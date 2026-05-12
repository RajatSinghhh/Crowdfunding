import { Web3Context } from "../context/Web3Context";
import { useState } from "react";
import { connectWallet } from "../utils/connectWallet";
import {toast} from "react-hot-toast"

export const Wallet = ({children}) => {
    const[state,setState] = useState({
        crowdfundingContract:null,
        selectedAccount:null,
        provider:null
    })
    const handleWallet = async() => {
        try{
            const {crowdfundingContract,selectedAccount,provider} = await connectWallet()
            setState({crowdfundingContract,selectedAccount,provider})
            toast.success("Metamask Connected")
        }
        catch(error){
            toast.error("Error connecting to metamask")
        }
    }
    return (
  <>
    <Web3Context.Provider value={state}>
      {children}
    </Web3Context.Provider>

    <button
      onClick={handleWallet}
      className="fixed top-6 right-6 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl active:scale-95 transition-all duration-200 z-50 font-semibold max-w-[200px] truncate"
    >
      {state.selectedAccount
        ? `${state.selectedAccount.slice(0, 6)}...${state.selectedAccount.slice(-4)}`
        : "Connect Wallet"}
    </button>
  </>
);

}