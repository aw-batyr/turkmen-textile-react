import { FC, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/locales/types/nav.type";
import { Menu } from "../shared";
import { useUiStore } from "@/store/ui";

interface Props {
  className?: string;
}

export const Burger: FC<Props> = () => {
  const { t } = useTranslation("nav");

  const sheet = useUiStore((state) => state.sheet);
  const setSheet = useUiStore((state) => state.setSheet);

  const nav = t("navigation", { returnObjects: true }) as Navigation[];

  return (
    <Sheet onOpenChange={() => setSheet(!sheet)} open={sheet}>
      <SheetTrigger>
        <div className="flex flex-col gap-1 lg:hidden items-center justify-center size-10">
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-white rounded-[2px]" />
        </div>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <SheetClose />

        <SheetHeader className="mt-16 flex flex-col gap-2">
          <Link to="">
            <Button
              variant={"secondary"}
              size={"sm"}
              className="bg-teritary w-full text-on_teritary hover:bg-teritary/90"
            >
              Официальная поддержка
            </Button>
          </Link>

          <Link to="/B2B-B2G" onClick={() => setSheet(false)}>
            <Button className="text-base w-full" size={"sm"}>
              B2B | B2G встречи
            </Button>
          </Link>
        </SheetHeader>
        <hr className="border-slate-500/20 my-8" />

        <div className="flex flex-col gap-6">
          {nav.map((item) =>
            !item.drop ? (
              <Link
                target={item.blank ?? ""}
                className="py-2"
                key={item.title}
                to={item.link || ""}
                onClick={() => setSheet(false)}
              >
                {item.title}
              </Link>
            ) : (
              <Menu
                className="w-full"
                triggerClassName="justify-between"
                key={item.title}
                color={"black"}
                dropDownContent={item.dropDownContent}
                title={item.title}
              />
            )
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
