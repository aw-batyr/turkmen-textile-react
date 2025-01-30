import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout";
import { ContactCard, TimeCard } from "../";

interface Props {
  className?: string;
}

export const times = [
  {
    name: "Монтаж выставки",
    date: "12 мая – 10 июня 2025 года",
  },
  {
    name: "Работа",
    date: "11–13 июня 2025 года",
  },
  {
    name: "Демонтаж",
    date: "13–14 июня 2025 года",
  },
];

const contacts = [
  {
    title: "contact@turkmenexpo.com",
    subtitle: "Адрес электронной почты",
    img: "/contacts/mail.svg",
  },
  {
    title: "здание ТПП Туркменистана",
    subtitle: "Адрес выставки",
    img: "/contacts/location.svg",
  },
  {
    title: "+99371871812; 99363719588",
    subtitle: "Контактный номер",
    img: "/contacts/mobile.svg",
  },
];

export const HomeTime: FC<Props> = ({ className }) => {
  return (
    <section className={cn("bg-surface_high pt-10 pb-20", className)}>
      <Container>
        <h2 className="h2 mb-10">Время выставки</h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {times.map((item) => (
              <TimeCard {...item} key={item.name} className="w-full" />
            ))}
          </div>

          <div className="md:p-10 pt-16 flex flex-col md:flex-row items-center gap-6">
            {contacts.map((item) => (
              <ContactCard {...item} key={item.title} className="w-full" />
            ))}
          </div>

          <Link to="/stend-form" className="md:w-fit w-full  mx-auto">
            <Button className="w-full">Забронируйте стенд </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
