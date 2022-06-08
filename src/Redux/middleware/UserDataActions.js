import axios from 'axios';




export const UserRegisterHandler = () => {
    console.log('arrived' )
    return async () => {
        await axios.post('https://jsonplaceholder.typicode.com/posts').then( console.log('success') ).catch(console.log('failed'))
    }
}