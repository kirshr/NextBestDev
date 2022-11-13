import Image from "next/image";
import bannerImage from "./../../public/banner.webp";

function LandingPageHeader() {
  return (
    <header className=" py-10 px-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <figure className="flex flex-col justify-center items-center   md:flex-row   md:justify-center md:gap-8   ">
        <figcaption className="text-center md:text-left">
          <h1 className="  text-2xl font-semibold  lg:text-5xl xl:text-8xl text-cyan-50">
            <span className="block  -mt-1">Your Problems</span>Our Solutions
          </h1>

          <p className="font-light text-base mb-6 md:text-sm md:mt-2  lg:mt-4 lg:text-xl text-amber-300">
            Find your next developer now.
          </p>
        </figcaption>

        <Image
          className="w-full sm:w-2/3 md:w-5/12 lg:w-4/12"
          src={bannerImage}
          alt="Development power"
        />
      </figure>
    </header>
  );
}

export default LandingPageHeader;
