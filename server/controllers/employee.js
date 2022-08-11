const { Employee } = require("../models/");

const defaultErrorMsg = "Something went wrong";

const employeeList = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    return res.json(employees);
  } catch (err) {
    console.error(err);
    return res.status(500).json(defaultErrorMsg);
  }
};

const employeeDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findOne({ where: { id } });
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
    const employee = await Employee.findOne({ where: { id } });

    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.email = email;
    employee.phone = phone;
    employee.gender = gender;
    employee.avatar = avatar;
    await employee.save();

    return res.json(employee);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

const employeeCreate = async (req, res) => {
  const { firstName, lastName, email, phone, gender, avatar } = req.body;
  try {
    const employee = await Employee.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      gender: gender,
      avatar: avatar,
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
    const employee = await Employee.findOne({ where: { id } });
    await employee.destroy();
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
