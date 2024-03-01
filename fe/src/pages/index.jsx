import Link from "next/link";
import { useState, useEffect } from "react";
export default function Home() {
  const [allData, setAllData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getData = async () => {
    const response = await fetch("http://localhost:8080");
    const data = await response.json();
    setAllData(data);
  };
  useEffect(() => {
    getData();
  }, [email, password]);
  const confirmData = () => {
    allData.forEach((el) => {
      if (el.email == email && el.password == password) {
        console.log("taarsan");
      } else {
        console.log("taaraagui");
      }
    });
  };
  return (
    <main className="w-full flex ">
      <div className=" w-[50vw] h-[100vh] flex justify-center items-center ">
        <div className="w-[35%]">
          <div className="flex flex-col gap-6">
            {" "}
            <div className="flex justify-center gap-2">
              <img src="./Vector.png" alt="" />
              <h1 className="text-3xl font-bold">Geld</h1>
            </div>
            <div className=" text-center flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p onClick={confirmData}>
                Welcome back, Please enter your details
              </p>
            </div>
          </div>
          <form
            // onSubmit={getData}
            action="/login"
            method="post"
            className="mt-7 flex flex-col gap-4"
          >
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              placeholder="Email"
              className="w-full bg-slate-100 py-2 rounded-md px-2 border border-[#D1D5DB]"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="text"
              placeholder="Password"
              className="w-full bg-slate-100 py-2 rounded-md px-2 border border-[#D1D5DB]"
            />
            <button className="btn btn-primary text-xl">Log in</button>
          </form>
          <Link href="/register">
            <div className="flex gap-3 justify-center mt-3">
              <p className="cursor-pointer">Don’t have account?</p>
              <p className="cursor-pointer text-blue-400 ">Sign up</p>
            </div>
          </Link>
        </div>
      </div>

      <div className=" w-[50vw] h-[100vh] bg-[#0166FF]"></div>
    </main>
  );
}
