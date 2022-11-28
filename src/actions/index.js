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

export const FC_CreateAccount = async (data, CallBack) => {
  try {
    await axios.post(`${API}/users.json`, data);
    CallBack(true, "");
  } catch (error) {
    CallBack(
      false,
      "Échec du chargement des données, veuillez réessayer plus tard"
    );
  }
};
