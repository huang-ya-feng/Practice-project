import axios from '../../server/axios'

export default {
    query: (params: any) => {
        return axios({
            method: "GET",
            url: "/api/userinfo",
            params
        })
    },
    add: (data: any) => {
        return axios({
            method: "POST",
            url: "/api/userinfo",
            data
        })
    }
}