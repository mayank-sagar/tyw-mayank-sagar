import path from "path";
import dotenv from "dotenv";
// Load the base .env file first
dotenv.config();
const env = process.env.NODE_ENV;
dotenv.config({
  path: path.join(__dirname, "../..", `.env.${env ? env : "local"}`),
});
export default {
  ...process.env,
};
