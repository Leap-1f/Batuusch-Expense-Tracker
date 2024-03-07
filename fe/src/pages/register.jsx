import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Register() {
  const [allData, setAllData] = useState({ name: "", email: "", password: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { push, reload } = useRouter();
  const getData = async () => {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    setAllData(data);
  };

  const PostData = async (event) => {
    event.preventDefault();

    if (rePassword == password) {
      const response = await fetch("http://localhost:8080/users/signup", {
        method: `POST`,
        mode: "cors",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      push("/");
    } else {
      reload("/register");
      console.log("aldaa");
    }
  };
  useEffect(() => {
    getData();
  }, []);
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
              <h1 className="text-2xl font-bold">Create Geld account</h1>
              <p>Sign up below to create your Wallet account</p>
            </div>
          </div>
          <form method="post" className="mt-7 flex flex-col gap-4">
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Name"
              className="w-full bg-slate-100 py-2 rounded-md px-2 border border-[#D1D5DB]"
            />
            <input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
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
            <input
              onChange={(event) => {
                setRePassword(event.target.value);
              }}
              type="text"
              placeholder="Re-Password"
              className="w-full bg-slate-100 py-2 rounded-md px-2 border border-[#D1D5DB]"
            />
            <button
              onClick={PostData}
              className="btn btn-primary min-w-[280px] text-xl"
            >
              Sign up
            </button>
          </form>
          <Link href="/">
            <div className="flex gap-3 justify-center mt-3">
              <p className="cursor-pointer">Already have account?</p>
              <p className="cursor-pointer text-blue-400">Log in</p>
            </div>
          </Link>
        </div>
      </div>

      <div className=" w-[50vw] h-[100vh] bg-[#0166FF]"></div>
    </main>
  );
}
