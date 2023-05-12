import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createMode = async (mode) => {
    const {data} = await $authHost.post('api/mode', mode)
    return data
}
export const fetchModes = async (page, limit= 5) => {
    const {data} = await $host.get('api/mode', {params: {
        page, limit
        }})
    console.log(data)
    return data
}

export const fetchOneMode = async (id) => {
    const {data} = await $host.get('api/mode/' + id)
    return data
}
