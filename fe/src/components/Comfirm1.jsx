export default function Comfirm1({ confrimBtn }) {
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
            <li className="step before:!h-1 ">Balance</li>
            <li className="step before:!h-1">Finish</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col items-center gap-5 ">
            <img
              className="bg-blue-600 rounded-[50%] p-2"
              src="./Money.png"
              alt=""
            />
            <h1 className=" font-bold text-2xl">Select base currency</h1>
            <div>
              <select className="select select-bordered select-lg w-[500px] max-w-xs">
                <option disabled selected>
                  MNT - Mongolian Tugrik
                </option>
                <option>$ - USA dollar</option>
                <option> MNT - Mongolian Tugrik</option>
                <option>$ - USA dollar</option>
              </select>
            </div>
            <p className="text-sm">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one{" "}
            </p>

            <button onClick={confrimBtn} className="btn btn-primary w-full">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
