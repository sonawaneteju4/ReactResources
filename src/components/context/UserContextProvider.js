import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState({email : "", phone : ""})
    const onChnange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user)
      };
    return (
        <UserContext.Provider value={{user, setUser, onChnange}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;