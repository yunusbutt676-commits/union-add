
import Image from "next/image";

type BrandLogo = {
  src: string;
  alt: string;
};

const logos: BrandLogo[] = [
  { src: "/sk.webp", alt: "SK" },
  { src: "/taimoor.jfif", alt: "Taimoor" },
  { src: "/walton.jfif", alt: "Walton" },
  { src: "/cantt.jfif", alt: "Cantt" },
  { src: "/acpl.webp", alt: "ACPL" },
  { src: "/advtelecom.jpg", alt: "AdvTelecom" },
  { src: "/airlifts.png", alt: "Airlift" },
  { src: "/alhafeezgarden.png", alt: "Al Hafeez Garden" },
  { src: "/ahmedfoods.jpg", alt: "Ahmed Foods" },
  { src: "/audoinic.jpg", alt: "Audoinic" },
  { src: "/aeo.png", alt: "AEO" },
  { src: "/aerosoft.jpg", alt: "AeroSoft" },
  { src: "/alokozay.jpg", alt: "Alokozay" },
  { src: "/aroma.png", alt: "Aroma" },
  { src: "/bakeparlour.jpg", alt: "Bake Parlour" },
  { src: "/bakersland.jpg", alt: "Bakers Land" },
  { src: "/bcircles.webp", alt: "B Circles" },
  { src: "/bioamla.jpg", alt: "Bio Amla" },
  { src: "/bisconni.jpeg", alt: "Bisconni" },
  { src: "/borjan.png", alt: "Borjan" },
  { src: "/brewery.jpg", alt: "Brewery" },
  { src: "/cakbak.jpg", alt: "Cak Bak" },
  { src: "/candyland.jpg", alt: "Candyland" },
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
  { src: "/goldenpearl.jpg", alt: "Golden Pearl" },
  { src: "/habib.jpg", alt: "Habib" },
  { src: "/haier.jpg", alt: "Haier" },
  { src: "/herbion.webp", alt: "Herbion" },
  { src: "/hoest.png", alt: "Hoest" },
  { src: "/innovative.jpg", alt: "Innovative" },
  { src: "/kalakola.png", alt: "Kala Kola" },
  { src: "/kernels.jpg", alt: "Kernels" },
  { src: "/kfcs.png", alt: "KFC" },
  { src: "/Kisans.jpg", alt: "Kisan" },
  { src: "/laziza.jpeg", alt: "Laziza" },
  { src: "/marhaba.png", alt: "Marhaba" },
  { src: "/mastpaints.png", alt: "Master Paints" },
  { src: "/meerabs.jpg", alt: "Meerab" },
  { src: "/moods.jpg", alt: "Moods" },
  { src: "/mp.webp", alt: "MP" },
  { src: "/mtc.jpg", alt: "MTC" },
  { src: "/oxford.jpg", alt: "Oxford" },
  { src: "/panasonic.webp", alt: "Panasonic" },
  { src: "/parley.png", alt: "Parley" },
  { src: "/pearl.jpg", alt: "Pearl" },
  { src: "/pizzahut.jpg", alt: "Pizza Hut" },
  { src: "/qmobile.jpg", alt: "QMobile" },
  { src: "/rc.jpg", alt: "RC" },
  { src: "/rf.jpg", alt: "RF" },
  { src: "/rios.png", alt: "Rios" },
  { src: "/saeedghani.png", alt: "Saeed Ghani" },
  { src: "/samsol.jpeg", alt: "Samsol" },
  { src: "/shan.jpg", alt: "Shan" },
  { src: "/snackcitys.png", alt: "Snack City" },
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
      aria-labelledby="unionadd-client-brands"
      className="
        relative
        w-full
        overflow-hidden
        border-y
        border-gray-200
        bg-gradient-to-b
        from-white
        via-[#F8F6FF]
        to-white
        py-12
        sm:py-16
        lg:py-20
        dark:border-white/10
        dark:from-[#070707]
        dark:via-[#111111]
        dark:to-[#070707]
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="unionadd-client-brands"
          className="
            mb-9
            mt-9
            text-center
            text-base
            font-semibold
            uppercase
            tracking-[0.12em]
            text-gray-900
            sm:mb-12
            sm:text-lg
            sm:tracking-[0.2em]
            lg:mb-14
            dark:text-white
          "
        >
          Trusted By Leading Brands
        </h2>

        <p className="sr-only">
          Explore the brands featured in the Union Add
          client portfolio, representing advertising,
          branding, marketing, and creative projects.
        </p>

        {/* Continuous scrolling logo marquee */}
        <div
          role="group"
          aria-label="Brands featured in the Union Add portfolio"
          className="
            relative
            w-full
            overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
            sm:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          "
        >
          <div
            className="
              flex
              w-max
              items-center
              gap-8
              sm:gap-12
              lg:gap-16
              animate-marquee
              hover:[animation-play-state:paused]
              focus-within:[animation-play-state:paused]
              motion-reduce:animate-none
              motion-reduce:w-full
              motion-reduce:flex-wrap
              motion-reduce:justify-center
              motion-reduce:gap-4
              will-change-transform
            "
          >
            {[...logos, ...logos].map((logo, index) => {
              const isDuplicate = index >= logos.length;

              return (
                <div
                  key={`${logo.src}-${index}`}
                  aria-hidden={isDuplicate ? true : undefined}
                  className={`
                    relative
                    flex
                    shrink-0
                    items-center
                    justify-center

                    h-[65px]
                    w-[120px]

                    sm:h-[80px]
                    sm:w-[170px]

                    md:h-[90px]
                    md:w-[190px]

                    lg:h-[100px]
                    lg:w-[220px]

                    ${
                      isDuplicate
                        ? "motion-reduce:hidden"
                        : ""
                    }
                  `}
                >
                  <Image
                    src={logo.src}
                    alt={isDuplicate ? "" : `${logo.alt} logo`}
                    fill
                    loading="lazy"
                    sizes="
                      (max-width: 639px) 120px,
                      (max-width: 767px) 170px,
                      (max-width: 1023px) 190px,
                      220px
                    "
                    className="
                      object-contain
                      transition-transform
                      duration-300
                      hover:scale-105
                      motion-reduce:transform-none
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
