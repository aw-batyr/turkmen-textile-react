import { FC } from "react";
import { Container } from "./";
import { Logo } from "../shared";
import { Language, useLangStore } from "@/store/lang";

export const Footer: FC = () => {
  const lang = useLangStore((state) => state.lang);
  return (
    <footer className="py-5 bg-primary">
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between items-center">
          <Logo />

          <div className="flex items-center gap-6">
            <img src="/inst.svg" />
            <img src="/in.svg" />
            <img src="/x.svg" />
          </div>
        </div>

        <hr className="border-white/50" />

        <h5 className="text-base text-center normal text-white">
          {lang === Language.RU
            ? "©2025 Все права защищены"
            : "All rights reserved"}
        </h5>
      </Container>
    </footer>
  );
};
