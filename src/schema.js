import { makeExecutableSchema } from "apollo-server";
import { mergeResolvers, mergeTypeDefs } from "graphql-tools";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

const allTypes = loadFilesSync(path.join(__dirname, "/api/**/*.graphql"));
const allResolvers = loadFilesSync(path.join(__dirname, "/api/**/*.js"));

export const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs(allTypes, { all: true }),
    resolvers: mergeResolvers(allResolvers)
});