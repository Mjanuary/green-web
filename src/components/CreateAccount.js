import axios from "axios";
import React, { useState } from "react";
import { FC_CreateAccount } from "../actions";
const defaultAlert = {
  type: null,
  msg: "",
};
export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [name, setNames] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
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

    if (name === "") {
      clearError();
      return setError({
        target: "NAME",
        email: "les noms sont obligatoires",
      });
    }

    if (phone === "") {
      clearError();
      return setError({
        target: "PHONE",
        email: "le numéro de téléphone est requis",
      });
    }

    if (role === "") {
      clearError();
      return setError({
        target: "ROLE",
        email: "Le type de compte est requis",
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

    let data = {
      email: email,
      name: name,
      password: password,
      phone: phone,
      redistered_date: new Date().toDateString(),
      role: role,
    };

    FC_CreateAccount(data, (status, err) => {
      setLoading(false);
      if (!status) {
        setError({
          target: "MAIN-ERROR",
          msg: "Impossible de créer un compte, veuillez réessayer plus tard",
        });

        clearError();
      } else {
        setEmail("");
        setNames("");
        setPassword("");
        setPhone("");
        setRole("");
        setLoading(false);
        setError({
          target: "MAIN-SUCCESS",
          msg: "Votre compte a été créé avec succès",
        });

        clearError();
      }
    });
  };
  return (
    <div className="max-w-screen-lg mx-auto flex items-center">
      <div className="flex-1">
        <h1 className="text-6xl font-bold">
          Un compte est tout ce dont vous avez besoin
        </h1>
        <h1 className="text-4xl">
          Créer un compte, en renseignant toutes les informations
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
        <div className="py-2">
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
              error.target === "NAME"
                ? " border-red-600 bg-red-100 "
                : " border-green-600 bg-green-100 "
            }  rounded-lg`}
          >
            <label className="text-gray-500 text-sm" htmlFor="names">
              Des noms
            </label>
            <input
              id="names"
              type="text"
              name="names"
              value={name}
              onChange={(e) => setNames(e.target.value)}
              className="outline-none bg-transparent text-xl font-bold text-green-900"
              placeholder="Olivier kevin"
            />

            {error.target === "NAME" && (
              <span className="block text-red-700 text-sm">{error.msg}</span>
            )}
          </section>

          <section
            className={`flex p-4 mb-4 flex-col  border ${
              error.target === "PHONE"
                ? " border-red-600 bg-red-100 "
                : " border-green-600 bg-green-100 "
            }  rounded-lg`}
          >
            <label className="text-gray-500 text-sm" htmlFor="phone">
              Numéro de téléphone
            </label>
            <input
              id="phone"
              type="text"
              name="names"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="outline-none bg-transparent text-xl font-bold text-green-900"
              placeholder="0000-000-000"
            />

            {error.target === "PHONE" && (
              <span className="block text-red-700 text-sm">{error.msg}</span>
            )}
          </section>

          <section
            className={`flex p-4 mb-4 flex-col  border ${
              error.target === "ROLE"
                ? " border-red-600 bg-red-100 "
                : " border-green-600 bg-green-100 "
            }  rounded-lg`}
          >
            <label className="text-gray-500 text-sm" htmlFor="role">
              Type de compte utilisateur
            </label>
            <select
              id="role"
              type="text"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="outline-none bg-transparent text-xl font-bold text-green-900"
              placeholder="Select a role"
            >
              <option value=""></option>
              <option value={"USER"}>Compte d'utilisateur</option>
              <option value={"ADMIN"}>Compte administrateur</option>
            </select>

            {error.target === "ROLE" && (
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
              placeholder="12345"
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
