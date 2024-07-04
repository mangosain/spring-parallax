"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  return (
    <main>
      <Parallax pages={2} ref={ref}>
        <ParallaxLayer offset={0} speed={1}>
          <div
            className="h-screen w-full"
            style={{
              backgroundImage: "url('/images/image-full.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          className="flex justify-center items-center"
          speed={0.1}
          factor={2}
        >
          <h1 className="text-9xl text-black font-bold">
            Parallax Effect using Spring
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="flex justify-center items-center"
        >
          <h1 className="text-9xl text-white font-bold">WELCOME</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <div
            className="h-screen w-full"
            style={{
              backgroundImage: "url('/images/image-bottom.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.2}
          className="p-24 text-justify bg-black text-white"
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            minima dolores blanditiis expedita rem ullam iusto nisi atque ipsam
            suscipit cum porro molestias earum debitis, culpa illo quae! Dolorum
            sequi numquam suscipit ipsam iste voluptas autem deleniti quo odit?
            Laborum ipsam perspiciatis dignissimos, deleniti veniam eos amet
            velit provident tenetur cumque officiis, quaerat veritatis voluptate
            qui itaque asperiores tempora laboriosam exercitationem ipsa
            doloremque alias! Minima, voluptates voluptatum. Excepturi,
            reiciendis rem fugit numquam molestiae dolorum id sed labore
            adipisci vel nesciunt placeat earum porro eligendi architecto
            accusantium magnam a maiores maxime voluptas explicabo consequatur,
            suscipit blanditiis neque. Assumenda ipsum repellat officia!
          </p>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
