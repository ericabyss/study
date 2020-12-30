import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";
import express from "express";
import mysql from "mysql";

import "./sequelize";

import "./passport";

import { isAuth } from "./passport";

import { authenticateJwt } from "./passport";

const server = new ApolloServer({
    schema: schema,
    context: ({ req }) => { //resolvers 
        return { req: req, isAuth };
    },
    introspection: true
});

/* Mysql 저장소 연결 */
const storageConnection = mysql.createConnection({
    host: "1.231.176.58",
    user: "bjwkor",
    password: "bjwkor",
    port: 3306,
    database: "capstone", //Mysql schema
    timezone: "+09:00", // 한국 시간
    dateStrings: "date" // 시간
});

storageConnection.connect(err => {
    if (err) {
        return;
    }
    storageConnection.end();
});

const opt = {
    port: process.env.PORT || 4000
};
const app = express(); //express 사용

app.use(authenticateJwt);

server.applyMiddleware({ app }); //아폴로 서버에 express 적용;

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:${opt.port}${server.graphqlPath}`));