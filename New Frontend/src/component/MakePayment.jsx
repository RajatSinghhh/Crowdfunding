import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Web3Context } from "../context/Web3Context";

export const MakePayment = () => {
  const { crowdfundingContract } = useContext(Web3Context);
  const [requestNumber, setRequestNumber] = useState("");

  const makePayment = async (e) => {
    e.preventDefault();
    try {
      if (!requestNumber || isNaN(requestNumber)) {
        toast.error("Please enter a valid number");
        return;
      }

      const transaction = await crowdfundingContract.makePayment(requestNumber);

      await toast.promise(transaction.wait(1), {
        loading: "Transaction is loading...",
        success: "Transaction successful",
        error: "Transaction failed",
      });

      setRequestNumber("");
    } catch (error) {
      toast.error( "Transaction failed check console for error");
      console.error(error)
    }
  };

 return (
  <div className="flex flex-col">
    <h2 className="text-xl font-semibold text-slate-100 mb-5">Make Payment</h2>

    <form onSubmit={makePayment} className="flex flex-col space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Request Number</label>
        <input
          type="text"
          placeholder="Enter request number"
          value={requestNumber}
          onChange={(e) => setRequestNumber(e.target.value)}
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2"
      >
        Make Payment
      </button>
    </form>

    <p className="text-xs text-amber-400/80 mt-4 px-3 py-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
      Only the contract owner can call this function.
    </p>
  </div>
);

};
