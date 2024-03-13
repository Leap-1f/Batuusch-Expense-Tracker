// import Link from "next/link";
// import { useState, useEffect, createContext } from "react";
// import { useRouter } from "next/router";
// import * as Yup from "yup";
// import { userSchema } from "../components/validation.js";
// export const UserDatacContext = createContext();
// export default function UserDataProvider({ children }) {
//   const [allData, setAllData] = useState({ name: "", email: "", password: "" });
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rePassword, setRePassword] = useState("");
//   const { push, reload } = useRouter();
//   const getData = async () => {
//     const response = await fetch("http://localhost:8080/users");
//     const data = await response.json();
//     setAllData(data);
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   const PostData = async (event) => {
//     event.preventDefault();
//     let formData = {
//       name: name,
//       email: email,
//       password: password,
//     };
//     const isValid = await userSchema.isValid(formData);
//     const emails = allData.map((el) => el.email);
//     if (rePassword == password && isValid === true && !emails.includes(email)) {
//       const response = await fetch("http://localhost:8080/users/signup", {
//         method: `POST`,
//         mode: "cors",
//         headers: {
//           Accept: "application/json, text/plain, */*",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });
//       push("/comfirm");
//     } else {
//       reload("/register");
//       alert("unmatched password  or invalid email!");
//     }
//   };
//   return (
//     <>
//       <UserDatacContext.Provider value={"s"}>
//         {children}
//       </UserDatacContext.Provider>{" "}
      
//     </>
//   );
// }
