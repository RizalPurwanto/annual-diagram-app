const express  = require ('express')
const cors  = require ('cors')

const app = express()
const port = process.env.PORT || 3000;
const route = require("./routes");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", route);


app.listen(port, () => {
  console.log(`This one is listening to port ${port}!`);
});