import { Container } from "@/components/layout";
import { DesignerCard, Loader } from "../";
import useEmblaCarousel from "embla-carousel-react";
import { useDesigners } from "@/hooks/tanstack/use-designers";

const Designers = () => {
  const [emblaRef] = useEmblaCarousel({ align: "center" });

  const { data, isPending } = useDesigners(1);

  return (
    <section className="py-[200px]">
      <Container className="flex flex-col gap-10">
        <h2 className="text-5xl">Дизайнеры одежды</h2>

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
