import { useContext } from "react";
import { Web3Context } from "../context/Web3Context";
import { toast } from "react-hot-toast";

export const Refund = () => {
  const { crowdfundingContract } = useContext(Web3Context);

  const refund = async () => {
    try {
      const transaction = await crowdfundingContract.refund();

      await toast.promise(transaction.wait(1), {
        loading: "Transaction is loading...",
        success: "Refund successful",
        error: "Transaction failed",
      });
    } catch (error) {
      toast.error( "Transaction failed check console for error");
      console.error(error)
    }
  };

  return (
  <div className="flex flex-col">
    <h2 className="text-xl font-semibold text-slate-100 mb-5">Request Refund</h2>

    <p className="text-sm text-slate-400 mb-4">
      Request a refund of your contribution if the campaign conditions allow.
    </p>

    <button
      onClick={refund}
      className="w-full"
    >
      Request Refund
    </button>
  </div>
);

};
