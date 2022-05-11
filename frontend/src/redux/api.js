import axios from "axios";

const url="http://localhost:5000/"
const API = axios.create({
  baseURL: url,
});



export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (formData) => API.post("/users/googleSignIn", formData);

export const createBook = (formData) => API.post("/books", formData);
export const getBooks = () => API.get(`/books`);
