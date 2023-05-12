const {Rarity, Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class rarityController {
    async create(req, res) {
        const {name} = req.body
        const rarity = await Rarity.create({name})
        return res.json(rarity)

    }

    async getAll(req, res) {
        const rarities  = await Rarity.findAll()
        return res.json(rarities)
    }
}

module.exports = new rarityController()