import useEmblaCarousel from "embla-carousel-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { useMediaQuery } from "usehooks-ts";
import { btns } from "@/data/home/home-hero.data";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";

export const HomeHero: FC = () => {
  const [embalRef] = useEmblaCarousel();
  const lang = useLangStore((state) => state.lang);

  const lg = useMediaQuery("(min-width: 1024px)");
  const md = useMediaQuery("(min-width: 768px)");

  function getBanner() {
    if (lg) return "/banners/ru/l.jpg";
    else if (md) return "/banners/ru/m.jpg";
    else return "/banners/ru/s.jpg";
  }

  return (
    <section className="flex flex-col gap-5">
      <div ref={embalRef} className="embla">
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

      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 text-2xl">
        {btns[useTranslate(lang)].data.map(({ title, link, blank }) => (
          <Link
            target={blank ? "_blank" : ""}
            key={title}
            to={link}
            className="w-full"
          >
            <Button
              size={"lg"}
              variant={"teritary"}
              className="w-full drop-shadow-sm shadow-md text-xl bg-teritary text-on_teritary hover:bg-teritary/90"
            >
              {title}
            </Button>
          </Link>
        ))}
      </Container>
    </section>
  );
};
