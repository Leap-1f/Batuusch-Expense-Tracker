import Link from "next/link";
export default function Register() {
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
          <form
            action="/login"
            method="post"
            className="mt-7 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-slate-100 py-2 rounded-md px-2 border border-[#D1D5DB]"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full bg-slate-100 py-2 rounded-md px-2 border border-[#D1D5DB]"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-full bg-slate-100 py-2 rounded-md px-2 border border-[#D1D5DB]"
            />
            <input
              type="text"
              placeholder="Re-Password"
              className="w-full bg-slate-100 py-2 rounded-md px-2 border border-[#D1D5DB]"
            />
            <button className="btn btn-primary text-xl">Sign up</button>
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
