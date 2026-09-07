"use client";

import Image from "next/image";

const logos = [
  { src: "/sk.webp", alt: "SK" },
  { src: "/taimoor.jfif", alt: "Taimoor" },
  { src: "/walton.jfif", alt: "Walton" },
  { src: "/cantt.jfif", alt: "Cantt" },
  { src: "/acpl.webp", alt: "Acpl" },
  { src: "/advtelecom.jpg", alt: "AdvTelecom" },
  { src: "/airlifts.png", alt: "Airlift" },
  { src: "/alhafeezgarden.png", alt: "AlHafeezGarden" },
  { src: "/ahmedfoods.jpg", alt: "AhmedFoods" },
  { src: "/audoinic.jpg", alt: "Audoinic" },
  { src: "/aeo.png", alt: "Aeo" },
  { src: "/aerosoft.jpg", alt: "AeroSoft" },
  { src: "/alokozay.jpg", alt: "Alokozay" },
  { src: "/aroma.png", alt: "Aroma" },
  { src: "/bakeparlour.jpg", alt: "BakeParlour" },
  { src: "/bakersland.jpg", alt: "BakersLand" },
  { src: "/bcircles.webp", alt: "BCircles" },
  { src: "/bioamla.jpg", alt: "BioAmla" },
  { src: "/bisconni.jpeg", alt: "Bisconni" },
  { src: "/borjan.png", alt: "Borjan" },
  { src: "/brewery.jpg", alt: "Brewery" },
  { src: "/cakbak.jpg", alt: "CakBak" },
  { src: "/candyland.jpg", alt: "CandyLand" },
  { src: "/crispo.jpg", alt: "Crispo" },
  { src: "/danpak.jpg", alt: "DanPak" },
  { src: "/dany.png", alt: "Dany" },
  { src: "/dawn.png", alt: "Dawn" },
  { src: "/diners.png", alt: "Diners" },
  { src: "/doctor.jpg", alt: "Doctor" },
  { src: "/efu.png", alt: "EFU" },
  { src: "/fa.png", alt: "FA" },
  { src: "/firdous.webp", alt: "Firdous" },
  { src: "/gfc.jpg", alt: "GFC" },
  { src: "/gm.jpg", alt: "GM" },
  { src: "/goldenpearl.jpg", alt: "GoldenPearl" },
  { src: "/habib.jpg", alt: "Habib" },
  { src: "/haier.jpg", alt: "Haier" },
  { src: "/herbion.webp", alt: "Herbion" },
  { src: "/hoest.png", alt: "Hoest" },
  { src: "/innovative.jpg", alt: "Innovative" },
  { src: "/kalakola.png", alt: "KalaKola" },
  { src: "/kernels.jpg", alt: "Kernels" },
  { src: "/kfcs.png", alt: "KFC" },
  { src: "/Kisans.jpg", alt: "Kisan" },
  { src: "/laziza.jpeg", alt: "Laziza" },
  { src: "/marhaba.png", alt: "Marhaba" },
  { src: "/mastpaints.png", alt: "MasterPaints" },
  { src: "/meerabs.jpg", alt: "Meerab" },
  { src: "/moods.jpg", alt: "Moods" },
  { src: "/mp.webp", alt: "MP" },
  { src: "/mtc.jpg", alt: "MTC" },
  { src: "/oxford.jpg", alt: "Oxford" },
  { src: "/panasonic.webp", alt: "Panasonic" },
  { src: "/parley.png", alt: "Parley" },
  { src: "/pearl.jpg", alt: "Pearl" },
  { src: "/pizzahut.jpg", alt: "PizzaHut" },
  { src: "/qmobile.jpg", alt: "QMobile" },
  { src: "/rc.jpg", alt: "RC" },
  { src: "/rf.jpg", alt: "RF" },
  { src: "/rios.png", alt: "Rios" },
  { src: "/saeedghani.png", alt: "SaeedGhani" },
  { src: "/samsol.jpeg", alt: "Samsol" },
  { src: "/shan.jpg", alt: "Shan" },
  { src: "/snackcitys.png", alt: "SnackCity" },
  { src: "/shezan.jpg", alt: "Shezan" },
  { src: "/starlet.jpg", alt: "Starlet" },
  { src: "/subway.png", alt: "Subway" },
  { src: "/sucral.jpg", alt: "Sucral" },
  { src: "/sufu.jpg", alt: "Sufi" },
  { src: "/suzuki.png", alt: "Suzuki" },
  { src: "/toyota.png", alt: "Toyota" },
  { src: "/urban.png", alt: "Urban" },
  { src: "/vince.jpg", alt: "Vince" },
  { src: "/waves.jpg", alt: "Waves" },
  { src: "/youngs.png", alt: "Youngs" },
];

export default function LogoMarquee() {
  return (
    <section
      aria-labelledby="trusted-brands"
      className="py-20 bg-gradient-to-b from-white via-[#F8F6FF] to-white dark:from-[#070707] dark:via-[#111111] dark:to-[#070707] border-y border-gray-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          id="trusted-brands"
          className="text-center text-black dark:text-white uppercase tracking-[4px] text-lg font-semibold mb-14"
        >
          Trusted By Leading Brands
        </h2>

        <div
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          aria-label="Trusted brands we have worked with"
        >
          <div className="flex w-max animate-marquee gap-16 will-change-transform">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.src}-${i}`}
                className="relative shrink-0 flex items-center justify-center
                  w-[140px] h-[70px]
                  sm:w-[170px] sm:h-[80px]
                  md:w-[190px] md:h-[90px]
                  lg:w-[220px] lg:h-[100px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width:640px) 140px,
                         (max-width:768px) 170px,
                         (max-width:1024px) 190px,
                         220px"
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}