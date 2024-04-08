import React, { useState } from "react";
import { sendRequest } from "../../../core/remote/request";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    let data = new FormData();
    data.append("email", email);
    data.append("password", password);
    try {
      const headers = { "Content-Type": "multipart/form-data" };
      const res = await sendRequest("POST", "/api/register", data, headers);
      console.log(res.data);
      if ((res.status = 200)) {
        window.localStorage.setItem("token", res.data.authorisation.token);
        console.log("sign up successfull");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex column align-center mg-top ">
      <form className="flex column gap">
        <input
          type="email"
          label="Email address"
          placeholder="Email"
          size="lg"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          label="Password"
          placeholder="Password"
          size="lg"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* <!-- Remember me checkbox --> */}
        <div className=" flex justify-between">
          <div>
            <input type="checkbox" value="" defaultChecked />
            <label>Remember me</label>
          </div>

          {/* <!-- Forgot password link --> */}
          <a href="#!">Terms and conditions</a>
        </div>
        <button onClick={handleSignup} type="button">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
