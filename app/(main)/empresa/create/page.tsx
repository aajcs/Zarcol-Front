"use client";
import EmpresaForm from "@/components/empresaComponents/EmpresaForm";
import { Page } from "../../../../types/layout";

const Login: Page = () => {
  return (
    <EmpresaForm
      empresa={null}
      hideEmpresaFormDialog={() => {}}
      empresas={[]}
      setEmpresas={() => {}}
    />
  );
};

export default Login;
