import { createContext , useState } from "react";
export const UserDatacContext =createContext();
export default  function UserDataProvider({children}){
    return(
        <UserDatacContext.Provider value={"as"}>
            {children}
        </UserDatacContext.Provider>
    )
}