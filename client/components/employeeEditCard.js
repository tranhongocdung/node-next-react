import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";

const EmployeeEditCard = ({ employeeEditAction, employee }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => employeeEditAction(data);
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 g-3">
        <div className="card shadow-sm">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                  <input
                    {...register("firstName", {
                      required: true,
                      minLength: 6,
                      maxLength: 10,
                      pattern: /^[A-Za-z ]+$/i,
                    })}
                    defaultValue={employee && employee.firstName}
                    className={
                      "form-control " + (errors.firstName ? "is-invalid" : "")
                    }
                  />
                  {errors.firstName && (
                    <div className="form-text text-danger">
                      Your First name should not be null and should only allow
                      alphabets, min 6 character and max 10 characters
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                  <input
                    {...register("lastName", {
                      required: true,
                      minLength: 6,
                      maxLength: 10,
                      pattern: /^[A-Za-z ]+$/i,
                    })}
                    defaultValue={employee && employee.lastName}
                    className={
                      "form-control " + (errors.lastName ? "is-invalid" : "")
                    }
                  />
                  {errors.lastName && (
                    <div className="form-text text-danger">
                      Your Last name should not be null and should only allow
                      alphabets, min 6 character and max 10 characters
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                    })}
                    defaultValue={employee && employee.email}
                    className={
                      "form-control " + (errors.email ? "is-invalid" : "")
                    }
                  />
                  {errors.email && (
                    <div className="form-text text-danger">
                      Your Email should not be null and must be valid email
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                  <input
                    {...register("phone", {
                      pattern:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    })}
                    defaultValue={employee && employee.phone}
                    className={
                      "form-control " + (errors.phone ? "is-invalid" : "")
                    }
                  />
                  {errors.phone && (
                    <div className="form-text text-danger">
                      Your Phone should be valid
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-10">
                  <select
                    {...register("gender")}
                    defaultValue={employee && employee.gender}
                    className="form-select"
                  >
                    <option value="F">Female</option>
                    <option value="M">Male</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Avatar</label>
                <div className="col-sm-10">
                  <input
                    {...register("avatar")}
                    defaultValue={employee && employee.avatar}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  as="input"
                  variant="outline-primary"
                  type="submit"
                  value="Save"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEditCard;
