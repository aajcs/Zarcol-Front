const FooterSection = () => {
  return (
    <>
      <div className="flex align-items-center flex-1">
        {/* <img
                alt="intro image"
                src="/layout/images/landing/logo-v.svg"
                className="w-4rem"
              /> */}
        <img
          alt="intro image"
          src="/layout/images/landing/logoZarcolBN.svg"
          className="w-15rem"
        />
        {/* <span className="text-white text-5xl font-bold ml-2">Verona</span> */}
      </div>
      <div className="flex-1">
        <div className="text-xl text-gray-600 mb-4">General</div>
        <ul className="list-none p-0 m-0">
          <li className="mb-3">
            <a className="cursor-pointer text-white text-xl">Inicio</a>
          </li>
          <li className="mb-3">
            <a className="cursor-pointer text-white text-xl">Caracteristicas</a>
          </li>
          <li className="mb-3">
            <a className="cursor-pointer text-white text-xl">Servicios</a>
          </li>
          <li className="mb-3">
            <a className="cursor-pointer text-white text-xl">Contáctanos</a>
          </li>
          {/* <li>
            <a className="cursor-pointer text-white text-xl">Poseidon</a>
          </li> */}
        </ul>
      </div>
      {/* <div className="flex-1">
        <div className="text-xl text-gray-600 mb-4">Co</div>
        <ul className="list-none p-0 m-0">
          <li className="mb-3">
            <a
              href="https://www.primefaces.org/primeng"
              className="cursor-pointer text-white text-xl"
            >
              PrimeNG
            </a>
          </li>
          <li className="mb-3">
            <a
              href="https://www.primefaces.org/showcase"
              className="cursor-pointer text-white text-xl"
            >
              PrimeFaces
            </a>
          </li>
          <li className="mb-3">
            <a
              href="https://www.primefaces.org/primereact"
              className="cursor-pointer text-white text-xl"
            >
              PrimeReact
            </a>
          </li>
          <li>
            <a
              href="https://www.primefaces.org/primevue"
              className="cursor-pointer text-white text-xl"
            >
              PrimeVue
            </a>
          </li>
        </ul>
      </div> */}
      <div className="flex flex-1 gap-4">
        <a href="http://github.com/primefaces">
          <i className="pi pi-github text-white text-5xl"></i>
        </a>
        <a href="https://discord.gg/gzKFYnpmCY">
          <i className="pi pi-discord text-white text-5xl"></i>
        </a>
        <a href="http://twitter/primeng">
          <i className="pi pi-twitter text-white text-5xl"></i>
        </a>
      </div>
    </>
  );
};

export default FooterSection;
