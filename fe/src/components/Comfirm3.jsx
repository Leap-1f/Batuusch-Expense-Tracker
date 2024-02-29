export default function Comfirm3() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-[200px] mt-20 w-[300px]">
        {" "}
        <div className="flex flex-col gap-[50px]">
          <div className="flex justify-center gap-2">
            <img src="./Vector.apng" alt="" />
            <h1 className="text-3xl font-bold">Geld</h1>
          </div>
          <ul className="steps">
            <li className="step before:!h-1 step-primary">Currency</li>
            <li className="step before:!h-1 step-primary">Balance</li>
            <li className="step before:!h-1 step-primary">Finish</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col items-center gap-5 ">
            <img
              className="bg-blue-600 rounded-[50%] p-2"
              src="./Check.png"
              alt=""
            />
            <h1 className=" font-bold text-2xl">Good job</h1>

            <p className="text-sm">
              Your very first account has been created. Now continue to
              dashboard and start tracking
            </p>

            <button className="btn btn-primary w-full">Go to Dashboard</button>
          </div>
        </div>
      </div>
    </main>
  );
}
