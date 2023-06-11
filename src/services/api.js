import axios from "axios";

axios.defaults.baseURL = "https://64846e99ee799e321626abed.mockapi.io/contacts";

export const fetchContacts = async() => {
    const response = await axios.get(`/contacts`);
    console.log(response.data)
    return response.data;
};


export const addContact = async({name, phone: number}) => {
    const response = await axios.post("/contacts", { name, phone: number });
    return response.data;
}

export const deleteContact = async id =>{
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
};