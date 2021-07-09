/** require dependencies */
const express = require("express");
const routes = require("./routes/");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cloudinary = require("cloudinary");

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium";

/** configure cloudinary */
cloudinary.config({
  cloud_name: "dxkh8szxn",
  api_key: "112618783258424",
  api_secret: "St1J2RVA8kAiw1pPI4C5HV9lZ8w"
});

/** connect to MongoDB datastore */
try {
  mongoose.connect(url, {
    //useMongoClient: true
    useUnifiedTopology: true
  });
} catch (error) {}

let port = 5000 || process.env.PORT;

/** set up routes {API Endpoints} */
routes(router);

/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
//app.use('/static',express.static(path.join(__dirname,'static')))

app.use("/api", router);

/** start server */
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
