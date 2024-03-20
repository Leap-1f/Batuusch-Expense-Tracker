import { useState, useEffect } from "react";
export const ModalBtn2 = ({ setConfirmNunber }) => {
  const [hiddenModal, setHiddenModal] = useState("hidden");
  const handler = () => {
    setConfirmNunber(3);
  };
  const categoryArray = [
    {
      img: "./house2.png",
      typr: "Home",
    },
    {
      img: "./Gift.png",
      typr: "Gift",
    },
    {
      img: "./ForkKnife1.png",
      typr: "Food",
    },
    {
      img: "./Wine.png",
      typr: "Drink",
    },
    {
      img: "./Taxi.png",
      typr: "Taxi",
    },
    {
      img: "./Tshirt.png",
      typr: "Shopping",
    },
  ];
  return (
    <div className="flex w-full justify-between mt-5 ">
      <div className="w-[48%] rounded-2xl flex flex-col ml-4">
        <div className="flex  bg-slate-200 rounded-2xl">
          <button
            onClick={() => {
              setConfirmNunber(1);
            }}
            className="w-[50%] bg-slate-200 p-2 rounded-2xl "
          >
            Expense
          </button>
          <button
            onClick={() => {
              setConfirmNunber(2);
            }}
            className="w-[50%] bg-green-500 p-2 rounded-2xl"
          >
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
        <div className="mt-2 relative w-full">
          <h1 className="text-xl font-bold pb-2">Category</h1>
          <div
            onClick={() => {
              setHiddenModal("block");
            }}
            className="select select-bordered w-full items-center"
          >
            Choose category
          </div>
          <div className={`absolute top-20 w-full ${hiddenModal}`}>
            <div
              className="flex gap-5 bg-white pb-2 cursor-pointer"
              onClick={handler}
            >
              <img src="./plus.png" alt="" />
              <p>Add Category</p>
            </div>
            {categoryArray.map((el) => {
              return (
                <div className="flex flex-col bg-white w-full">
                  <div
                    onClick={() => {
                      setHiddenModal("hidden");
                    }}
                    className="flex gap-4 pb-2 cursor-pointer"
                  >
                    {" "}
                    <img src={el.img} alt="" />
                    <p>{el.typr}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between py-2 ">
          <div className="w-[45%]">
            {" "}
            <h1 className="py-1">Date</h1>
            <select className="select select-bordered w-[100%]">
              <option disabled selected></option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="w-[45%]">
            {" "}
            <h1 className="py-1">Date</h1>
            <select className="select select-bordered w-[100%]">
              <option disabled selected></option>
              <option>Greedo</option>
              <option>Han Solo</option>
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
            className="p-2 pb-[64%] bg-slate-100 w-[94%]"
          />
        </div>
      </div>
    </div>
  );
};
