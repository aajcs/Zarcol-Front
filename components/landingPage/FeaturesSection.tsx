import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1, // El 50% del elemento debe estar visible
  });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const text = "Atención al cliente";
  const description =
    "le brindamos una asesoría personalizada, necesaria para alcanzar sus objetivos.";

  return (
    <div className="flex flex-column lg:flex-row justify-content-center gap-5  grid">
      <div ref={ref} className="col">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="bg-orange-50 p-6 flex align-items-center justify-content-center mb-5"
          style={{ borderRadius: "14px", borderTopLeftRadius: "5rem" }}
        >
          <motion.img
            alt="intro image"
            src="/layout/images/landing/atencionCliente.png"
            className="h-6rem sm:h-12rem"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="bg-orange-50 p-6 align-items-center justify-content-center mb-5 "
          style={{ borderRadius: "14px", borderBottomLeftRadius: "5rem" }}
        >
          <motion.h3
            className="mt-0 mb-5 font-bold text-4xl "
            // style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} custom={index} variants={textVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h3>
          <motion.p
            className="line-height-3  font-bold "
            // style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            {description.split("").map((char, index) => (
              <motion.span key={index} custom={index} variants={textVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
      <div className="col">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-green-50 p-6 flex align-items-center justify-content-center mb-5"
          style={{ borderRadius: "14px" }}
        >
          <img
            alt="intro image"
            src="/layout/images/landing/diversidad.png"
            className="h-6rem sm:h-12rem"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="bg-orange-50 p-6 align-items-center justify-content-center mb-5 "
          style={{ borderRadius: "14px" }}
        >
          <motion.h3
            className="mt-0 mb-5 font-bold text-4xl "
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            {"Diversificación de servicios".split("").map((char, index) => (
              <motion.span key={index} custom={index} variants={textVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h3>
          <motion.p
            className="line-height-3  font-bold "
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            {"Tenemos una oferta variada que permite a la empresa captar diferentes segmentos del mercado."
              .split("")
              .map((char, index) => (
                <motion.span key={index} custom={index} variants={textVariants}>
                  {char}
                </motion.span>
              ))}
          </motion.p>
        </motion.div>
      </div>
      <div className="col">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-red-50 p-6 flex align-items-center justify-content-center mb-5"
          style={{
            borderRadius: "14px",
            borderBottomRightRadius: "5rem",
          }}
        >
          <img
            alt="intro image"
            src="/layout/images/landing/calidadSeguridad.png"
            className="h-6rem sm:h-12rem"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="bg-orange-50 p-6 align-items-center justify-content-center mb-5 "
          style={{ borderRadius: "14px", borderBottomRightRadius: "5rem" }}
        >
          <motion.h3
            className="mt-0 mb-5 font-bold text-4xl "
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            {"Calidad y seguridad".split("").map((char, index) => (
              <motion.span key={index} custom={index} variants={textVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h3>
          <motion.p
            className="line-height-3  font-bold "
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            {"Cumplimos con la normativa nacional e internacional en cada uno de nuestros procesos. Adicionalmente reducimos los riegos para nuestros empleados y clientes."
              .split("")
              .map((char, index) => (
                <motion.span key={index} custom={index} variants={textVariants}>
                  {char}
                </motion.span>
              ))}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;
