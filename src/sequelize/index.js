import Sequelize from "sequelize";
const db = {};
const sequelize = new Sequelize(
    "capstone", // 데이터베이스 이름
    "bjwkor", // 유저 명
    "bjwkor", // 비밀번호
    {
        host: "1.231.176.58",
        dialect: "mysql", // 사용할 데이터베이스 종류
        dialectOptions: { charset: "utf8mb4", dateStrings: true, typeCast: true }, // 날짜의 경우 문자열로 타입 변경 처리
        timezone: "+09:00" // 타임존을 설정
    }
);

db.User = require("./User")(sequelize, Sequelize);


db.sequelize = sequelize;
db.Sequelize = Sequelize;
console.log("🚀 Sequelize ready");

module.exports = db;