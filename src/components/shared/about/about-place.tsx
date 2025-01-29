import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
}

export const AboutPlace: FC<Props> = ({ className }) => {
  return (
    <section
      className={cn(
        "flex items-center gap-6 relative md:py-20 py-10 overflow-hidden",
        className
      )}
    >
      <Container>
        <h3 className="h2  mb-6">Место проведения</h3>
        <p className="text-lg  text-on_surface_v normal">
          Торгово-промышленная палата Туркменистана создана в целях содействия
          развитию экономики Туркменистана, ее интегрированию в мировую
          хозяйственную систему, формированию современной промышленной,
          финансовой и торговой инфраструктуры, создания благоприятных условий
          для предпринимательской деятельности, оказания содействия в
          установлении торгово-экономических, научных и технических связей с
          зарубежными партнерами.
        </p>
      </Container>
    </section>
  );
};
