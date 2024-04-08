import React, { useState } from "react";
import { sendRequest } from "../../../core/remote/request";
import "../index.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (email == "" || password == "") {
      setError("Please fill empty fields");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleSignup = async () => {
    if (validateForm()) {
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
    }
  };

  return (
    <div className="flex column align-center">
      <div className="flex column align-center justify-around bg-white form ">
        <h1 className="text-black">Instagram</h1>
        <form className="flex column big-gap p form-container align-center">
          <input
            type="email"
            label="Email address"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            label="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className=" flex column align-center big-gap">
            <div className="flex">
              <input type="checkbox" value="" defaultChecked />
              <label className="text-black">Remember me</label>
            </div>
            <a href="#!">Terms and conditions</a>
          </div>
          <button
            className="btn-style bg-blue text-white"
            onClick={handleSignup}
            type="button"
          >
            Sign up
          </button>
          <div className="flex gap">
            <p className="text-black">Already have an account?</p>
            <a className=" text-blue cursor-pointer" onClick={handleSignup}>
              Sign in
            </a>
          </div>
          {error && <small className="text-red">{error}</small>}
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
