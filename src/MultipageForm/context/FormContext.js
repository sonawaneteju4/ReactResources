import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [data, setData] = useState({

    //page one
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhone: Number,

    // page 2

    lane: "",
    city: "",
    state: "",
    pin: Number,
    
    // page 3
    sendEmail: false,
  });

  const title = {
    0: "User Info",
    1: "Address",
    2: "Recive Emails!",
  };

  const [page, setPage] = useState(0);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { userInfo, userAddrress, userPass, sendEmail, ...requiredInputs } =
    data;

  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;
  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("bill") && key !== "billAddress2")
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(data)
    .filter((key) => key.startsWith("ship") && key !== "shipAddress2")
    .map((key) => data[key])
    .every(Boolean);

  const disablePrev = page === 0;

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2);

  const prevHide = page === 0 && "remove-button";

  const nextHide = page === Object.keys(title).length - 1 && "remove-button";

  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";
  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        handleChange,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
