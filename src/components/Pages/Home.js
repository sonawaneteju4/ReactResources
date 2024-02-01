import React, {  useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import FormatPhoneNumber from "./FormatePhoneNumber";
import InputMask from 'react-input-mask';

function Home() {
  const nav = useNavigate();
  const {user, setUser } = useContext(UserContext);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(user);
    nav("about");
  };

  return (
    <div className="vh-100">
      <div className="container">
      <FormatPhoneNumber input={"1234567890"}/>

        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <InputMask
              type="tel"
              name="phone"
              value={user.phone}
              class="form-control"
              mask="(999)-999-9999" 
              maskChar=" "
              maxLength={10}
              id="exampleInputPassword1"
              onChange={onChange}
              placeholder="(xxx)-xxx-xxxx"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
