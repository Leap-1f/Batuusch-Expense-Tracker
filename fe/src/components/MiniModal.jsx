
import { useState, useEffect } from "react";
export default function MiniModal({ setConfirmNunber }) {
  const [hidden, setHidden] = useState("hidden");
  const arr = [];
  return (
    <div className="w-ful flex flex-col items-center h-full mt-10 gap-10">
      <div className="w-full flex gap-5 justify-center">
        <div className="w-[30%] relative">
          {" "}
          <div
            onClick={() => {
              setHidden("block");
            }}
            className="select select-bordered max-w-xs w-[100%] items-center"
          >
            Choose shape
          </div>
          <div className={`w-full absolute left-0 top-10 ${hidden}`}>

          </div>
        </div>
        <input
          type="text"
          className="border-2 w-[60%] rounded-md px-2"
          placeholder="Write name"
        />
      </div>
      <button className="btn btn-accent w-[90%]">Add Category</button>
    </div>
  );
}
