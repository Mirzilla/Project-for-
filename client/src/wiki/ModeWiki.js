import {makeAutoObservable} from "mobx";

export default class ModeWiki {
    constructor() {
        this._modes = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }


    setModes(modes) {
        this._modes = modes
    }


    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }


    get modes() {
        return this._modes
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