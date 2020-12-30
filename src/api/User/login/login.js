import crypto from "crypto";
import { User } from "../../../sequelize";
import jwt from "jsonwebtoken";

export default{
    Mutation: {//데이터를 입력하는 것, 수정//resolver

            login: async (_,args) => {  // ORM //자바스크립트 코드로 짜면 디비에 들어갈때는 sql문으로 
                const { studentId, password } = args;
               const hashPassword = crypto.createHash("sha512").update(password).digest("base64");
        try {
            const userData = await User.findOne({ where: { studentId: studentId }, raw: true});
            console.log(userData);
            if(userData.password === hashPassword) {
                console.log(jwt.sign({ id: userData.id }, "sdfsopfjspafjpodsjopvcxjopvxjzopv"));
                return jwt.sign({ id: userData.id }, "sdfsopfjspafjpodsjopvcxjopvxjzopv"); //token이 되어버림 
            }
        }catch(e){
            console.log(e);
            }
        }
    }
};