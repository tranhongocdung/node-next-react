const { Employee } = require("../models/");

const getEmployeeList = async (params) => {
  const employees = await Employee.findAll();
  return employees;
};

const getEmployeeDetail = async (id) => {
  const employee = await Employee.findOne({ where: { id } });
  return employee;
};

const updateEmployee = async (employee) => {
  const { id, firstName, lastName, email, phone, gender, avatar } = employee;
  const inDbEmployee = await Employee.findOne({ where: { id } });

  inDbEmployee.firstName = firstName;
  inDbEmployee.lastName = lastName;
  inDbEmployee.email = email;
  inDbEmployee.phone = phone;
  inDbEmployee.gender = gender;
  inDbEmployee.avatar = avatar;
  await inDbEmployee.save();

  return inDbEmployee;
};

const createEmployee = async (employee) => {
  const { firstName, lastName, email, phone, gender, avatar } = employee;
  const newEmployee = await Employee.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    gender: gender,
    avatar: avatar,
  });
  return newEmployee;
};

const deleteEmployee = async (id) => {
  const employee = await Employee.findOne({ where: { id } });
  await employee.destroy();
};

module.exports = {
  getEmployeeList,
  getEmployeeDetail,
  updateEmployee,
  createEmployee,
  deleteEmployee,
};
