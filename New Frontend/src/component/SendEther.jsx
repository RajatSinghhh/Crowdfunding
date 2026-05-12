import { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { toast } from "react-hot-toast";
import { ethers } from "ethers";

export const SendEther = () => {
  const { crowdfundingContract } = useContext(Web3Context);
  const [amountInUint, setAmountInUint] = useState("");

  const sendEther = async (e) => {
    e.preventDefault();
    try {
      if (!amountInUint || isNaN(amountInUint)) {
        toast.error("Please enter a valid number");
        return;
      }

      const amountInEth = ethers.parseEther(amountInUint);

      const transaction = await crowdfundingContract.sendEth({ value: amountInEth });

      await toast.promise(transaction.wait(1), {
        loading: "Transaction is loading...",
        success: "Transaction successful",
        error: "Transaction failed",
      });

      setAmountInUint("");
    } catch (error) {
      toast.error( "Transaction failed check console for error");
      console.error(error)
    }
  };

return (
  <div className="flex flex-col">
    <h2 className="text-xl font-semibold text-slate-100 mb-5">Contribute Ether</h2>

    <form onSubmit={sendEther} className="flex flex-col space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Amount (ETH)</label>
        <input
          type="text"
          placeholder="0.01"
          value={amountInUint}
          onChange={(e) => setAmountInUint(e.target.value)}
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2"
      >
        Send Ether
      </button>
    </form>
  </div>
);


};
