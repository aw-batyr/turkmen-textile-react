import { FC } from "react";
import { ThemeCard } from "../theme-card";
import { Container } from "@/components/layout";
import { useLangStore } from "@/store/lang";
import { homeTheme } from "@/data/home-theme.data";
import { useTranslate } from "@/hooks/use-translate";

export const themes = [
  {
    title: "Текстильные машины и оборудование",
    img: "/theme/1.svg",
  },
  {
    title: "Одежда, обувь, кожаные изделия",
    img: "/theme/2.svg",
  },
  {
    title: "Переработка натуральных волокон",
    img: "/theme/3.svg",
  },
  {
    title: "Домашний текстиль и эко-текстиль",
    img: "/theme/4.svg",
  },
  {
    title: "Запасные части и вспомогательные материалы",
    img: "/theme/5.svg",
  },
  {
    title: "Химические средства и красители",
    img: "/theme/6.svg",
  },
  {
    title: "Аксессуары и швейная фурнитура",
    img: "/theme/7.svg",
  },
  {
    title: "Мода и дизайн",
    img: "/theme/8.svg",
  },
];

export const HomeTheme: FC = () => {
  const lang = useLangStore((state) => state.lang);
  return (
    <section className="">
      <Container>
        <h2 className="h2 mb-10 text-center">
          {homeTheme[useTranslate(lang)].title}
        </h2>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {homeTheme[useTranslate(lang)].data.map((item) => (
            <ThemeCard
              key={item.title}
              {...item}
              iconClassName="bg-teritary_04"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
