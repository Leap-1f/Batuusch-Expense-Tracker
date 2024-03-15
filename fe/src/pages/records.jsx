import { array, date } from "yup";
import Link from "next/link";
import { useState } from "react";
export default function Record() {
  const [hidden, setHidden] = useState("hidden");
  const [big, setBig] = useState(
    <div className="flex w-full justify-between mt-5 ">
      <div className="w-[48%] rounded-2xl flex flex-col ml-4">
        <div className="flex  bg-slate-200 rounded-2xl">
          <button
            onClick={
              <div className="flex w-full justify-between mt-5 ">
                <div className="w-[48%] rounded-2xl flex flex-col ml-4">
                  <div className="flex  bg-slate-200 rounded-2xl">
                    <button className="w-[50%] bg-[#0166FF] p-2 rounded-2xl ">
                      Expense
                    </button>
                    <button className="w-[50%] bg-slate-200 p-2 rounded-2xl">
                      Income
                    </button>
                  </div>
                  <div className=" relative mt-5 ">
                    <input
                      type="text"
                      placeholder="₮ 000,00"
                      className="px-2 py-7 w-full bg-slate-100 rounded-xl"
                    />
                    <h1 className=" absolute top-1 left-2">Amount</h1>
                  </div>
                  <div className="mt-2">
                    <h1 className="text-xl font-bold pb-2">Category</h1>
                    <select className="select select-bordered w-full ">
                      <option disabled selected>
                        Choose category...
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                  </div>
                  <div className="flex justify-between py-2 ">
                    <div className="w-[45%]">
                      {" "}
                      <h1 className="py-1">Date</h1>
                      <select className="select select-bordered w-[100%]">
                        <option disabled selected>
                          {date}
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                      </select>
                    </div>
                    <div className="w-[45%]">
                      {" "}
                      <h1 className="py-1">Date</h1>
                      <select className="select select-bordered w-[100%]">
                        <option disabled selected>
                          {date}
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                      </select>
                    </div>
                  </div>
                  <button className="btn btn-primary mt-5">Add record</button>
                </div>
                <div className="w-[48%] rounded-2xl flex flex-col ml-4">
                  <div>
                    <h1 className="text-xl font-bold py-2">Pay</h1>
                    <select className="select select-bordered w-full max-w-xs  bg-slate-100 ">
                      <option disabled selected>
                        Who shot first?
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                  </div>
                  <div>
                    {" "}
                    <h1 className="text-xl font-bold py-2">Note</h1>
                    <input
                      type="text"
                      placeholder="Write here"
                      className="p-2 pb-[68%] bg-slate-100 w-[94%]"
                    />
                  </div>
                </div>
              </div>
            }
            className="w-[50%] bg-[#0166FF] p-2 rounded-2xl "
          >
            Expense
          </button>
          {/* asdasdasdasdasdasdad */}
          <button className="w-[50%] bg-slate-200 p-2 rounded-2xl">
            Income
          </button>
        </div>
        <div className=" relative mt-5 ">
          <input
            type="text"
            placeholder="₮ 000,00"
            className="px-2 py-7 w-full bg-slate-100 rounded-xl"
          />
          <h1 className=" absolute top-1 left-2">Amount</h1>
        </div>
        <div className="mt-2">
          <h1 className="text-xl font-bold pb-2">Category</h1>
          <select className="select select-bordered w-full ">
            <option disabled selected>
              Choose category...
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="flex justify-between py-2 ">
          <div className="w-[45%]">
            {" "}
            <h1 className="py-1">Date</h1>
            <select className="select select-bordered w-[100%]">
              <option disabled selected>
                {date}
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="w-[45%]">
            {" "}
            <h1 className="py-1">Date</h1>
            <select className="select select-bordered w-[100%]">
              <option disabled selected>
                {date}
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary mt-5">Add record</button>
      </div>
      <div className="w-[48%] rounded-2xl flex flex-col ml-4">
        <div>
          <h1 className="text-xl font-bold py-2">Pay</h1>
          <select className="select select-bordered w-full max-w-xs  bg-slate-100 ">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div>
          {" "}
          <h1 className="text-xl font-bold py-2">Note</h1>
          <input
            type="text"
            placeholder="Write here"
            className="p-2 pb-[68%] bg-slate-100 w-[94%]"
          />
        </div>
      </div>
    </div>
  );
  const categoryArray = [
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Communication, PC",
    "Financial expenses",
    "Investments",
    "Income",
    "Others",
  ];
  const expenseArray = [
    "Food & Drinks",
    "Food & Drinks",
    "Food & Drinks",
    "Food & Drinks",
    "Food & Drinks",
    "Food & Drinks",
    "Food & Drinks",
    "Food & Drinks",
    "Food & Drinks",
    "Food & Drinks",
  ];
  return (
    <div className="w-[100vw] flex justify-center bg-slate-50 h-fit">
      {" "}
      <div className="container">
        <header className="flex justify-between w-full mt-5">
          <div className="flex gap-10">
            <img src="./Vector.png" alt="" className="h-8" />
            <Link href="/dashboard">
              <h1 className="text-xl cursor-pointer">Dashbourd</h1>
            </Link>
            <h1 className="text-xl cursor-pointer">Records</h1>
          </div>
          <div className="flex gap-10">
            <button
              onClick={() => {
                setHidden("block");
              }}
              className="btn btn-primary text-xl"
            >
              {" "}
              + Record
            </button>
            <img
              src="./Placeholder.jpg"
              alt=""
              className="max-w-15 max-h-15 "
            />
          </div>
        </header>
        <div className="flex justify-between">
          <div className="mt-10 bg-white w-[19%] p-4">
            <div className="flex flex-col gap-4  ">
              <h1 className="text-2xl font-bold">Records</h1>
              <button
                className="btn btn-primary w-full"
                onClick={() => {
                  setHidden("block");
                }}
              >
                + Add
              </button>
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <h1>Type</h1>
              <div className="flex gap-5">
                {" "}
                <input
                  type="radio"
                  name="radio-3"
                  className="radio radio-primary"
                />
                <h1>All</h1>
              </div>
              <div className="flex gap-5">
                {" "}
                <input
                  type="radio"
                  name="radio-3"
                  className="radio radio-primary"
                />
                <h1>Income</h1>
              </div>
              <div className="flex gap-5">
                {" "}
                <input
                  type="radio"
                  name="radio-3"
                  className="radio radio-primary"
                />
                <h1>Expense</h1>
              </div>
              <div className="mt-5 ">
                <div className="flex justify-between">
                  <h1 className="text-2xl font-bold cursor-pointer">
                    Category
                  </h1>
                  <p className=" text-gray-500 cursor-pointer">clear</p>
                </div>
                <div className="mt-5">
                  {categoryArray.map((el) => {
                    return (
                      <div className="flex justify-between pb-5 cursor-pointer">
                        {" "}
                        <img src="./eye.png" alt="" />
                        <p>{el}</p>
                        <img src="./right.png" alt="" />
                      </div>
                    );
                  })}
                  <div className="flex gap-10 cursor-pointer">
                    <img src="./plus.png" alt="" />
                    <h1>Add Category</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <h1>Amount Range</h1>
                <form id="amount-range" className="flex gap-2">
                  {" "}
                  <input
                    type="text"
                    placeholder="Min Amount"
                    className="border px-2 py-1 rounded-sm w-[50%]"
                  />
                  <input
                    type="text"
                    placeholder="Max Amount"
                    className="border px-2 py-1 rounded-sm w-[50%]"
                  />
                </form>
                <input
                  type="range"
                  min={0}
                  max="1000"
                  value="40"
                  className="range range-info"
                />
              </div>
              <input
                type="range"
                min={0}
                max="1000"
                value="40"
                className="range range-info"
                form="amount-range"
              />
            </div>
          </div>
          <div className="w-[77%] mt-10">
            <div className="flex justify-between w-full">
              <h1>Last 30 days</h1>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Choose date
                </option>
                <option>Newest first</option>
                <option>Latest First</option>
              </select>
            </div>
            <div className="flex w-full justify-between px-5 bg-white py-2 rounded-md mt-5">
              <div className="flex gap-5">
                {" "}
                <input type="checkbox" className="checkbox" />
                <h1>Select all</h1>
              </div>

              <p className="text-slate-500">- 35,500₮</p>
            </div>
            <div className="flex w-full justify-between px-5 bg-white py-2 rounded-md mt-5">
              <div className="flex gap-5">
                {" "}
                <input type="checkbox" className="checkbox mt-3 " />
                <img
                  src="./house.png"
                  alt=""
                  className=" bg-blue-600 rounded-[50%] p-2 max-w-10 max-h-10 mt-1"
                />
                <div>
                  {" "}
                  <h1>Lending & Renting</h1>
                  <p>14:00</p>
                </div>
              </div>

              <p className="text-slate-500">- 35,500₮</p>
            </div>
            <div>
              {expenseArray.map((el) => {
                return (
                  <div className="flex w-full justify-between px-5 bg-white py-2 rounded-md mt-5 items-center">
                    <div className="flex gap-5">
                      {" "}
                      <input type="checkbox" className="checkbox mt-3" />
                      <img
                        src="./ForkKnife.png"
                        alt=""
                        className=" bg-red-600 rounded-[50%] p-2 max-w-10 max-h-10 mt-1"
                      />
                      <div>
                        {" "}
                        <h1>{el}</h1>
                        <p>14:00</p>
                      </div>
                    </div>

                    <p className="text-slate-500">- 35,500₮</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setHidden("hidden");
        }}
        className={`w-[100vw] h-full absolute bg-opacity-40 bg-black ${hidden} flex justify-center items-center z-[1]`}
      ></div>
      <div
        id="secondScreen"
        className={`w-fit h-fit absolute  bg-black ${hidden} flex justify-center items-center  top-[50%]`}
      >
        <div className=" absolute w-[50vw] h-[60vh] bg-white rounded-2xl z-[2]">
          <div className="mt-3 border border-t-white border-l-white border-r-white border-b-gray pb-2">
            <div className="flex justify-between px-4">
              <h1 className="text-xl font-bold ">Add record</h1>
              <h1
                className=" cursor-pointer text-2xl px-2 text-center "
                onClick={() => {
                  setHidden("hidden");
                }}
              >
                x
              </h1>
            </div>
          </div>
          {/* ddd */}
          <div className="flex w-full justify-between mt-5 ">
            <div className="w-[48%] rounded-2xl flex flex-col ml-4">
              <div className="flex  bg-slate-200 rounded-2xl">
                <button className="w-[50%] bg-slate-200 p-2 rounded-2xl ">
                  Expense
                </button>
                <button className="w-[50%] bg-green-500 p-2 rounded-2xl">
                  Income
                </button>
              </div>
              <div className=" relative mt-5 ">
                <input
                  type="text"
                  placeholder="₮ 000,00"
                  className="px-2 py-7 w-full bg-slate-100 rounded-xl"
                />
                <h1 className=" absolute top-1 left-2">Amount</h1>
              </div>
              <div className="mt-2">
                <h1 className="text-xl font-bold pb-2">Category</h1>
                <select className="select select-bordered w-full ">
                  <option disabled selected>
                    Choose category...
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="flex justify-between py-2 ">
                <div className="w-[45%]">
                  {" "}
                  <h1 className="py-1">Date</h1>
                  <select className="select select-bordered w-[100%]">
                    <option disabled selected>
                      {date}
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div className="w-[45%]">
                  {" "}
                  <h1 className="py-1">Date</h1>
                  <select className="select select-bordered w-[100%]">
                    <option disabled selected>
                      {date}
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              </div>
              <button className="btn bg-green-500 mt-5">Add record</button>
            </div>
            <div className="w-[48%] rounded-2xl flex flex-col ml-4">
              <div>
                <h1 className="text-xl font-bold py-2">Pay</h1>
                <select className="select select-bordered w-full max-w-xs  bg-slate-100 ">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div>
                {" "}
                <h1 className="text-xl font-bold py-2">Note</h1>
                <input
                  type="text"
                  placeholder="Write here"
                  className="p-2 pb-[68%] bg-slate-100 w-[94%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
