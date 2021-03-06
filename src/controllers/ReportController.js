const { Op } = require('sequelize');
const User = require('../models/User');



module.exports = {
    async show(req, res) {
       
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email:{
                    [Op.iLike]:'%gmil.com'
                }
            },
            include: [
                { association: 'addresses', where: {street: 'Rua do chakra'} },
                { 
                  association: 'techs',
                  required: false,
                  where: {
                    name:{
                        [Op.iLike]:'Node%'
                    }
                  }
                },
            ]
        })
        return res.json(users);
    }
};