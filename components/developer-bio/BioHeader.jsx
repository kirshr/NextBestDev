function BioHeader({ fullName, company, heading }) {
  return (
    <header className="max-w-2xl mb-16 px-5">
      <h1 className="text-4xl font-bold   text-amber-300 ">
        I’m {fullName} I live in {company}, Where I'm The {heading}
      </h1>
      <p className="mt-6 text-base text-cyan-50">
        Organic meggings sus, lo-fi adaptogen prism hammock sartorial. Everyday
        carry sartorial brunch, cliche YOLO umami etsy hoodie ennui narwhal
        venmo cornhole. Ugh kitsch art party asymmetrical pitchfork shabby chic.
        VHS microdosing sartorial, umami seitan raclette chia photo booth
        tousled listicle narwhal poutine banjo tattooed. Coloring book keytar
        trust fund lomo.
      </p>
    </header>
  );
}

export default BioHeader;
