import React, {  useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
function Home() {
  const nav = useNavigate();
  const {user, setUser } = useContext(UserContext);

  const onChnange = (e) => {
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
              onChange={onChnange}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              class="form-control"
              id="exampleInputPassword1"
              onChange={onChnange}
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
