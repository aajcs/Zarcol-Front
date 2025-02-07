import React from "react";
import { Carousel } from "primereact/carousel";
import { Rating } from "primereact/rating";
// import "primereact/resources/themes/saga-blue/theme.css"; // Tema de PrimeReact
// import "primereact/resources/primereact.min.css"; // Estilos de PrimeReact
// import "primeicons/primeicons.css"; // Iconos de PrimeReact
// import "./landing.module.scss"; // Asegúrate de importar tus estilos
const path = "/layout/images/landing/";
const testimonials = [
  {
    name: "Juan Pérez",
    rating: 5,
    text: "¡Excelente servicio! Me ayudaron a mejorar mis habilidades y alcanzar mis metas.",
    image: "avatarHombre.png",
  },
  {
    name: "María García",
    rating: 4,
    text: "La plataforma es muy intuitiva y fácil de usar. ¡Muy recomendable!",
    image: "avatarMujer.png",
  },
  {
    name: "Carlos López",
    rating: 5,
    text: "El soporte al cliente es increíble. Siempre están dispuestos a ayudar.",
    image: "avatarHombre.png",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="testimonial-card p-4 m-6">
      <div className="flex flex-column items-center">
        <img
          src={`${path}${testimonial.image}`}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full mb-4"
          width={100}
          height={100}
        />
        <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
        <Rating value={testimonial.rating} readOnly stars={5} cancel={false} />
        <p className="text-center mt-4">{testimonial.text}</p>
      </div>
    </div>
  );
};

const TestimonioSection = () => {
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <div className="px-5 sm:px-8 ">
      <h2 className="text-4xl font-bold text-center mb-2">
        Testimonios de Clientes
      </h2>
      <Carousel
        value={testimonials}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={(testimonial) => (
          <TestimonialCard testimonial={testimonial} />
        )}
      />
    </div>
  );
};

export default TestimonioSection;
