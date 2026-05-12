import { Contract,ethers } from "ethers"

export const connectWallet = async () => {
    try {
        let [provider,signer,crowdfundingContract] = [null,null,null]
        if (!window.ethereum) {
            console.log("please install metamask")
        }
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        const selectedAccount = accounts[0]
        if (!selectedAccount) {
            console.log("Account not found")
        }
        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner()
        crowdfundingContract = new Contract(import.meta.env.VITE_CONTRACT_ADDRESS, import.meta.env.VITE_ABI, signer)
        console.log(crowdfundingContract)
        return { crowdfundingContract,selectedAccount,provider }
        
    }
    catch (error) {
        console.log(error)
    }
}