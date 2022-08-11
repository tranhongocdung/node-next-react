import Layout from "/components/layout";
import EmployeeEditCard from "/components/employeeEditCard";
import Link from "next/link";
import employeeApi from "../../apis/employeeApi";
import toast from "../../components/shared/toast";
import Button from "react-bootstrap/Button";

export async function getServerSideProps(context) {
  const id = context.query.id;
  const response = await employeeApi.get(id);
  if (!response.data) {
    return {
      redirect: {
        permanent: false,
        destination: "/employee/list",
      },
      props: {},
    };
  }
  return {
    props: { employee: response.data },
  };
}

const EmployeeEdit = ({ employee }) => {
  const updateEmployeeFunc = async (data) => {
    const response = await employeeApi.update({ ...data, id: employee.id });
    toast({ type: "success", message: "Updated employee successfully!" });
  };
  return (
    <Layout>
      <div className="d-flex justify-content-end">
        <div className="btn-group">
          <Link href={"/employee/list"}>
            <Button variant="primary">List View</Button>
          </Link>
        </div>
      </div>
      <EmployeeEditCard
        employee={employee}
        employeeEditAction={updateEmployeeFunc}
      ></EmployeeEditCard>
    </Layout>
  );
};

export default EmployeeEdit;
