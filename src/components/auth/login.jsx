import React from "react";
import { useState } from "react";
const login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="p-20 pb-20 bg-transparent border-2 border-emerald-600 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col justify-center items-center gap-4"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-full px-5 py-1 text-xl text-emerald-600 bg-transparent hover:border-white hover:placeholder:text-emerald-600 placeholder:text-white"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            id="email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-full px-5 py-1 text-xl text-emerald-600 bg-transparent hover:border-white hover:placeholder:text-emerald-600 placeholder:text-white"
            type="password"
            placeholder="Enter Your Password"
            name="password"
            id="password"
          />
          <button className="border-2 border-emerald-600 bg-emerald-600 rounded-full px-5 py-1 text-xl w-full hover:border-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default login;
