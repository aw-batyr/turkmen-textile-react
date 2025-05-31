import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useLangStore } from "@/store/lang";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation("main");
  const lang = useLangStore((state) => state.lang);
  const { pathname } = useLocation();

  const { title, texts, button, button2 } = t("impressions.hero", {
    returnObjects: true,
  }) as { title: string; texts: string[]; button: string; button2: string };

  const { title2, texts2 } = t("impressions.hero", {
    returnObjects: true,
  }) as {
    title2: string;
    texts2: string[];
  };

  const filterText = (value: any, value2: string) => {
    if (pathname === "/impressions") return value;
    else return value2;
  };

  const filterTextArr = (value: string[], value2: string[]) => {
    if (pathname === "/impressions") return value;
    else return value2;
  };

  return (
    <section className="">
      <img
        src={
          lang === "ru" ? "/impressions-cover.png" : "/impressions-cover-en.png"
        }
        alt=""
        className="w-full object-cover object-top max-h-[610px]"
      />
      <h1 className="absolute opacity-0 top-0 left-0">Модные показы</h1>

      <div className="bg-[url('/impressions-bg.png')]">
        <Container className="md:py-20 py-10">
          <h2 className="md:text-5xl text-2xl leading-[120%] md:mb-10 mb-6">
            {filterText(title, title2)}
          </h2>
          <div className="text-on_surface_v flex flex-col gap-3">
            {filterTextArr(texts, texts2)?.map((item, i) => (
              <p className="md:text-lg !normal" key={i}>
                {item}
              </p>
            ))}
          </div>

          <div className="flex md:flex-row flex-col  items-center gap-6 mt-6">
            <Link
              target="_blank"
              to="https://turkmentextile.turkmenexpo.com/app/storage/app/media/ICS%20file/TurkmenTextile%20Expo-2025.ics"
              className="w-full"
            >
              <Button size={"sm"} className="w-full">
                {button}
              </Button>
            </Link>
            <Link
              to="https://turkmentextile.turkmenexpo.com/app/storage/app/media/agenda/agenda_ru.pdf"
              target="_blank"
              className="w-full"
            >
              <Button size={"sm"} className="w-full">
                {button2}
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
