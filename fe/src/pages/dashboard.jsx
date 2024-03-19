import Link from "next/link";
import BarChart from "@/components/charts/Barchart";
import Donutchart from "@/components/charts/Donutchart";
export default function Dashboard() {
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
          <div className="flex gap-10">
            <Link href="/records">
              <button className="btn btn-primary text-xl"> + Record</button>
            </Link>
            <img src="./Placeholder.jpg" alt="" className="" />
          </div>
        </header>
        <div className="mt-10 flex justify-between w-full">
          <img src="./card.png" alt="" className="w-[32%]" />
          <div className="border w-[32%] h-[27`0px] rounded-2xl flex flex-col bg-white justify-around">
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
          <div className="border w-[32%] h-[270px] rounded-2xl flex flex-col bg-white justify-around">
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
