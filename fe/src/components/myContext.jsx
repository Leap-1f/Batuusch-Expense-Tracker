import { useState, createContext, Children } from "react";
import Comfirm from "@/pages/comfirm";
import Comfirm1 from "./Comfirm1.jsx";
export const UserContext = createContext();
export const Currency = ({children}) => {
  const [value, setValue] = useState("MNT");
console.log(value);
  return (
    <UserContext.Provider value={value}>
      <select
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="select select-bordered select-lg w-[500px] max-w-xs"
      >
        <option disabled selected>
          MNT - Mongolian Tugrik
        </option>
        <option value={"CNY"}>CNY - China Yuan</option>
        <option value={"MNT"}> MNT - Mongolian Tugrik</option>
        <option value={"USD"}>USD - USA Dollar</option>
        <option value={"JPY"}>JPY - Japan Yen</option>
      </select>
      {children}
    </UserContext.Provider>
  );
};
