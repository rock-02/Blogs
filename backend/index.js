const app = require("./app");
const dbConnect = require("./config/dbConnect");

require("dotenv").config();
app.listen(process.env.PORT || 4000, () => {
  dbConnect();
  console.log("Server is running on port ", process.env.PORT || 4000);
});
