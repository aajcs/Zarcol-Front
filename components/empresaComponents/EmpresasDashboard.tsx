"use client";
import React, { useEffect, useState } from "react";
import { getEmpresa } from "@/app/api/empresaService";
import { useRouter } from "next/navigation";
import { useEmpresaStore } from "@/store/empresaStore";

function EmpresasDashboardMalo() {
  const [empresa, setEmpresa] = useState<any>(null);
  const { activeEmpresa, setActiveEmpresa } = useEmpresaStore();

  console.log(activeEmpresa);
  const router = useRouter();

  useEffect(() => {
    const fetchEmpresa = async () => {
      try {
        if (!activeEmpresa) {
          return;
        }
        const dataEmpresa = await getEmpresa(activeEmpresa.id);

        setEmpresa(dataEmpresa);
      } catch (error) {
        console.error("Error al obtener la refinería:", error);
      }
    };

    fetchEmpresa();
  }, [activeEmpresa]);

  const handleDivClick = (empresa: any) => {
    setActiveEmpresa(empresa);
    router.push("/empresa");
  };

  return (
    <div className="grid">
      {/* <h1 className="text-4xl font-bold text-blue-500">{activeEmpresaId}</h1> */}

      {empresa ? (
        <div
          className="col-12 lg:col-6 xl:col-3 clickable"
          key={empresa.id}
          onClick={() => handleDivClick(empresa)}
        >
          <div className="card p-0 overflow-hidden flex flex-column">
            <div className="flex align-items-center p-3">
              <img
                src={empresa.img}
                alt={empresa.nombre}
                width={100}
                height={100}
                // className="w-40 h-40 object-cover rounded-lg"
              />
              {/* <i className="pi pi-users text-6xl text-blue-500"></i> */}
              <div className="ml-3">
                <span className="text-blue-500 block white-space-nowrap">
                  {empresa.ubicacion}
                </span>
                <span className="text-blue-500 block text-4xl font-bold">
                  {empresa.nombre}
                </span>
                <span className="text-blue-500 block white-space-nowrap">
                  {empresa.nit}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">No hay empresa disponibles</p>
      )}
    </div>
  );
}

export default EmpresasDashboardMalo;
