import { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { toast } from "react-hot-toast";
import { ethers } from "ethers";

export const CreateRequest = () => {
  const { crowdfundingContract } = useContext(Web3Context);
  const [description, setDescription] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [value, setValue] = useState("");

  const createRequest = async (e) => {
    e.preventDefault();
    try {
      if (!value || isNaN(value)) {
        toast.error("Please enter a valid number");
        return;
      }

      if (!ethers.utils.isAddress(recipientAddress)) {
        toast.error("Invalid Ethereum address");
        return;
      }

      const transaction = await crowdfundingContract.createRequest(
        description,
        recipientAddress,
        ethers.utils.parseEther(value)
      );

      await toast.promise(transaction.wait(1), {
        loading: "Transaction is loading...",
        success: "Transaction successful",
        error: "Transaction failed",
      });

      setDescription("");
      setRecipientAddress("");
      setValue("");
    } catch (error) {
      toast.error( "Transaction failed check console for error");
      console.error(error)
    }
  };

  return (
  <div className="flex flex-col">
    <h2 className="text-xl font-semibold text-slate-100 mb-5">Create Spending Request</h2>

    <form onSubmit={createRequest} className="flex flex-col space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Description</label>
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Recipient Address</label>
        <input
          type="text"
          placeholder="0x..."
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Amount (ETH)</label>
        <input
          type="text"
          placeholder="0.01"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2"
      >
        Create Request
      </button>
    </form>
  </div>
);

};
