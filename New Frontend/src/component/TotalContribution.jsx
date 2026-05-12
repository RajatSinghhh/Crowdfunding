import { ethers } from "ethers";
import { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { toast } from "react-hot-toast";

export const TotalContribution = () => {
  const [contribution, setContribution] = useState(0);
  const { crowdfundingContract } = useContext(Web3Context);

  const totalContribution = async () => {
    try {
      const contributionRaw = await crowdfundingContract.raisedAmount();

      const amount = ethers.formatUnits(contributionRaw, 18);
      setContribution(amount);

      toast.success("Total contribution fetched successfully");
    } catch (error) {
      toast.error( "Transaction failed check console for error");
      console.error(error)
    }
  };

 return (
  <div className="flex flex-col">
    <h2 className="text-xl font-semibold text-slate-100 mb-5">Total Contribution</h2>

    <p className="text-sm text-slate-400 mb-4">
      View the total amount of ETH contributed to the campaign.
    </p>

    <button
      onClick={totalContribution}
      className="w-full mb-4"
    >
      Get Total Contribution
    </button>

    {contribution && (
      <div className="mt-2 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg">
        <p className="text-sm text-slate-400 mb-1">Total Contribution</p>
        <p className="text-2xl font-bold text-indigo-400">{contribution} ETH</p>
      </div>
    )}
  </div>
);

};
