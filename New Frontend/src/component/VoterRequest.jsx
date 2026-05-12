import { useContext, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { toast } from "react-hot-toast";

export const VoterRequest = () => {
  const { crowdfundingContract } = useContext(Web3Context);
  const [voterNumber, setVoterNumber] = useState("");

  const voterRequest = async (e) => {
    e.preventDefault();
    try {
      if (!voterNumber || isNaN(voterNumber)) {
        toast.error("Please enter a valid number");
        return;
      }

      const transaction = await crowdfundingContract.voterRequest(voterNumber);

      await toast.promise(transaction.wait(1), {
        loading: "Transaction is loading...",
        success: "Transaction successful",
        error: "Transaction failed",
      });

      setVoterNumber("");
    } catch (error) {
      toast.error("Transaction failed Check console for error");
      console.error(error.message)
    }
  };

  return (
  <div className="flex flex-col">
    <h2 className="text-xl font-semibold text-slate-100 mb-5">Vote on Request</h2>

    <form onSubmit={voterRequest} className="flex flex-col space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Request Number</label>
        <input
          type="text"
          placeholder="Enter request number"
          value={voterNumber}
          onChange={(e) => setVoterNumber(e.target.value)}
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2"
      >
        Submit Vote
      </button>
    </form>
  </div>
);

};
