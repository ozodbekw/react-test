import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="grid h-screen w-full place-items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("./login-bg.jpg")`,
      }}
    >
      <div>
        <img src="./logo.svg" className="mx-auto w-16" alt="" />
        <h2 className="text-center text-2xl font-semibold text-white md:text-4xl">
          Login
        </h2>
        <div className="flex flex-col gap-2">
          <label>
            Email
            <input
              type="email"
              placeholder="Type here"
              className="input"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Type here"
              className="input"
              required
            />
          </label>
          <div className="mt-5 flex flex-col gap-2 md:flex-row">
            <button className="btn btn-primary grow md:btn-md btn-sm">
              Login
            </button>
            <button className="btn btn-secondary btn-sm grow md:btn-md disabled:bg-slate-400">
              Google
            </button>
          </div>
        </div>

        <h2 className="mt-4">
          if you don't have an account, please
          <Link to="/register" className="bg-white underline text-black ml-1">
            Register
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Login;
