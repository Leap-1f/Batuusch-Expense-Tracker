import { array, date } from "yup";
import Link from "next/link";
import Modals from "@/components/register/Modals";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Record() {
  const router = useRouter();
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      router.push("/records");
    } else {
      router.push("/");
    }
  }, []);
  const logOut = () => {
    localStorage.removeItem("id");
    router.push("/");
  };
  const [hidden, setHidden] = useState("hidden");
  const [hiddenn, setHiddenn] = useState("hidden");
  const [confirmNunber, setConfirmNunber] = useState(1);
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
              <h1 className="text-xl">Dashbourd</h1>
            </Link>
            <h1 className="text-xl cursor-pointer">Records</h1>
          </div>
          <div className="flex gap-10 items-center ">
            <Link href="/records">
              <button
                onClick={() => {
                  setHidden("block"), setConfirmNunber(1);
                }}
                className="btn btn-primary text-xl w-[120px]"
              >
                {" "}
                + Record
              </button>
            </Link>
            <div className=" relative w-full">
              {" "}
              <img
                onClick={() => {
                  setHiddenn("block");
                }}
                src="./Placeholder.jpg"
                alt=""
                className=""
              />
              <button
                onClick={logOut}
                className={`btn absolute top-12 w-[100px] right-0 ${hiddenn}`}
              >
                Log out
              </button>
            </div>
          </div>
        </header>
        <div className="flex justify-between">
          <div className="mt-10 bg-white w-[19%] p-4">
            <div className="flex flex-col gap-4  ">
              <h1 className="text-2xl font-bold">Records</h1>
              <button
                className="btn btn-primary w-full"
                onClick={() => {
                  setHidden("block"), setConfirmNunber(1);
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
                    <h1   onClick={() => {
                  setHidden("block"), setConfirmNunber(1);
                }}>Add Category</h1>
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
        className={`w-[100vw] h-[200vh] absolute bg-opacity-40 bg-black ${hidden} flex justify-center items-center z-[1]`}
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
          <Modals
            setConfirmNunber={setConfirmNunber}
            confirmNunber={confirmNunber}
          />
        </div>
      </div>
    </div>
  );
}
