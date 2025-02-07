import { useEmpresaStore } from "@/store/empresaStore";
import AppSubMenu from "./AppSubMenu";
import type { MenuModel } from "@/types";

const AppMenuEmpresa = () => {
  const { activeEmpresa } = useEmpresaStore();
  const model: MenuModel[] = [
    {
      label: activeEmpresa?.nombre || "Seleciona una refinería",
      icon: "pi pi-home",
      items: [
        {
          label: "Operaciones",
          icon: "pi pi-fw pi-home",
          to: "/empresa",
        },
        {
          label: "Finanzas",
          icon: "pi pi-fw pi-image",
          to: "/dashboard-sales",
        },
      ],
    },

    {
      label: "Gestión de " + activeEmpresa?.nombre,
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Linea de Recepción",
          icon: "pi pi-fw pi-list",
          to: "/empresa/linea-recepcion",
        },
        {
          label: "Tanques",
          icon: "pi pi-fw pi-list",
          to: "/empresa/tanques",
        },
        {
          label: "Torres de Destilación",
          icon: "pi pi-fw pi-list",
          to: "/empresa/torre-destilacion",
        },
        {
          label: "Linea de Despacho",
          icon: "pi pi-fw pi-plus",
          to: "/empresa/linea-despacho",
        },
        {
          label: "Contactos",
          icon: "pi pi-fw pi-plus",
          to: "/empresa/contacto",
        },
      ],
    },
    {
      label: "Gestión de Empresas",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Lista",
          icon: "pi pi-fw pi-list",
          to: "/empresa/list",
        },
        {
          label: "Crear",
          icon: "pi pi-fw pi-plus",
          to: "/empresa/create",
        },
      ],
    },
  ];

  return <AppSubMenu model={model} />;
};

export default AppMenuEmpresa;
