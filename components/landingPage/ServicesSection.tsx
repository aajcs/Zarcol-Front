import { motion } from "framer-motion";

const ServicesSection = () => {
  const wrapperstat = {
    hidden: {
      opacity: 0,
      translateX: -100,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        staggerChildren: 0.5, // Aumentar el tiempo entre la aparición de los hijos
        duration: 3, // Aumentar la duración de la animación
      },
    },
  };
  const wrapper = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Aumentar el tiempo entre la aparición de los hijos
        duration: 2.5, // Aumentar la duración de la animación
      },
    },
  };

  const list = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: [0.455, 0.03, 0.515, 0.955] }, // Aumentar la duración de la animación
    },
  };

  return (
    <div className="grid">
      <motion.div
        variants={wrapperstat}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className="m-3 col shadow-2 surface-card p-5 text-center border-round-2xl"
      >
        <img
          alt="intro image"
          src="/layout/images/landing/equipos.png"
          className="w-8 sm:w-6 lg:w-8 block mx-auto mb-5"
        />
        <div className="text-2xl font-bold mb-3">
          Suministro de equipos especializados para saneamiento y carga de
          PetCoke:
        </div>

        <a
          className="p-2 mb-5 font-bold block text-center cursor-pointer hover:surface-hover transition-colors transition-duration-300"
          style={{
            borderRadius: "2rem",
            boxShadow:
              "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 24px 36px rgba(0, 0, 0, 0.04)",
          }}
        >
          MAS INFORMACIÓN
        </a>
        <motion.ul variants={wrapper} className="list-none p-0 m-0">
          <motion.li variants={list} className="flex align-items-center mb-3">
            <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
            <span>
              Equipos especializados, minishower y operador, hidrojet de alta
              presiones
            </span>
          </motion.li>
          <motion.li variants={list} className="flex align-items-center mb-3">
            <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
            <span>
              Lanchas con el personal capacitado en operaciones marítimas
            </span>
          </motion.li>
          <motion.li variants={list} className="flex align-items-center">
            <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
            <span>Equipos para control de emisiones y saneamiento</span>
          </motion.li>
        </motion.ul>
      </motion.div>
      <motion.div
        variants={wrapperstat}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className="m-3 col shadow-2 surface-card p-5 text-center border-round-2xl"
      >
        <img
          alt="intro image"
          src="/layout/images/landing/obreros.png"
          className="w-8 sm:w-6 lg:w-8 block mx-auto mb-5"
        />
        <div className="text-2xl font-bold mb-3">
          Suministro de personal obrero, operadores, técnicos y profesionales
          especializados
        </div>

        <a
          className="p-2 mb-5 font-bold block text-center cursor-pointer hover:surface-hover transition-colors transition-duration-300"
          style={{
            borderRadius: "2rem",
            boxShadow:
              "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 24px 36px rgba(0, 0, 0, 0.04)",
          }}
        >
          MAS INFORMACIÓN
        </a>
        <motion.ul variants={wrapper} className="list-none p-0 m-0">
          <motion.li variants={list} className="flex align-items-center mb-3">
            <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
            <span>Personal Obrero calificado</span>
          </motion.li>
          <motion.li variants={list} className="flex align-items-center mb-3">
            <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
            <span>Asesoramiento en proyectos</span>
          </motion.li>
          <motion.li variants={list} className="flex align-items-center mb-3">
            <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
            <span>Evaluación de actividades</span>
          </motion.li>
          <motion.li variants={list} className="flex align-items-center">
            <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
            <span>Dirección de proyectos</span>
          </motion.li>
        </motion.ul>
      </motion.div>
      <motion.div
        variants={wrapperstat}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className="m-3 col shadow-2 surface-card p-5 text-center border-round-2xl"
      >
        <img
          alt="intro image"
          src="/layout/images/landing/diseno.png"
          className="w-8 sm:w-6 lg:w-8 block mx-auto mb-5"
        />
        <div className="text-2xl font-bold mb-3">
          Actividades de remodelación y diseño de interiores:
        </div>

        <a
          className="p-2 mb-5 font-bold block text-center cursor-pointer hover:surface-hover transition-colors transition-duration-300"
          style={{
            borderRadius: "2rem",
            boxShadow:
              "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 24px 36px rgba(0, 0, 0, 0.04)",
          }}
        >
          MAS INFORMACIÓN
        </a>
        <motion.ul variants={wrapper} className="list-none p-0 m-0">
          <motion.li variants={list} className="flex align-items-center mb-3">
            <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
            <span>Evaluación y planificación</span>
          </motion.li>
          <motion.li variants={list} className="flex align-items-center mb-3">
            <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
            <span>Ejecución de obras</span>
          </motion.li>
          <motion.li variants={list} className="flex align-items-center mb-3">
            <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
            <span>Selección de materiales</span>
          </motion.li>
          <motion.li variants={list} className="flex align-items-center">
            <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
            <span>Mobiliario y decoración</span>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
