import React from "react";

export default function Navigation({ setActive, active }) {
  return (
    <div className="bg-green-50 p-2 ">
      <div className="container mx-auto py-2">
        <section className="flex-1"></section>
        <section className="flex-1 text-right">
          <button
            onClick={setActive.bind(this, "HOME")}
            className={`${
              active === "HOME" ? "bg-green-500 text-white" : ""
            } text-lg p-2 px-4 rounded mx-1 font-bold hover:bg-green-200 hover:text-green-600`}
          >
            Page d'accueil
          </button>
          <button
            onClick={setActive.bind(this, "LOGIN")}
            className={`${
              active === "LOGIN" ? "bg-green-500 text-white" : ""
            } text-lg p-2 px-4 rounded mx-1 font-bold hover:bg-green-200 hover:text-green-600`}
          >
            Connexion
          </button>
          <button
            onClick={setActive.bind(this, "CREATE-ACCOUNT")}
            className={`${
              active === "CREATE-ACCOUNT" ? "bg-green-500 text-white" : ""
            } text-lg p-2 px-4 rounded mx-1 font-bold hover:bg-green-200 hover:text-green-600`}
          >
            Créer un compte
          </button>
        </section>
      </div>
    </div>
  );
}
