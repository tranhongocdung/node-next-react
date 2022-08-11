import React, { useEffect, useState } from "react";
import { wrapper } from "../../store/store";
import { useSelector } from "react-redux";
import employeeApi from "../../apis/employeeApi";
import Layout from "/components/layout";
import EmployeeCard from "/components/employeeCard";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { BsListUl, BsFillGrid3X3GapFill } from "react-icons/bs";
import { setEmployeeList, selectEmployeeList } from "../../store/employeeSlice";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const response = await employeeApi.getAll();
    store.dispatch(setEmployeeList(response.data));
  }
);

const EmployeeList = () => {
  const employees = useSelector(selectEmployeeList);
  const [isTableView, setTableView] = useState(true);

  return (
    <Layout>
      <div className="mb-3 btn-toolbar justify-content-end">
        <div className="btn-group">
          <Link href={"/employee/add"}>
            <Button variant="primary">Add Employee</Button>
          </Link>
        </div>
        <div className="btn-group ms-3">
          <Button variant="primary" onClick={() => setTableView(!isTableView)}>
            {!isTableView && <BsListUl />}
            {isTableView && <BsFillGrid3X3GapFill />}
          </Button>
        </div>
      </div>
      {!isTableView && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {employees.map((o) => (
            <EmployeeCard employee={o} key={o.id}></EmployeeCard>
          ))}
        </div>
      )}
      {isTableView && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((o) => (
              <EmployeeCard
                employee={o}
                isTableView={isTableView}
                key={o.id}
              ></EmployeeCard>
            ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
};

export default EmployeeList;
