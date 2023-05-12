const uuid = require('uuid')
const path = require('path')
const {Hero, HeroInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class heroController {
    async create(req, res, next) {
        try {
            let {name, rarityId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const hero = await Hero.create({name, rarityId, typeId, img: fileName})
            console.log(hero)
            if(info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    HeroInfo.create({
                        title: i.title,
                        desc: i.desc,
                        heroId: hero.get("id"),
                    })
                )
            }
            return res.json(hero)
        }catch (e) {
           return res.status(400).json(e)
        }

    }

    async getAll(req, res) {
        let {rarityId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let hero;
        if(!rarityId && !typeId) {
            hero = await Hero.findAndCountAll({options: {limit, offset } })
        }
        if(rarityId && !typeId) {
            hero = await Hero.findAndCountAll({where: {rarityId}, limit, offset})

        }
        if(!rarityId && typeId) {
            hero = await Hero.findAndCountAll({where: {typeId}, limit, offset})
        }
        if(rarityId && typeId) {
            hero = await Hero.findAndCountAll({where: {typeId, rarityId}, limit, offset})
        }
        return res.json(hero)

    }

    async getOne(req, res) {
        const {id} = req.params
        const hero = await Hero.findOne(
            {
                where: {id},
                include: [{model: HeroInfo, as: 'info'}]
            },
        )
        return res.json(hero)

    }
}

module.exports = new heroController()