import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("main");

  const { title, texts, button, button2 } = t("impressions.hero", {
    returnObjects: true,
  }) as { title: string; texts: string[]; button: string; button2: string };

  return (
    <section className="">
      <img
        src="/impressions-cover.png"
        alt=""
        className="w-full object-contain max-h-[610px]"
      />
      <h1 className="absolute opacity-0 top-0 left-0">Показы</h1>

      <div className="bg-[url('/impressions-bg.png')]">
        <Container className="py-20">
          <h2 className="text-5xl leading-[120%] mb-10">{title}</h2>
          <div className="text-on_surface_v flex flex-col gap-3">
            {texts.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-6">
            <Button size={"sm"} className="w-full">
              {button}
            </Button>
            <Button size={"sm"} className="w-full">
              {button2}
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
