import { useState, useEffect } from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLogin } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { IconContext } from "react-icons/lib";

export function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // check if the user is logged in
    if (username === "demo" && password === "demo") {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/qrscanner");
    }
  }, [isLoggedIn, navigate]);

  return (
    <IconContext.Provider value={{ size: 35 }}>
      <div className="flex h-screen justify-center bg-slate-900">
        {/* <img src=""></img> */}
        <div className="flex items-center">
          <form
            onSubmit={handleSubmit}
            className="justify-center flex items-center  m-10"
          >
            <div className="items-center bg-slate-400 rounded-lg ">
              <h1 className=" text-center font-semibold mt-10">
                {" "}
                Enter Login info E-cell Manager
              </h1>
              <div className=" pr-5 flex justify-center mt-10">
                <label htmlFor="email" className="m-4">
                  <AiOutlineMail className="Ai-5x" />
                </label>
                <input
                  className="border-2 max-h-10 max-w-50 border-black rounded-l-md rounded-r-lg p-2 mt-4"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  name="email"
                  id="email"
                  placeholder="Type your Email ID"
                />
              </div>
              <div className=" pr-5 flex justify-center">
                <label htmlFor="password" className="m-4">
                  <RiLockPasswordLine className="Ri-5x" />
                </label>
                <input
                  type="password"
                  className="border-2 max-h-10 max-w-50 mt-4 border-black rounded-l-md rounded-r-lg p-2"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name="password"
                  id="password"
                  placeholder="*********"
                />
              </div>
              {/* <div className="container flex items-center justify-center">
                        <label htmlFor="checkbox" className="m-4"><AiFillCheckCircle className="Ai-5x"/></label>
                        <input name="checkbox" id="checkbox" type ="checkbox" className=""/><h4 className="m-4">Tick this box If you are a recruited E-cell manager!</h4>
                    </div> */}
              <div className="flex justify-center  mt-5 mb-10">
                <button
                  type="submit"
                  className="bg-slate-700 hover:bg-slate-300 rounded-md flex justify-center items-center h-10 w-40 "
                  name="submit"
                  id="submit"
                >
                  <AiOutlineLogin className="Ai-5x text-center" />
                  <div className="text-white hover:text-black">login</div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Login;
