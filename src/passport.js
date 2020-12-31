import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt"; //jwt=jsonwebtoken


const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //클라이언트가 요청을 보내면 토큰이 있는지 확인하는, 가져오는 녀석
    secretOrKey : "sdfsopfjspafjpodsjopvcxjopvxjzopv"
};

//client->요청(payload)
//ES6문법
const verifyUser = (jwt_payload, done) => {//인자는 그대로 써야함. 작용하는 함수 : sync
    //const { user } = jwt_payload;
    console.log(jwt_payload, "verifyUser");
     if (jwt_payload) {
        return done(null, jwt_payload);
    }else {
        return done(null, false);
        // or you could create a new account
    }
};


export const isAuth = request => {
    if(!request.user){
            throw Error("허용되지 않은 유저입니다.");
    }
    return;
};


//서버에 통신할때 중간다리역할 
export const authenticateJwt = (req, res, next) => {
    return passport.authenticate("jwt", { session: false } , (err, user) => {
        console.log(user, "authenticateJwt", err);
        if (user){
            req.user = user;
        }
        next();
    })(req, res, next);
};


passport.use(new Strategy(jwtOptions, verifyUser));  //모듈화=>재사용하기위해서
passport.initialize(); // 초기화 시켜주는 아이