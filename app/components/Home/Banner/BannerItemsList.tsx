import Image from "next/image";

export const BANNER_ITEMS = [
  {
    id: 1,
    imageContent: (
      <>
        <Image
          src="/images/banner/banner-check.svg"
          className="absolute h-full z-0 top-0"
          alt="Check Image"
          width={450}
          height={489}
          loading="eager"
        />
        <Image
          width={412}
          height={500}
          src="/images/banner/banner-item-1.png"
          className="z-10 w-[75%]"
          alt="Banner Image"
          draggable={false}
          loading="eager"
        />
        <div className="bg-white shadow-lg bg-opacity-80 p-3 rounded-full flex flex-col items-center justify-center w-[80px] h-[80px] absolute z-20 right-[10%] bottom-[12%]">
          <Image
            width={25}
            height={25}
            src="/images/banner/music-player.svg"
            className="z-20"
            alt="Music Player"
            draggable={false}
            loading="eager"
          />
          <p className="text-[10px] font-medium">30hr</p>
          <p className="text-[10px] content-text">playback</p>
        </div>
        <div className="bg-white shadow-lg bg-opacity-80 p-3 rounded-2xl gap-2 flex flex-row items-center justify-center absolute z-20 left-[4%] bottom-[24%]">
          <Image
            width={25}
            height={25}
            src="/images/banner/mic-icon.svg"
            className="z-20"
            draggable={false}
            alt="Mic Icon"
            loading="eager"
          />
          <p className="text-[12px] font-medium leading-none">
            Voice <br /> assistance
          </p>
        </div>
      </>
    ),
    textContent: (
      <>
        <h2 className="text-primary text-center lg:text-left text-2xl lg:text-4xl font-bold w-full">
          New series
        </h2>
        <h1 className="text-secondary text-center lg:text-left text-4xl lg:text-7xl font-extrabold mb-2  w-full">
          Trusmi Air Pro
        </h1>
        <p className="content-text text-center text-base lg:text-left lg:text-xl w-full max-w-[300px] lg:max-w-none mb-8">
          TMX is a state-of-the-art wearable that keeps you healthy, safe and
          connected.
        </p>

        <button className="btn btn-outline btn-primary rounded-full max-w-[10rem] font-normal h-[2.5rem] min-h-[2.5rem] min-w-[6rem]">
          View Details
        </button>
      </>
    ),
  },

  {
    id: 2,
    imageContent: (
      <>
        <Image
          width={412}
          height={500}
          src="/images/banner/banner-item-1.png"
          className="z-10 w-[75%]"
          alt="Banner Image"
          draggable={false}
          loading="eager"
        />
      </>
    ),
    textContent: (
      <>
        <h2 className="text-primary text-center lg:text-left text-2xl lg:text-4xl font-bold w-full">
          Introducing
        </h2>
        <h1 className="text-secondary text-center lg:text-left text-4xl lg:text-7xl font-extrabold mb-2  w-full">
          Trusmi Air Lite
        </h1>
        <p className="content-text text-center text-base lg:text-left lg:text-xl w-full max-w-[300px] lg:max-w-none mb-8">
          Trusmi Air Lite is a state-of-the-art wearable that keeps you healthy,
          safe and connected.
        </p>

        <button className="btn btn-outline btn-primary rounded-full max-w-[10rem] font-normal h-[2.5rem] min-h-[2.5rem] min-w-[6rem]">
          View Details
        </button>
      </>
    ),
  },

  {
    id: 3,
    imageContent: (
      <>
        <Image
          width={412}
          height={500}
          src="/images/banner/banner-item-1.png"
          className="z-10 w-[75%]"
          alt="Banner Image"
          draggable={false}
          loading="eager"
        />
        <div className="bg-white shadow-lg bg-opacity-80 p-3 rounded-full flex flex-col items-center justify-center w-[80px] h-[80px] absolute z-20 right-[10%] bottom-[12%]">
          <Image
            width={25}
            height={25}
            src="/images/banner/music-player.svg"
            className="z-20"
            alt="Music Player"
            draggable={false}
            loading="eager"
          />
          <p className="text-[10px] font-medium">15hr</p>
          <p className="text-[10px] content-text">playback</p>
        </div>
      </>
    ),
    textContent: (
      <>
        <h2 className="text-primary text-center lg:text-left text-2xl lg:text-4xl font-bold w-full">
          All new
        </h2>
        <h1 className="text-secondary text-center lg:text-left text-4xl lg:text-7xl font-extrabold mb-2  w-full">
          Trusmi Abc
        </h1>
        <p className="content-text text-center text-base lg:text-left lg:text-xl w-full max-w-[300px] lg:max-w-none mb-8">
          Trusmi Abc Device is an ordinary device with ordinary features, and
          this is how it works.
        </p>

        <button className="btn btn-outline btn-primary rounded-full max-w-[10rem] font-normal h-[2.5rem] min-h-[2.5rem] min-w-[6rem]">
          View Details
        </button>
      </>
    ),
  },
];
