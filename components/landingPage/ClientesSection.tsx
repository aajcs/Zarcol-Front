const clients = [
  {
    name: "Empresa A",
    logo: "logoGenerico.png",
  },
  {
    name: "Empresa B",
    logo: "logoMaroil.png",
  },
  {
    name: "Empresa C",
    logo: "MiLogoCastilloItSystems.png",
  },
  {
    name: "Empresa D",
    logo: "LogoAguaCalienteVector.svg",
  },
];
const path = "/layout/images/landing/";
const ClientCard = ({ client }: { client: any }) => {
  return (
    <div className="client-card px-4 mx-6 my-3 cliente-card">
      <div className="flex flex-col items-center">
        <img
          src={`${path}${client.logo}`}
          alt={client.name}
          className="w-6rem h-6rem mb-4"
          width={100}
          // height={100}
          style={{ filter: "grayscale(100%)" }}
        />
        {/* <h3 className="text-xl font-bold mb-2">{client.name}</h3> */}
      </div>
    </div>
  );
};

const ClientesSection = () => {
  return (
    <div className="px-5 sm:px-8 ">
      <h2 className="text-4xl font-bold text-center mb-4">Nuestros Clientes</h2>
      <div className="flex flex-wrap justify-content-center card">
        {clients.map((client, index) => (
          <ClientCard key={index} client={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientesSection;
