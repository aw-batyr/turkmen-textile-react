import { FC } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useTranslation } from "react-i18next";
import { HomeTimer } from "./";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

export const HomeHero: FC = () => {
  const { t } = useTranslation("home");
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    }),
  ]);

  const lg = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");

  function getBanners() {
    if (lg) return t("banners.lg", { returnObjects: true }) as string[];
    if (md) return t("banners.md", { returnObjects: true }) as string[];
    return t("banners.sm", { returnObjects: true }) as string[];
  }

  const banners = getBanners();

  return (
    <div>
      <section className="flex flex-col gap-5">
        <div ref={emblaRef} className="embla overflow-hidden">
          <div className="embla__container flex">
            {banners?.map((item, i) =>
              i === 0 ? (
                <div key={i} className="embla__slide flex-[0_0_100%]">
                  <img
                    src={item}
                    alt=""
                    className="size-full object-cover lg:max-h-[600px] lg:min-h-[320px]"
                  />
                </div>
              ) : (
                <Link
                  key={i}
                  to={"/impressions"}
                  className="embla__slide flex-[0_0_100%]"
                >
                  <img
                    src={item}
                    alt=""
                    className="size-full object-cover lg:max-h-[600px] lg:min-h-[320px]"
                  />
                </Link>
              )
            )}
          </div>
        </div>

        <div className="relative">
          <HomeTimer className="absolute sm:bottom-12 bottom-28 2xl:right-[10%] xl:right-[13%] lg:right-[15%] right-10" />
        </div>
      </section>
    </div>
  );
};
