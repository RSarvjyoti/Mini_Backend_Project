const app = require("./src/app");
const connectDB = require("./src/config/db");
require("dotenv").config();

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

app.listen(PORT, () => {
    console.log(`Server is runing at http://localhost:${PORT}`);
    connectDB(DB_URL);
});