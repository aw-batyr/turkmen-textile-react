import { Container } from "@/components/layout";
import { aboutInfo } from "@/data/about/about-info";
import { useTranslate } from "@/hooks/use-translate";
import { useLangStore } from "@/store/lang";
import { FC } from "react";

interface Props {
  className?: string;
}

export const AboutInfo: FC<Props> = () => {
  const lang = useLangStore((state) => state.lang);

  return (
    <Container className="flex flex-col md:my-20 my-10 gap-16">
      <div className="flex flex-col gap-6">
        <h2 className="h2">{aboutInfo[useTranslate(lang)].title}</h2>

        <div className="flex flex-col gap-3">
          {aboutInfo[useTranslate(lang)].p.map((item) => (
            <p className="p">{item}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="h2">{aboutInfo[useTranslate(lang)].title_2}</h3>

        <h4 className="p">{aboutInfo[useTranslate(lang)].subtitle_2} </h4>

        <ol type="1" className="list-decimal pl-8 flex flex-col gap-3 ">
          {aboutInfo[useTranslate(lang)].p_2.map((item) => (
            <li className="p">{item}</li>
          ))}
        </ol>
      </div>

      {/* <div className="flex flex-col gap-6">
        <h3 className="h2">Направления</h3>

        <h4 className="p">
          Выставка охватывает ключевые аспекты текстильной и модной индустрии,
          включая:
        </h4>
        <ul className="list-disc pl-8 flex flex-col gap-3 p">
          <li>
            Традиционный текстиль: экспозиции, шёлковым изделиям и ремесленным
            техникам Туркменистана.
          </li>
          <li>
            Инновационные материалы и технологии: зоны, где демонстрируются
            устойчивые материалы, 3D-ткацкие технологии и экологически чистые
            красители.
          </li>
          <li>
            Модные показы: ежедневные подиумные шоу с участием местных и
            международных дизайнеров, включая зарубежных модельеров.
          </li>
          <li>
            Маркетплейс для переговоров: пространство для встреч между
            экспортёрами и импортёрами.
          </li>
          <li>
            Оборудование для текстильной промышленности: современные технологии
            и машины для повышения эффективности и конкурентоспособности.
          </li>
          <li>
            Образовательные зоны: интерактивные экспозиции и семинары на тему
            устойчивости, дизайна и переработки.
          </li>
        </ul>

        <p className="text-18">
          Участники смогут обсудить современные технологии, лучшие практики и
          эффективные стратегии для устойчивого бизнеса.
        </p>
      </div> */}

      <div className="flex flex-col gap-6">
        <h2 className="h2">{aboutInfo[useTranslate(lang)].title_3}</h2>

        <h3 className="p">{aboutInfo[useTranslate(lang)].subtitle_3}</h3>

        <h3>{aboutInfo[useTranslate(lang)].subtitle_4}</h3>
        <ul className="list-disc pl-8 flex flex-col gap-3 p">
          {aboutInfo[useTranslate(lang)].p_3.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
