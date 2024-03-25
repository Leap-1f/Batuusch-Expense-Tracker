import Link from "next/link";
import { FormTag } from "../components/register/index.jsx";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Register() {
  const router = useRouter();
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      router.push("/register");
    } else {
      router.push("/");
    }
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
          <FormTag />
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
