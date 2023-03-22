import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_author = createAsyncThunk(
    'read_author',
    async () => {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = 'http://localhost:8000/api/authors/me'
        try{
            let response = await axios.get(url,headers)
            return{
                author: response.data.author
            }
        }catch(error){
            return{
                author: []
            }
        }
    }
)

const update_author = createAsyncThunk(
    'update_author',
    async ({data}) => {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = 'http://localhost:8000/api/authors/me'
        try{
            let response = await axios.put(url,data,headers)
            console.log(response.data);
            return{
                author: response.data.author
            }
            
        }catch(error){
            console.log(error);
            return{
                author: []
            }
        }
    }
)

const actions = {read_author,update_author}

export default actions