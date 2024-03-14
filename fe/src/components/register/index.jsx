import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { userSchema } from "../validation.js";
export const FormTag = () => {
  const [allData, setAllData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { push, reload } = useRouter();
  const getData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/users`);
    const data = await response.json();
    setAllData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const PostData = async (event) => {
    event.preventDefault();
    let formData = {
      name: name,
      email: email,
      password: password,
    };
    const isValid = await userSchema.isValid(formData);
    const emails = allData.map((el) => el.email);
    if (rePassword == password && isValid === true && !emails.includes(email)) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/users/signup`,
        {
          method: `POST`,
          mode: "cors",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      push("/comfirm");
    } else {
      reload("/register");
      alert("unmatched password  or invalid email!");
    }
  };
  return (
    <>
      <form
        onSubmit={PostData}
        method="post"
        className="mt-7 flex flex-col gap-4"
      >
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
        <button className="btn btn-primary min-w-[280px] text-xl">
          Sign up
        </button>
      </form>
    </>
  );
};
