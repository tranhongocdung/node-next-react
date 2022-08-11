const express = require("express");

const router = express.Router();

const {
  employeeList,
  employeeDetail,
  employeeUpdate,
  employeeCreate,
  employeeDelete,
} = require("../controllers/employee");
router.get("/employees", employeeList);
router.get("/employee/:id", employeeDetail);
router.post("/employee", employeeCreate);
router.put("/employee/:id", employeeUpdate);
router.delete("/employee/:id", employeeDelete);

module.exports = router;
