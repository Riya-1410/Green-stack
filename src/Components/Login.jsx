import React from 'react'
import { useAppContext } from '../Context/AppContext';

const Login = () => {

  const { setShowUserLogin, setUser } = useAppContext()

  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmitHandler = async(event)=> {
    event.preventDefault();
    setUser({
        email: "riya@testing.com",
        name: "riya_devaliya"
    })
    setShowUserLogin(false)
  }

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed top-0 right-0 bottom-0 left-0 z-30 flex items-center justify-center text-sm text-gray-600 bg-black/50"
    >
      <form onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-5 m-auto p-8 py-10 w-80 sm:w-[352px] rounded-2xl shadow-xl border border-gray-200 bg-white"
      >
        <h1 className="text-2xl font-bold text-center w-full">
          <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
        </h1>

        {state === "register" && (
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        )}

        <div className="relative w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="relative w-full">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {state === "register" ? (
          <p className="text-center w-full">
            Already have an account?{' '}
            <span
              onClick={() => setState("login")}
              className="text-primary cursor-pointer hover:text-primary-dull"
            >
              click here
            </span>
          </p>
        ) : (
          <p className="text-center w-full">
            Create an account?{' '}
            <span
              onClick={() => setState("register")}
              className="text-primary cursor-pointer hover:text-primary-dull"
            >
              click here
            </span>
          </p>
        )}

        <button
          type="submit"
          className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-xl cursor-pointer"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;





