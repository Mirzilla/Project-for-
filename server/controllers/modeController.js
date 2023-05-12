const uuid = require('uuid')
const path = require('path')
const {Mode, ModeInfo, Rarity, Hero, HeroInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class modeController {
    async create(req, res, next) {
        try {
            let {name, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const mode = await Mode.create({name, img: fileName})
            if(info) {
                console.log(info)
                info = JSON.parse(info)
                info.forEach(i =>
                    ModeInfo.create({
                        title: i.title,
                        desc: i.desc,
                        modeId: mode.get("id"),
                    })
                )
            }
            return res.json(mode)
        }catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }

    }


    async getAll(req, res) {
        const modes  = await Mode.findAll()
        const result = {rows: modes, count: modes.length}
        return res.json(result)
    }
    async getOne(req, res) {
        const {id} = req.params
        const mode = await Mode.findOne(
            {
                where: {id},
                include: [{model: ModeInfo, as: 'info'}]
            },
        )
        console.log(mode)
        return res.json(mode)

    }
}

module.exports = new modeController()