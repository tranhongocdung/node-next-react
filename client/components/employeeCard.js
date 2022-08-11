import Link from "next/link";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import employeeApi from "../apis/employeeApi";
import toast from "../components/shared/toast";
import { useRouter } from "next/router";

const EmployeeCard = ({ employee, isTableView }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleConfirm = () => setShow(true);
  const handleDeleteEmployee = async () => {
    const response = await employeeApi.delete(employee.id);
    toast({ type: "success", message: "Deleted employee successfully!" });
    if (typeof window !== "undefined") {
      router.push(`/employee/list`);
    }
  };
  return (
    <React.Fragment>
      {!isTableView && (
        <div className="col-md-3 col-sm-4">
          <div className="card shadow-sm">
            <div className="card-img-top">
              <img src={employee.avatar} className="w-100" />
            </div>
            <div className="card-body">
              <div className="card-text">
                <span className="text-warning">
                  <strong>
                    {employee.firstName} {employee.lastName}
                  </strong>
                </span>
                <br />
                {employee.email}
                <br />
                {employee.phone}
                <br />
                {employee.gender == "M" ? "Male" : "Female"}
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <div className="btn-group text-end">
                  <Link href={`/employee/edit/${employee.id}`}>
                    <Button variant="outline-primary">Edit</Button>
                  </Link>
                  <Button variant="outline-danger" onClick={handleConfirm}>
                    Delete
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      Are you sure to delete this employee?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="danger" onClick={handleDeleteEmployee}>
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isTableView && (
        <tr>
          <td>
            <img src={employee.avatar} />
          </td>
          <td className="align-middle">{employee.firstName}</td>
          <td className="align-middle">{employee.lastName}</td>
          <td className="align-middle">{employee.email}</td>
          <td className="align-middle">{employee.phone}</td>
          <td className="align-middle">
            {employee.gender == "M" ? "Male" : "Female"}
          </td>
          <td className="align-middle">
            <div className="btn-group text-end">
              <Link href={`/employee/edit/${employee.id}`}>
                <Button variant="outline-primary">Edit</Button>
              </Link>
              <Button variant="outline-danger" onClick={handleConfirm}>
                Delete
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Body>Are you sure to delete this employee?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={handleDeleteEmployee}>
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};
export default EmployeeCard;
