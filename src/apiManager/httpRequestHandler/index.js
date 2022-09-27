import axios from 'axios';
export const httpPOSTRequest = async(url,data) =>{
  return await axios.post(url,data);
};

export const httpGETRequest = async(url)=>{
  return await axios.get(url);
}