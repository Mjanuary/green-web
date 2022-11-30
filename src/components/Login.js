import React, { useState } from "react";
import { FC_Login } from "../actions/logics";
const defaultAlert = {
  type: null,
  msg: "",
};
export default function Login({ LoginSuccess }) {
  const [email, setEmail] = useState("janvier@gmail.com");
  const [password, setPassword] = useState("12345");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(defaultAlert);

  const clearError = () =>
    setTimeout(() => {
      setError(defaultAlert);
    }, 3000);

  const SubmitData = () => {
    if (email === "") {
      clearError();
      return setError({
        target: "EMAIL",
        email: "L'e-mail est requis",
      });
    }

    if (password === "") {
      clearError();
      return setError({
        target: "EMAIL",
        email: "Mot de passe requis",
      });
    }

    setLoading(true);

    FC_Login(
      {
        email: email,
        password: password,
      },
      (status, user, err) => {
        setLoading(false);
        if (!status) {
          setError({
            target: "MAIN-ERROR",
            msg: "Username or password are incorrect",
          });

          clearError();
        } else {
          LoginSuccess(user);
        }
      }
    );
  };
  return (
    <div className="max-w-screen-lg mx-auto items-center">
      <div className="flex-1">
        <h1 className="text-6xl font-bold text-center">
          Login into your account
        </h1>
      </div>
      <div className="flex-1 p-4">
        {error.target === "MAIN-SUCCESS" && (
          <div className="p-2 bg-green-500 rounded text-white text-center mb-2">
            {error.msg}
          </div>
        )}

        {error.target === "MAIN-ERROR" && (
          <div className="p-2 bg-red-500 rounded text-white text-center mb-2">
            {error.msg}
          </div>
        )}
        <div className="py-2 max-w-screen-sm mx-auto">
          <section
            className={`flex p-4 mb-4 flex-col  border ${
              error.target === "EMAIL"
                ? " border-red-600 bg-red-100 "
                : " border-green-600 bg-green-100 "
            }  rounded-lg`}
          >
            <label className="text-gray-500 text-sm" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none bg-transparent text-xl font-bold text-green-900"
              placeholder="janvier@gmail.com"
            />

            {error.target === "EMAIL" && (
              <span className="block text-red-700 text-sm">{error.msg}</span>
            )}
          </section>

          <section
            className={`flex p-4 mb-4 flex-col  border ${
              error.target === "PASSWORD"
                ? " border-red-600 bg-red-100 "
                : " border-green-600 bg-green-100 "
            }  rounded-lg`}
          >
            <label className="text-gray-500 text-sm" htmlFor="password">
              Mot de passe
            </label>
            <input
              id="password"
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none bg-transparent text-xl font-bold text-green-900"
              placeholder="*********"
            />

            {error.target === "PASSWORD" && (
              <span className="block text-red-700 text-sm">{error.msg}</span>
            )}
          </section>

          <section className=" ">
            <button
              className="text-white bg-green-600 rounded-lg hover:bg-green-800 p-4 text-2xl w-full"
              onClick={SubmitData}
            >
              {loading ? "La création du compte..." : "Créer un compte"}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
