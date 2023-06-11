const express = require('express');
const userRoutes = require('./routes/index.js');
const cors = require("cors");
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(userRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
