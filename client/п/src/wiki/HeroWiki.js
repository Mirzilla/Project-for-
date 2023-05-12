import {makeAutoObservable} from "mobx";

export default class HeroWiki {
    constructor() {
        this._types = []
        this._rarities = []
        this._heroes = []
        this._selectedType = {}
        this._selectedRarity = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setRarities(rarities) {
        console.log({rarities})
        this._rarities = rarities
    }
    setHeroes(heroes) {
        this._heroes = heroes
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedRarity(rarity) {
        this.setPage(1)
        this._selectedRarity = rarity
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get rarities() {
        return this._rarities
    }
    get heroes() {
        return this._heroes
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedRarity() {
        return this._selectedRarity
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}