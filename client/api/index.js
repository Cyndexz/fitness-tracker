import axios from 'axios';

const url = 'http://localhost:5003/users';

export const fetchUser = () => axios.get(`${url}/${id}`);
export const createUser = (newUser) => axios.post(url,newUser);