import axios from "axios";
const API = "https://green-app-a9755-default-rtdb.firebaseio.com";

const dataFormatterArray = (data) => {
  let keys = Object.keys(data);
  let results = [];
  for (const elem of keys) {
    let item = data[elem];
    if (item) results.push({ id: elem, ...item });
  }
  return results;
};

export const FC_GetUsers = async (CallBack) => {
  try {
    const res = await axios.get(`${API}/users.json`);
    CallBack(true, dataFormatterArray(res.data), "");
  } catch (error) {
    CallBack(
      false,
      null,
      "Échec du chargement des données, veuillez réessayer plus tard"
    );
  }
};

export const FC_Products = async (CallBack) => {
  try {
    const res = await axios.get(`${API}/products.json`);
    CallBack(true, dataFormatterArray(res.data), "");
  } catch (error) {
    CallBack(
      false,
      null,
      "Échec du chargement des données, veuillez réessayer plus tard"
    );
  }
};

export const FC_Scans = async (CallBack) => {
  try {
    const res = await axios.get(`${API}/scans.json`);
    CallBack(true, dataFormatterArray(res.data), "");
  } catch (error) {
    CallBack(
      false,
      null,
      "Échec du chargement des données, veuillez réessayer plus tard"
    );
  }
};

export const FC_GetPRoductsAndSells = async (CallBack) => {
  try {
    const products = axios.get(`${API}/products.json`);
    const scans = axios.get(`${API}/scans.json`);
    const users = axios.get(`${API}/users.json`);

    Promise.all([products, scans, users]).then((data) => {
      CallBack(
        true,
        {
          products: data[0].data ? dataFormatterArray(data[0].data) : [],
          scans: data[1].data ? dataFormatterArray(data[1].data) : [],
          users: data[2].data ? dataFormatterArray(data[2].data) : [],
        },
        ""
      );
    });
  } catch (error) {
    CallBack(
      false,
      null,
      "Échec du chargement des données, veuillez réessayer plus tard"
    );
  }
};

export const FC_Login = async ({ email, password }, CallBack) => {
  try {
    const res = await axios.get(`${API}/users.json`);
    let users = dataFormatterArray(res.data);
    let findLogin = users.find(
      (el) => el.email === email && el.password === password
    );
    if (findLogin) {
      CallBack(true, findLogin, "");
    } else {
      CallBack(
        false,
        null,
        "Le nom d'utilisateur ou le mot de passe sont incorrects"
      );
    }
  } catch (error) {
    CallBack(
      false,
      null,
      "Échec du chargement des données, veuillez réessayer plus tard"
    );
  }
};

export const FC_SaveScan = async (data, CallBack) => {
  try {
    await axios.post(`${API}/scans.json`, data);
    CallBack(true, "");
  } catch (error) {
    CallBack(
      false,
      "Échec de l'enregistrement des données numérisées, veuillez réessayer plus tard"
    );
  }
};

export const DATE = (data, format = "DD/MM/YYYY") => {
  if (data === null) return "";
  const date = new Date(data);
  if (format === "YYYY/MM/DD") {
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      date.getDate()
    );
  } else if (format === "MM/DD/YYYY") {
    return (
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear()
    );
  } else if (format === "YYYY-MM-DD") {
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      date.getDate()
    );
  } else {
    return (
      date.getDate() +
      "/" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getFullYear()
    );
  }
};
