import {User} from "../../../sequelize";

export default {
    Query: {
        me: async (_, args, { req, isAuth }) => {
            const { user } = req;
            return await User.findOne({ where : {id: user.id} });
        }
    }
};
