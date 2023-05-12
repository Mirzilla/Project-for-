import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createRarity = async (rarity) => {
    const {data} = await $authHost.post('api/rarity', rarity)
    return data
}

export const fetchRarity = async (typeId, rarityId, page, limit= 5) => {
    const {data} = await $host.get('api/rarity', )
    console.log(data)
    return data
}

export const createHero = async (hero) => {
    const {data} = await $authHost.post('api/hero', hero)
    return data
}

export const fetchHeroes = async (typeId, rarityId, page, limit= 5) => {
    const {data} = await $host.get('api/hero', {params: {
            typeId, rarityId, page, limit
        }})
    console.log(data)
    return data
}

export const fetchOneHero = async (id) => {
    const {data} = await $host.get('api/hero/' + id)
    console.log(data)
    return data
}
