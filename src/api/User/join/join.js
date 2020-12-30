import { User } from "../../../sequelize";
import crypto from "crypto";

export default {
    Mutation: {
        join: async (_, args, {}) => {
            const { studentId } = args;
            const hashPassword = crypto.createHash("sha512").update(args.password).digest("base64");
            try {
                const idCheck = await User.findOne({ where: { studentId: studentId } });

                if (idCheck === null) {
                    return await User.create({
                        ...args,
                        password: hashPassword,
                        departmentId: 103
                    });
                } else {
                    throw Error("아이디 중복 오류!!1");
                }
            } catch {
                throw Error("회원가입 오류");
            }
        }
    }
};