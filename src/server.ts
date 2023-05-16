import createServer from "./app";

require("dotenv").config();

const port = parseInt(process.env.PORT?.toString() ?? "8095", 10);

const app = createServer();

app.listen(port, () => {
  console.log(`servidor push notifications 👂 en puerto ${port}`);
});
