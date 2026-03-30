import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section id="features" className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Panadería
            </span>{" "}
            y Pastelería
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              la Flor de México
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          𝑬𝒍𝒂𝒃𝒐𝒓𝒂𝒎𝒐𝒔 𝒑𝒂𝒏 𝒆𝒔𝒕𝒊𝒍𝒐 𝑴𝒆́𝒙𝒊𝒄𝒐 𝒚 𝒅𝒆 𝒍𝒂 𝒓𝒆𝒈𝒊𝒐́𝒏 𝑫𝒆𝒔𝒅𝒆 𝟣𝟫𝟪𝟢 ✨ 𝑹𝒆𝒑𝒐𝒔𝒕𝒆𝒓𝒊́𝒂 𝑭𝒊𝒏𝒂 | 𝑷𝒂𝒔𝒕𝒆𝒍𝒆𝒓𝒊́𝒂 | 𝑪𝒂𝒇𝒆𝒕𝒆𝒓𝒊́𝒂
        </p>

      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
