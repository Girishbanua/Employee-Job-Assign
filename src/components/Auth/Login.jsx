import { useState } from "react";

const Login = ({handleLogin}) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(mail,pass)
    setMail("");
    setPass("");
  }
  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col bg-slate-700/40 shadow-2xl p-8 
      rounded-2xl w-[50vw] md:w-[30vw] outline-2 outline-sky-400"
      >
        <h1
          className="text-center text-2xl sm:text-4xl 
        mb-5 font-bold text-sky-200 mt-[2rem] "
        >
          Login
        </h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <input
          type="submit"
          value="Log in"
          id="logBtn"
          className="cursor-pointer"
        />
      </form>
    </div>
  );
};
export default Login;
