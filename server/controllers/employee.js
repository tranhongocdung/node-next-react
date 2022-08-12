const {
  getEmployeeList,
  getEmployeeDetail,
  updateEmployee,
  createEmployee,
  deleteEmployee,
} = require("../services/employee");

const defaultErrorMsg = "Something went wrong";

const employeeList = async (req, res) => {
  try {
    const employees = await getEmployeeList({});
    return res.json(employees);
  } catch (err) {
    console.error(err);
    return res.status(500).json(defaultErrorMsg);
  }
};

const employeeDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await getEmployeeDetail(id);
    return res.json(employee);
  } catch (err) {
    console.error(err);
    return res.status(500).json(defaultErrorMsg);
  }
};

const employeeUpdate = async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email, phone, gender, avatar } = req.body;
  try {
    const employee = await updateEmployee({
      id,
      firstName,
      lastName,
      email,
      phone,
      gender,
      avatar,
    });

    return res.json(employee);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

const employeeCreate = async (req, res) => {
  const { firstName, lastName, email, phone, gender, avatar } = req.body;
  try {
    const employee = await createEmployee({
      firstName,
      lastName,
      email,
      phone,
      gender,
      avatar,
    });
    return res.json(employee);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const employeeDelete = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = deleteEmployee(id);
    return res.json({ message: "User is deleted!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json(defaultErrorMsg);
  }
};

module.exports = {
  employeeCreate,
  employeeDelete,
  employeeDetail,
  employeeList,
  employeeUpdate,
};
