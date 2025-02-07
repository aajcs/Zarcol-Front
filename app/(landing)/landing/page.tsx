"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { StyleClass } from "primereact/styleclass";
import type { NodeRef, Page } from "@/types";
import ServicesSection from "@/components/landingPage/ServicesSection";
import StatsSection from "@/components/landingPage/StatsSection";
import FeaturesSection from "@/components/landingPage/FeaturesSection";
import FooterSection from "@/components/landingPage/FooterSection";
import styles from "./landing.module.scss";
import "./landing.css";
import TestimonioSection from "@/components/landingPage/TestimonioSection";
import ClientesSection from "@/components/landingPage/ClientesSection";
import ContactFormModal from "@/components/landingPage/ContactFormModal";
import { motion } from "framer-motion";
import { LayoutContext } from "@/layout/context/layoutcontext";

const LandingPage: Page = () => {
  const { layoutConfig } = useContext(LayoutContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const router = useRouter();
  const menuRef = useRef<HTMLButtonElement>(null);
  const statRef = useRef<HTMLAnchorElement>(null);
  const servicioRef = useRef<HTMLAnchorElement>(null);
  const featuresRef = useRef<HTMLAnchorElement>(null);
  const stats = useRef<HTMLDivElement | ScrollToOptions>(null);
  const features = useRef<HTMLDivElement | ScrollToOptions>(null);
  const servicio = useRef<HTMLDivElement | ScrollToOptions>(null);
  const path = "/layout/images/landing/";
  const image =
    layoutConfig.colorScheme === "dark"
      ? "line-effect-dark.svg"
      : "line-effect.svg";

  const navigateToHome = () => {
    router.push("/");
  };
  const navigateToRegister = () => {
    router.push("/login");
  };
  const navigateToDashboard = () => {
    router.push("/dashboard");
  };
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(
        ".parallax-container"
      ) as HTMLElement;
      if (parallax) {
        const offset = window.pageYOffset;
        parallax.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = (el: React.RefObject<HTMLDivElement>) => {
    setTimeout(() => {
      el.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 200);
  };

  return (
    <>
      <div className="surface-ground min-h-screen w-screen">
        <div className="landing-wrapper">
          <div
            style={{ backgroundImage: `url(${path}${image})` }}
            className="bg-no-repeat bg-cover bg-bottom"
          >
            <div className="flex align-items-center justify-content-between px-5 sm:px-8 py-6">
              <a onClick={navigateToHome} className="cursor-pointer">
                {/* <span className="text-2xl font-bold text-color ml-2">
                  ZARCOL no creo q se vea bien repite el nombre
                </span> */}
              </a>

              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 100, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <StyleClass
                  nodeRef={menuRef as NodeRef}
                  selector="@next"
                  enterClassName="hidden"
                  enterActiveClassName="scalein"
                  leaveClassName="hidden"
                  leaveActiveClassName="fadeout"
                  leaveToClassName="hidden"
                  hideOnOutsideClick
                >
                  <button
                    ref={menuRef}
                    className="cursor-pointer block lg:hidden select-none p-link w-3rem h-3rem inline-flex align-items-center justify-content-center border-circle"
                  >
                    <i className="pi pi-bars text-4xl"></i>
                  </button>
                </StyleClass>
                <div
                  id="landing-menu"
                  className="hidden lg:block absolute right-0 top-auto lg:static z-1 shadow-2 lg:shadow-none w-15rem lg:w-auto surface-overlay lg:surface-ground origin-top p-3 lg:p-0"
                  style={{
                    borderRadius: "14px",
                    // backgroundColor: "red",
                  }}
                >
                  <ul className="flex flex-column lg:flex-row m-0 p-0 list-none text-2xl lg:text-base">
                    <li>
                      <StyleClass
                        nodeRef={statRef as NodeRef}
                        selector="#landing-menu"
                        leaveActiveClassName="fadeout"
                        leaveToClassName="hidden"
                      >
                        {/* <a
                          ref={statRef}
                          className="block p-3 cursor-pointer font-bold text-color-secondary hover:text-color transition-colors transition-duration-300"
                          onClick={() => scrollToElement(stats as any)}
                        >
                          INICIO
                        </a> */}
                        <Button
                          // ref={statRef}
                          label="Inicio"
                          outlined
                          rounded
                          text
                          raised
                          className="m-2"
                          onClick={() => scrollToElement(stats as any)}
                        />
                      </StyleClass>
                    </li>
                    <li>
                      <StyleClass
                        nodeRef={featuresRef as NodeRef}
                        selector="#landing-menu"
                        leaveActiveClassName="fadeout"
                        leaveToClassName="hidden"
                      >
                        {/* <a
                          ref={featuresRef}
                          className="block p-3 cursor-pointer font-bold text-color-secondary hover:text-color transition-colors transition-duration-300"
                          onClick={() => scrollToElement(features as any)}
                        >
                          CARACTERISTICAS
                        </a> */}
                        <Button
                          label="Caracteristicas"
                          outlined
                          rounded
                          text
                          raised
                          className="m-2"
                          onClick={() => scrollToElement(features as any)}
                        />
                      </StyleClass>
                    </li>
                    <li>
                      <StyleClass
                        nodeRef={servicioRef as NodeRef}
                        selector="#landing-menu"
                        leaveActiveClassName="fadeout"
                        leaveToClassName="hidden"
                      >
                        {/* <a
                          ref={servicioRef}
                          className="block p-3 cursor-pointer font-bold text-color-secondary hover:text-color transition-colors transition-duration-300"
                          onClick={() => scrollToElement(servicio as any)}
                        >
                          SERVICIOS
                        </a> */}
                        <Button
                          label="Servicios"
                          outlined
                          rounded
                          text
                          raised
                          className="m-2"
                          onClick={() => scrollToElement(servicio as any)}
                        />
                      </StyleClass>
                    </li>

                    <li>
                      {/* <a
                          className="block p-3 cursor-pointer font-bold text-color-secondary hover:text-color transition-colors transition-duration-300"
                          onClick={navigateToDashboard}
                        >
                          DASHBOARD
                        </a> */}
                      <Button
                        label="Dashboard"
                        outlined
                        rounded
                        text
                        raised
                        className="m-2"
                        onClick={navigateToDashboard}
                      />
                    </li>

                    <li>
                      <Button
                        label="Salir"
                        // outlined
                        rounded
                        raised
                        className="m-2"
                        // onClick={() => ()}
                        severity="danger"
                      />

                      <Button
                        label="Ingresar"
                        // outlined
                        rounded
                        raised
                        className="m-2"
                        onClick={navigateToRegister}
                      />
                    </li>
                    <li>
                      <StyleClass
                        nodeRef={featuresRef as NodeRef}
                        selector="#landing-menu"
                        leaveActiveClassName="fadeout"
                        leaveToClassName="hidden"
                      >
                        {/* <a
                          ref={featuresRef}
                          className="block p-3 cursor-pointer font-bold text-color-secondary hover:text-color transition-colors transition-duration-300"
                          onClick={() => scrollToElement(features as any)}
                        >
                          CARACTERISTICAS
                        </a> */}
                        <Button
                          severity="success"
                          label="Contáctanos"
                          outlined
                          rounded
                          raised
                          className="m-2"
                          onClick={showModal}
                        />
                      </StyleClass>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            <div className="flex flex-column lg:flex-row gap-5 align-items-center justify-content-between px-5 sm:px-8 py-8 overflow-hidden">
              <div className="flex-1 fadein  ml-5 p-8 pl-0">
                <motion.h1
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-bold text-7xl mt-0 mb-1 ml-1"
                >
                  <img
                    alt="intro image"
                    src="/layout/images/ZarcolLogoOriginal.png"
                    className="logoPrincipal"
                  />
                </motion.h1>
                {/* <p className="text-3xl mb-5 line-height-3">
                  <img
                    alt="intro image"
                    src="/layout/images/zarcolLogoSlogan.svg"
                    className="w-30rem"
                  />
                </p> */}
                <motion.div
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <img
                    alt="intro image"
                    src="/layout/images/zarcolLogoSlogan.svg"
                    // className="w-20rem sm:w-30rem"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="flex-1"
              >
                <img
                  alt="intro image"
                  src="/layout/images/landing/pricipal.jpeg"
                  className="fadeinright animation-ease-in-out animation-duration-1000 w-full border-round-2xl shadow-2"
                />
              </motion.div>
            </div>

            <div className="p-8">
              <StatsSection />
            </div>
          </div>

          <div
            ref={features as any}
            className={"px-5 sm:px-8 py-8 bg-image-container"}
          >
            <img
              src="/layout/images/landing/seccionNew.jpeg"
              alt="background"
              className={"background-image animate-zoomOutIn"}
            />
            <div
              className={"background-image"}
              // style={{
              //   background:
              //     "linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(0, 255, 0, 0.5))",
              // }}
            ></div>
            <div className="content">
              <FeaturesSection />
            </div>
          </div>

          <div
            ref={servicio as any}
            className="px-5 sm:px-8 py-8 surface-card flex flex-column lg:flex-row justify-content-center gap-5"
          >
            <ServicesSection />
          </div>

          <div
            className={`px-5 sm:px-8 py-8 surface-ground gap-5 align-items-center justify-content-center text-center ${styles["call-to-action"]}`}
          >
            <div className="text-6xl font-bold mb-2">
              No lo pienses más, ¡Zarcol es tu mejor opción!
            </div>
            <div className="text-4xl font-bold mb-2">
              Te ofrecemos servicios certificados y personalizados que harán que
              tu proyecto destaque y refleje tu éxito.
            </div>
            <div className="text-3xl font-bold">
              ¡Contáctanos hoy mismo y descubre cómo podemos llevar tus
              expectativas más allá!
            </div>
            <Button
              rounded
              label="  ¡Comienza ahora!"
              className="p-button-raised mt-5"
              severity="secondary"
            ></Button>
          </div>
          <div
            className={
              "px-5 sm:px-8 py-8 surface-ground gap-5 align-items-center justify-content-center text-center "
            }
          >
            <TestimonioSection />
          </div>
          <div
            className={
              "px-5 sm:px-8 py-8 surface-ground gap-5 align-items-center justify-content-center text-center "
            }
          >
            <ClientesSection />
          </div>
          <div
            className="px-5 sm:px-8 py-8 bg-gray-900 flex flex-column md:flex-row md:align-items-start gap-5"
            style={{
              borderTopLeftRadius: "14px",
              borderTopRightRadius: "14px",
            }}
          >
            <FooterSection />
          </div>
        </div>
      </div>
      <ContactFormModal visible={isModalVisible} onHide={hideModal} />
    </>
  );
};

export default LandingPage;

// 1.⁠ ⁠Encabezado: Título atractivo, subtítulo y una imagen de alta calidad.
// 2.⁠ ⁠Propuesta de valor: Explica claramente lo que ofreces y por qué es valioso para el cliente.
// 3.⁠ ⁠Beneficios clave: Enumera los beneficios más importantes de tus servicios.
// 4.⁠ ⁠Testimonios de clientes: Muestra lo que dicen tus clientes satisfechos.
// 5.⁠ ⁠Información sobre los servicios: Describe tus servicios en detalle.
// 6.⁠ ⁠Formulario de contacto: Facilita al usuario el contacto contigo.
// 7.⁠ ⁠Llamada a la acción: Anima al usuario a realizar la acción deseada.
// 8.⁠ ⁠Pie de página: Incluye información de contacto, enlaces a tus redes sociales y un mapa del sitio.
