import { ethers } from "ethers";
import { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { toast } from "react-hot-toast";

export const YourContribution = () => {
  const { crowdfundingContract, selectedAccount } = useContext(Web3Context);
  const [contribution, setContribution] = useState(0);

  const yourContribution = async () => {
    try {
      const contributionRaw = await crowdfundingContract.contributers(selectedAccount);

      const amount = ethers.formatUnits(contributionRaw, 18);
      setContribution(amount);

      toast.success("Your contribution fetched successfully");
    } catch (error) {
      toast.error( "Transaction failed check console for error");
      console.error(error)
    }
  };

  return (
  <div className="flex flex-col">
    <h2 className="text-xl font-semibold text-slate-100 mb-5">Your Contribution</h2>

    <p className="text-sm text-slate-400 mb-4">
      View how much ETH you have contributed to this campaign.
    </p>

    <button
      onClick={yourContribution}
      className="w-full mb-4"
    >
      Get Your Contribution
    </button>

    {contribution && (
      <div className="mt-2 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg">
        <p className="text-sm text-slate-400 mb-1">Your Contribution</p>
        <p className="text-2xl font-bold text-purple-400">{contribution} ETH</p>
      </div>
    )}
  </div>
);

};
