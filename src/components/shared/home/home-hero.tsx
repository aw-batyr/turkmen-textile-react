import { FC } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useTranslation } from "react-i18next";
import { HomeTimer } from "./";

export const HomeHero: FC = () => {
  const { t } = useTranslation("home");

  const lg = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");

  function getBanner() {
    if (lg) return t("banners.lg");
    else if (md) return t("banners.md");
    else return t("banners.sm");
  }

  return (
    <div>
      <section className="flex flex-col gap-5 ">
        <div className="embla ">
          <div className="embla__container">
            <div className="embla__slide">
              <img
                src={getBanner()}
                alt=""
                className="size-full object-cover lg:max-h-[600px] lg:min-h-[320px]"
              />
            </div>
          </div>
        </div>

        <div className="relative container">
          <HomeTimer className="absolute sm:bottom-12 bottom-28 right-5" />
        </div>
      </section>
    </div>
  );
};
