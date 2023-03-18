import axios from "axios";

const APIkey = `https://www.omdbapi.com/?t=keyword&apikey=7902e933`;

export const fetch = (str) => {
  return new Promise(async (resolve, reject) => {
    const res = await axios.get(APIkey.replaceAll(`keyword`, str));
    // console.log("Response data: ", res.data);
    resolve(res.data);
  });
};
