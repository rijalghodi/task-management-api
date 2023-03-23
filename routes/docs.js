const express = require("express");
const router = express.Router();
const swagger = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API Documentation",
      version: "1.0.0",
      description: "Simple backend API to manage todos",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/",
      },
    },
  },
  apis: ["./routes/tasks.js"],
};
const specs = swagger(swaggerOptions);

router.use("/", swaggerUi.serve);
router.get(
  "/",
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

module.exports = router;
