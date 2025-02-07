import { Button } from "primereact/button";

const HeroSection = () => {
  return (
    <div className="flex flex-column lg:flex-row gap-5 align-items-center justify-content-between px-5 sm:px-8 py-8 overflow-hidden">
      <div className="flex-1 fadein animation-duration-1000">
        <h1 className="font-bold text-7xl mt-0 mb-1 ml-1">
          <img
            alt="intro image"
            src="/layout/images/zarcolLogo.svg"
            className="w-30rem"
          />
        </h1>
        <Button text raised label="">
          <img
            alt="intro image"
            src="/layout/images/zarcolLogoSlogan.svg"
            className="w-30rem"
          />
        </Button>
      </div>
      <div className="flex-1">
        <img
          alt="intro image"
          src="/layout/images/landing/imagenDeScreemHomePage.png"
          className="fadeinright animation-ease-in-out animation-duration-1000 w-full border-round-2xl shadow-2"
        />
      </div>
    </div>
  );
};

export default HeroSection;
