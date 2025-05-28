import { Container } from "@/components/layout";
import { DesignerCard, Loader } from "../";
import useEmblaCarousel from "embla-carousel-react";
import { useDesigners } from "@/hooks/tanstack/use-designers";
import { useTranslation } from "react-i18next";

const Designers = () => {
  const [emblaRef] = useEmblaCarousel({ align: "center" });
  const { t } = useTranslation("main");

  const { title, text } = t("impressions.designers", {
    returnObjects: true,
  }) as {
    title: string;
    text: string;
  };

  const { data, isPending } = useDesigners(1);

  return (
    <section className="py-20">
      <Container className="flex flex-col gap-10">
        <h2 className="text-5xl leading-[120%]">{title}</h2>
        <p className="text-lg normal text-on_surface_v">{text}</p>

        <div ref={emblaRef} className="embla">
          <div className="flex embla__container">
            {isPending ? (
              <Loader />
            ) : (
              data?.designers?.map((item, i) => (
                <DesignerCard
                  key={i}
                  {...item}
                  className="embla__slide flex-[0_0_714px] mr-4"
                />
              ))
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Designers;
