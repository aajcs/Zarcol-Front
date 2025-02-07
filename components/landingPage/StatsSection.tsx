import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "primereact/button";

const StatsSection = () => {
  const scrollref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollref,
    offset: ["start end", 0],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 0, 1, 1]);
  const translateX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [200, 100, 0, 0]
  );
  const translateX1 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-200, -100, 0, 0]
  );
  const translateX2 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 300, 0, 0]
  );

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      console.log("ScrollYProgress:", value);
    });
  }, [scrollYProgress]);

  const text = "Remodelaciones de exteriores e interiores";

  return (
    <motion.div ref={scrollref} style={{ opacity }} id="stats-section">
      <div className="flex flex-column align-items-center mb-7">
        <h2 className="font-bold text-6xl my-0">
          Todo lo que necesitas está aquí
        </h2>
      </div>
      <div className="flex flex-column xl:flex-row justify-content-center gap-5">
        <motion.div
          ref={scrollref}
          className="surface-card text-center py-7 px-5 shadow-2"
          style={{ borderRadius: "14px", x: translateX1 }}
        >
          <div className="text-xl text-color-secondary mb-3">
            Amplia experiencia en
          </div>
          <h3 className="mt-0 mb-3 font-bold text-4xl">
            {text.split("").map((char, index) => (
              <motion.span key={index} style={{}}>
                {char}
              </motion.span>
            ))}
          </h3>
          <p className="line-height-3 mb-5 text-color-secondary">
            Con más de <strong>15</strong> años de experiencia en el mercado.
          </p>
          <Button
            icon="pi pi-arrow-right"
            label="Conoce más"
            className="p-button-text"
            iconPos="right"
          ></Button>
          <div className="mt-8 xl:pt-8">
            <img
              alt="intro image"
              src="/layout/images/landing/remodelacion.png"
              className="w-9 md:w-4 xl:w-9"
            />
          </div>
        </motion.div>
        <div className="flex flex-column md:flex-row xl:flex-column gap-5">
          <motion.div
            className="flex-1 surface-card flex flex-column xl:flex-row xl:align-items-center justify-content-around py-7 px-5 shadow-2 gap-5"
            style={{ borderRadius: "14px", y: translateX2 }}
          >
            <div className="flex-1 flex-order-1 xl:flex-order-0 text-center xl:text-left">
              <img
                alt="intro image"
                src="/layout/images/landing/serviciosLogisticos.png"
                className="w-9"
              />
            </div>
            <div className="text-center xl:text-right flex-1">
              <div className="text-xl text-color-secondary mb-3">
                Eficiencia y compromiso en
              </div>
              <h3 className="mt-0 mb-3 font-bold text-4xl">
                Servicios asociados a logística operacional
              </h3>
              <p className="line-height-3 mb-5 text-color-secondary">
                Contamos con expertos en el área.
              </p>
              <Button
                icon="pi pi-arrow-right"
                label="Descubre las posibilidades"
                className="p-button-text"
                iconPos="right"
              ></Button>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 surface-card flex flex-column xl:flex-row xl:align-items-center justify-content-between py-7 px-5 shadow-2 gap-5"
            style={{ borderRadius: "14px", translateX }}
          >
            <div className="text-center xl:text-left flex-1">
              <div className="text-xl text-color-secondary mb-3">
                Innovación y mejora continua en
              </div>
              <h3 className="mt-0 mb-3 font-bold text-4xl">
                Construcción civil
              </h3>
              <p className="line-height-3 mb-5 text-color-secondary">
                Estamos a la vanguardia de las últimas tendencias.
              </p>
              <Button
                icon="pi pi-arrow-right"
                label="Observar más"
                className="p-button-text"
                iconPos="right"
              ></Button>
            </div>
            <div className="flex-1 text-center xl:text-right">
              <img
                alt="intro image"
                src="/layout/images/landing/contruccionCvil.png"
                className="w-9"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="surface-card text-center py-7 px-5 shadow-2"
          style={{ borderRadius: "14px", translateX }}
        >
          <div className="text-xl text-color-secondary mb-3">
            Estamos comprometidos con el
          </div>
          <h3 className="mt-0 mb-3 font-bold text-4xl">
            Saneamiento ambiental
          </h3>
          <p className="line-height-3 mb-5 text-color-secondary">
            Contribuyendo al futuro sostenible.
          </p>
          <Button
            icon="pi pi-arrow-right"
            label="Explorar las Opciones"
            className="p-button-text"
            iconPos="right"
          ></Button>
          <div className="mt-8 xl:pt-8">
            <img
              alt="intro image"
              src="/layout/images/landing/ambiente.png"
              className="w-9 md:w-4 xl:w-9"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
