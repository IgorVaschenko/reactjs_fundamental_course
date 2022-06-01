import axios from 'axios';


export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}


// export default class PostService {
//     static async getAll(limit=10, page=1) {
//             const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
//                 params: {
//                     _limit: limit,
//                     _page: page
//                 }
//             })//Постраничная пагинация
//             return response;
//     }

//     // static async getAll() {
//     //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     //         return response.data
//     // }

//     // static async getAll() {
//     //     try {
//     //         const response = await axios.get('https://jsonplaceholder.typicode.com/po22sts')
//     //         return response.data
//     //     } catch (error) {
//     //         console.log(error)
//     //     }
//     // }
// }