import session from "express-session";
import MongoStore from "connect-mongo";
const MONGO_DB_URI = process.env.MONGO_DB_URI || "mongodb+srv://gameDB:VwgUGc5ragezctY0@gamedb.acky3ml.mongodb.net/?retryWrites=true&w=majority";
export const sessionMongo = session({
  store: MongoStore.create({
    mongoUrl: MONGO_DB_URI,
    ttl: 600,
  }),
  secret: "sh",
  resave: false,
  saveUninitialized: false,
  rolling: false,
  cookie: {
    maxAge: 600000,
  },
});
