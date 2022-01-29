import "dotenv/config";
import express from "express";
import router from "./routes";

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
	console.log(`Running: http://localhost:${PORT}`)
})