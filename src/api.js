import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your API base URL
  timeout: 5000, // Adjust as needed
});

let isLoginRequest = false;

instance.interceptors.request.use(
  (config) => {
  
    if(!isLoginRequest) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.token) {
        config.headers.Authorization = `Bearer ${user.token}`
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export const setLoginRequestFlag = (value) => {
  isLoginRequest = value;
}

export const loginapi = (formData) => instance.post('/login', formData);
export const register = (formData) => instance.post('/registrations', formData);
export const fetchContacts = (customer_id) => instance.get('/contacts?customer_id='+customer_id);
export const addContacts = (customer_id,formdata) => instance.post('/contacts?customer_id='+customer_id, formdata);
export const editContacts = (contact_id,customer_id,formdata) => instance.put('/contacts/'+contact_id+'?customer_id='+customer_id, formdata);
export const deleteContacts = (contact_id,customer_id) => instance.delete('/contacts/'+contact_id+'?customer_id='+customer_id);
export const fetchIntractions = (customer_id) => instance.get('/interactions?customer_id='+customer_id);
export const addIntractions = (contact_id,formdata) => instance.post('/interactions?contact_id='+contact_id, formdata);
export const editIntractions = (contact_id,formdata) => instance.put('/interactions/'+contact_id, formdata);
export const deleteIntractions = (contact_id) => instance.delete('/interactions/'+contact_id);
export const showIntractions =(contact_id)=>instance.get('./interactions/'+contact_id);
export const showContact=(contact_id)=>instance.get('./contacts/'+contact_id);

