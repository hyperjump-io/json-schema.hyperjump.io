import sirv from "sirv";
import polka from "polka";
import morgan from "morgan";
import * as sapper from "@sapper/server";


const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const app = polka();

if (!dev) {
  app.use(morgan("combined"));
}
app.use(sirv("static", { dev, etag: true }));
app.use(sapper.middleware());

app.listen(PORT, (err) => err && console.log("error", err));
