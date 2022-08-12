const {
  getEmployeeList,
  getEmployeeDetail,
  updateEmployee,
  createEmployee,
  deleteEmployee,
} = require("../services/employee");
const { Employee } = require("../models/");

jest.mock("../models/");

//Test with mock function
test("Get employee by not exising Id", async () => {
  Employee.findOne.mockResolvedValue(null);
  getEmployeeDetail(0).then((data) => expect(data).tobeNull());
});

test("Get employee by existing Id", async () => {
  Employee.findOne.mockResolvedValue({
    firstName: "Henri",
    lastName: "Rodriguez",
    email: "Darrin_Rippin@gmail.com",
    phone: "+94771277218",
    gender: "M",
    id: 1,
    avatar: "https://randomuser.me/api/portraits/men/92.jpg",
    createdAt: "2022-08-07T10:21:19.048Z",
    updatedAt: "2022-08-07T10:21:19.048Z",
  });
  getEmployeeDetail(1).then((data) => {
    expect(data.id).toEqual(1);
    expect(data.firstName).toEqual("Henri");
  });
});

test("Delete employee, ensure to destroy in Db", async () => {
  Employee.findOne.mockResolvedValue({
    id: 1,
  });
  Employee.destroy.mockResolvedValue({});

  deleteEmployee(1).then(() => {
    expect(Employee.destroy.mock.calls.length).toBe(1);
  });
});
