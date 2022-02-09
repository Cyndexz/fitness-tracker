import axios from 'axios';

//const url = 'http://localhost:5003';

// export const signIn = (formData) => axios.post('/users/signin', formData);
// export const signUp = (formData) => axios.post('/users/signup', formData);

// export const fetchUser = (id) => axios.(`${url}/${id}`);
// export const createUser = (newUser) => axios.post(url,newUser);

//const url = 'http://localhost:5003/users';
const API = axios.create({baseURL: 'http://localhost:5003'});

export const signIn = (formData) => API.post('/users/signin', formData);        //here in the api its basically saying hey database get me some data
export const signUp = (formData) => API.post('/users/signup', formData);