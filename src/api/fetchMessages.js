import axios from "axios";
export const fetchMessages = async (option) => {
 
  // const URL = `http://localhost:4000/${option}`;
  const URL = `https://shrouded-basin-77513.herokuapp.com/${option}`;
  const {data} = await axios.get(URL)
  console.log(data)
  return data
}
