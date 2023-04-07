import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mainRoutes from "./Routes/routes.js";
import connectDB from "./DB/connectDB.js";


dotenv.config({ path: "config.env" });



const PORT = process.env.PORT || 4005;
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mainRoutes);

app.set("view engine", "ejs")
app.set("views", "View")


app.get("/", (req, res) => {
    res.render("index");
});

connectDB();

app.listen(PORT, () => {
    console.log(`Your website is listening on http://localhost:${PORT}`);
});