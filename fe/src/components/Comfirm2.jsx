export default function Comfirm2({ confrimBtn }) {
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
            <div>
              <label className="input input-bordered  flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                />
              </label>
            </div>
            <p className="text-sm">How much cash do you have in your wallet?</p>

            <button onClick={confrimBtn} className="btn btn-primary w-full">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
