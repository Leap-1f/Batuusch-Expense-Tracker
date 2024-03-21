import { useState } from "react";
export default function Comfirm2({ setConfirmNunber }) {
  const [balance, setBalance] = useState(0)
  
  const confirmBtn = async () => {
    setConfirmNunber(3);
    const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/users/balance`, {
      method: `POST`,
      mode: "cors",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ balance}),
    });
  };
  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-[200px] mt-20 w-[300px]">
        {" "}
        <div className="flex flex-col gap-[50px]">
          <div className="flex justify-center gap-2">
            <img src="./Vector.png" alt="" />
            <h1 className="text-3xl font-bold">Geld</h1>
          </div>
          <ul className="steps">
            <li className="step before:!h-1 step-primary">Currency</li>
            <li className="step before:!h-1 step-primary">Balance</li>
            <li className="step before:!h-1">Finish</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col items-center gap-5 ">
            <img
              className="bg-blue-600 rounded-[50%] p-2"
              src="./Coins.png"
              alt=""
            />
            <h1 className=" font-bold text-2xl">Set up your cash Balance</h1>
            <div className="w-full">
              <label className="input input-bordered  flex items-center gap-2">
                <input onChange={(e)=>{setBalance(e.target.value)}}  type="text" className="grow w-full" placeholder="Balance" />
              </label>
            </div>
            <p className="text-sm">How much cash do you have in your wallet?</p>

            <button onClick={confirmBtn} className="btn btn-primary w-full">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
