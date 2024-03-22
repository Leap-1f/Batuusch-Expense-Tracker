import Link from "next/link";
import BarChart from "@/components/charts/Barchart";
import Donutchart from "@/components/charts/Donutchart";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [hidden, setHidden] = useState("hidden");
  const router = useRouter();
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }, []);
  const logOut = () => {
    localStorage.removeItem("id");
    router.push("/");
  };
  return (
    <main className="w-[100vw] flex justify-center bg-slate-50 h-[100vh]">
      <div className="container ">
        {" "}
        <header className="flex justify-between w-full mt-5">
          <div className="flex gap-10">
            <img src="./Vector.png" alt="" className="h-8" />
            <h1 className="text-xl">Dashbourd</h1>
            <Link href="/records">
              <h1 className="text-xl cursor-pointer">Records</h1>
            </Link>
          </div>
          <div className="flex gap-10 items-center ">
            <Link href="/records">
              <button className="btn btn-primary text-xl w-[120px]">
                {" "}
                + Record
              </button>
            </Link>
            <div className=" relative w-full">
              {" "}
              <img
                onClick={() => {
                  setHidden("block");
                }}
                src="./Placeholder.jpg"
                alt=""
                className=""
              />
              <button
                onClick={logOut}
                className={`btn absolute top-12 w-[100px] right-0 ${hidden}`}
              >
                Log out
              </button>
            </div>
          </div>
        </header>
        <div className="mt-10 flex justify-between w-full">
          <div className="border w-[32%] h-[250px] rounded-2xl flex flex-col bg-blue-600 justify-around">
            <div className="flex  gap-2 ml-5 items-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5348 7.47163V0.703369H7.61915V7.47163H0.70343V14.3873H7.61915V21.1556H14.5348V14.3873H21.4506V7.47163H14.5348ZM14.5348 14.2399H7.61915V7.62013H14.5348V14.2399Z"
                  fill="white"
                />
              </svg>
              <h1 className="text-2xl font-bold">Geld</h1>
            </div>
            <div className="flex justify-between px-5 items-center">
              <div>
                <p className=" text-white text-2xl">Cash</p>
                <h1 className="text-white text-4xl">100000</h1>
              </div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.2692 10.0015C21.6815 9.6826 22.2743 9.7583 22.5932 10.1706C27.1419 16.0511 27.1289 23.744 22.5945 29.632C22.2764 30.045 21.6838 30.122 21.2708 29.8039C20.8578 29.4859 20.7808 28.8932 21.0989 28.4802C25.1125 23.2686 25.1207 16.5234 21.1001 11.3256C20.7812 10.9132 20.8569 10.3205 21.2692 10.0015Z"
                  fill="white"
                />
                <path
                  d="M17.5023 12.4362C17.9143 12.1169 18.5071 12.1921 18.8264 12.6042C22.2385 17.0076 22.2246 22.7872 18.8281 27.1969C18.51 27.6098 17.9174 27.6867 17.5044 27.3687C17.0915 27.0506 17.0145 26.458 17.3326 26.045C20.2089 22.3107 20.2163 17.4797 17.3343 13.7604C17.015 13.3483 17.0902 12.7555 17.5023 12.4362Z"
                  fill="white"
                />
                <path
                  d="M15.6918 15.9561C15.3739 15.543 14.7813 15.4658 14.3682 15.7838C13.9551 16.1017 13.878 16.6943 14.1959 17.1074C15.4989 18.8004 15.5068 20.9748 14.1964 22.6748C13.8781 23.0877 13.9548 23.6803 14.3677 23.9986C14.7805 24.3168 15.3732 24.2401 15.6914 23.8273C17.528 21.4447 17.5146 18.3244 15.6918 15.9561Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="border w-[32%] h-[250px] rounded-2xl flex flex-col bg-white justify-around">
            <div className="flex gap-3 w-full mt-3 border border-t-white border-l-white border-r-white border-b-grey pb-3">
              <img src="./greendot.png" alt="" className="h-2 mt-[10px] ml-2" />
              <p className="text-xl font-bold">Your income</p>
            </div>
            <div className="ml-2">
              <h1 className="text-5xl font-bold">1,200,000₮</h1>
              <p className="mt-3 text-gray-400">Your Income Amount</p>
            </div>
            <div className="flex gap-2 ml-2">
              <img src="./up.png" alt="" />
              <p>32% from last month</p>
            </div>
          </div>
          <div className="border w-[32%] h-[250px] rounded-2xl flex flex-col bg-white justify-around">
            <div className="flex gap-3 w-full mt-3 border border-t-white border-l-white border-r-white border-b-grey pb-3">
              <img src="./bluedot.png" alt="" className="h-2 mt-[10px] ml-2" />
              <p className="text-xl font-bold">Total Expenses</p>
            </div>
            <div className="ml-2">
              <h1 className="text-5xl font-bold">-1,200,000₮</h1>
              <p className="mt-3 text-gray-400">Your Income Amount</p>
            </div>
            <div className="flex gap-2 ml-2">
              <img src="./down.png" alt="" />
              <p>32% from last month</p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-between">
            <BarChart />
            <Donutchart />
          </div>
        </div>
        <div className="mt-10 bg-white w-full rounded-xl">
          <div className=" border border-t-white border-l-white border-r-white border-b-grey py-3">
            <h1>Last records</h1>
          </div>
          <div>
            <div>
              <img src="./house.png" alt="" className="bg-blue w-10" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
}
