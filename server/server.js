const express = require("express");
var cors = require("cors");
const { sequelize } = require("./models");
const app = express();

const employeeRoutes = require("./routes/employee");

app.use(cors());
app.use(express.json());
app.use("/api", employeeRoutes);

const port = process.env.PORT || 8000;

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await sequelize.authenticate();
  console.log(`Database is connected!`);
});
