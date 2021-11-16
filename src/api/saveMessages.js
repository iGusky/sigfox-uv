import axios from 'axios';

// Metodo para guardar mensaje en la base de datos.
export const saveMessages = async (data) => {
  const URL = 'http://localhost:4000/mensajes';

  const response = await axios.post(URL,data);

  return response;
}