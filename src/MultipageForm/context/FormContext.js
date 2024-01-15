import { createContext, useState, useEffect } from "react";

const FormContext = createContext();

export const formProvider = ({ children }) => {
  const formInfo = {
    0: "Page 1",
    1: "Page 2",
    2: "Page 3",
  };

  const [page, setpage] = useState(0);

  const handleChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };

  const [userData, setuserData] = useState({
    //page one
    userName: "",
    userEmail: "",
    userPhone: Number,
    // page 2
    address: [{ lane: "" }, { city: "" }, { state: "" }, { pin: Number }],
    // page 3
    userPassword: "",
    sendEmail: false,
  });

  return (
    <FormContext.Provider
      value={{ formInfo, page, setpage, userData, setuserData, handleChange }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
