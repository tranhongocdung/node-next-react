import Layout from "/components/layout";
import Link from "next/link";
import EmployeeEditCard from "/components/employeeEditCard";
import employeeApi from "../../apis/employeeApi";
import toast from "../../components/shared/toast";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";

const EmployeeAdd = () => {
  const router = useRouter();
  const addEmployeeFunc = async (data) => {
    const response = await employeeApi.add(data);
    toast({ type: "success", message: "Added employee successfully!" });
    if (typeof window !== "undefined") {
      router.push(`/employee/edit/${response.data.id}`);
    }
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
      <EmployeeEditCard employeeEditAction={addEmployeeFunc}></EmployeeEditCard>
    </Layout>
  );
};

export default EmployeeAdd;
