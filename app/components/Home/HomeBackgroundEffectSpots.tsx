import Image from "next/image";
import React from "react";

const HomeBackgroundEffectSpots = ({ count = 200 }: any) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 hidden lg:flex items-center justify-center ">
      {count >= 1 && (
        <div className="absolute -top-32 -left-56">
          <Image
            src="/images/bg-items/home-green.svg"
            alt=""
            role="presentation"
            width={782}
            height={782}
          />
        </div>
      )}

      {count >= 2 && (
        <div className="absolute top-72 -left-56">
          <Image
            src="/images/bg-items/home-blue.svg"
            alt=""
            role="presentation"
            width={607}
            height={607}
          />
        </div>
      )}

      {count >= 3 && (
        <div className="absolute -top-72">
          <Image
            src="/images/bg-items/home-orange.svg"
            alt=""
            role="presentation"
            width={925}
            height={925}
          />
        </div>
      )}

      {count >= 4 && (
        <div
          className="absolute"
          style={{ marginTop: "1000px", marginRight: "-700px" }}
        >
          <Image
            src="/images/bg-items/home-pink.svg"
            alt=""
            role="presentation"
            width={813}
            height={813}
          />
        </div>
      )}

      {count >= 5 && (
        <div
          className="absolute"
          style={{ marginTop: "2600px", marginLeft: "-1000px" }}
        >
          <Image
            src="/images/bg-items/home-pink.svg"
            alt=""
            role="presentation"
            width={813}
            height={813}
          />
        </div>
      )}

      {count >= 6 && (
        <div
          className="absolute"
          style={{ marginTop: "3400px", marginRight: "-1000px" }}
        >
          <Image
            src="/images/bg-items/home-green.svg"
            alt=""
            role="presentation"
            width={782}
            height={782}
          />
        </div>
      )}

      {count >= 7 && (
        <div
          className="absolute"
          style={{ marginTop: "4700px", marginRight: "-1000px" }}
        >
          <Image
            src="/images/bg-items/home-orange.svg"
            alt=""
            role="presentation"
            width={925}
            height={925}
          />
        </div>
      )}

      {count >= 8 && (
        <div
          className="absolute"
          style={{ marginTop: "6600px", marginRight: "-300px", width: "400px" }}
        >
          <Image
            src="/images/bg-items/home-pink.svg"
            alt=""
            role="presentation"
            width={813}
            height={813}
          />
        </div>
      )}

      {count >= 9 && (
        <div
          className="absolute"
          style={{ marginTop: "6900px", marginRight: "-700px", width: "400px" }}
        >
          <Image
            src="/images/bg-items/home-green.svg"
            alt=""
            role="presentation"
            width={782}
            height={782}
          />
        </div>
      )}
    </div>
  );
};

export default HomeBackgroundEffectSpots;
