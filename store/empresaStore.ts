import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Empresa {
  id: string;
  estado: string;
  eliminado: boolean;
  ubicacion: string;
  nombre: string;
  nit: string;
  img: string;
  createdAt: string;
  updatedAt: string;
}

interface EmpresaState {
  activeEmpresa: Empresa | null;
  setActiveEmpresa: (empresa: Empresa) => void;
}

export const useEmpresaStore = create<EmpresaState>()(
  persist(
    (set) => ({
      activeEmpresa: null,
      setActiveEmpresa: (empresa) => set({ activeEmpresa: empresa }),
    }),
    {
      name: "empresa-store", // Nombre único para el localStorage
    }
  )
);
