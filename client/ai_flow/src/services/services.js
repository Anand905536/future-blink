import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:4000/api"
})

export const askAI = (prompt) => {
   return  api.post('/ask-ai', { prompt:prompt })
}

export const savePrompt = (prompt, answer) => {
    return api.post('/save', { prompt:prompt, response: answer })
}

export const getHistory = () => {
  return api.get("/history");
};
