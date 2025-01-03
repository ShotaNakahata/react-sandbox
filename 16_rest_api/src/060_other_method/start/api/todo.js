import axios from "axios"
import { useEffect } from "react"
const ENDPOINT_URL = "http://127.0.0.1:3003/todo"

const todoApi = {
    async getALL() {
        const result = await axios.get(ENDPOINT_URL)
        console.log(result.data)
        return result.data
    },
    async post(todo) {
        const result = await axios.post(ENDPOINT_URL, todo)
        console.log(result.data)
        return result.data
    },
    async delete(todo) {
        const result = await axios.delete(ENDPOINT_URL + "/" + todo.id)

        return result.data
    },
    async patch(todo) {
        const result = await axios.patch(ENDPOINT_URL + "/" + todo.id, todo)
        return result.data
    }
}

export default todoApi;
// useEffect(()=>{
//     todoApi.post({
//         id: "15",
//         content: "買い物2",
//     });
// },[])

// todoApi.getALL()


// todoApi.delete({
//     id:"c5868bfe-fa1d-4891-acd3-bc43959a9bb7"
// })
