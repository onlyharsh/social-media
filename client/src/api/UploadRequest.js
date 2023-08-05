// import axios from 'axios'


// const API = axios.create({ baseURL: 'http://localhost:5000' });

// export const uploadImage = (data) => API.post("/upload/", data);

// export const uploadPost=(data)=>API.post("/posts",data)

import axios from "axios";

const API = axios.create({ baseURL: "https://api-social-media-wf62.onrender.com" });


export const uploadImage = (data) => API.post("/upload/", data);
export const uploadPost = (data) => API.post("/posts", data);