import { data } from "autoprefixer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const [allData, setAllData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { push, reload } = useRouter();
  const PostData = async (event) => {
    event.preventDefault();
    const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}}/users/login`, {
      method: `POST`,
      mode: "cors",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.status === 200) {
      push("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
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
              <p>Welcome back, Please enter your details</p>
            </div>
          </div>
          <form
            // onSubmit={getData}
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
            <button onClick={PostData} className="btn btn-primary text-xl">
              Log in
            </button>
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
