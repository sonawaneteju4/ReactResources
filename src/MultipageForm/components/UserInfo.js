import React from "react";
import useFormContext from "../context/useFormContext";

const UserInfo = () => {
  const { data, handleChange } = useFormContext();

  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            <div>
              <label className="form-label" htmlFor="userName">
                {" "}
                Name
              </label>
            </div>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Full Name"
              pattern="([A-Z])[\w+.]{1,}"
              value={data.userName}
              onChange={handleChange}
            />
          </div>
          <div className="flex-col">
            <div>
              <label className="form-label" htmlFor="userEmail">
                {" "}
                Email
              </label>
            </div>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              placeholder=" Email"
              value={data.userEmail}
              onChange={handleChange}
            />
          </div>
          <div>
            <div>
              <label className="form-label" htmlFor="userPhone">
                Phone
              </label>
            </div>
            <input
              type="number"
              id="userPhone"
              name="userPhone"
              placeholder="Phone"
              value={data.userPhone}
              onChange={handleChange}
            />
          </div>
          <div>
            <div>
              <label className="form-label" htmlFor="userPassword">
                Password
              </label>
            </div>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              placeholder="Create New Password"
              value={data.userPassword}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
