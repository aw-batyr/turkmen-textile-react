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
import { navData2 } from "./header";

interface Props {
  className?: string;
}

export const Burger: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet onOpenChange={() => setOpen(!open)} open={open}>
      <SheetTrigger>
        <div className="flex flex-col gap-1 lg:hidden items-center justify-center size-10">
          <div className="w-[18px] h-0.5 bg-reverse_primary rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-reverse_primary rounded-[2px]" />
          <div className="w-[18px] h-0.5 bg-reverse_primary rounded-[2px]" />
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

          <Link to="/B2B-B2G" onClick={() => setOpen(false)}>
            <Button className="text-base w-full" size={"sm"}>
              B2B | B2G встречи
            </Button>
          </Link>
        </SheetHeader>
        <hr className="border-slate-500/20 my-8" />

        <div className="flex flex-col gap-6">
          {navData2.map((item) => (
            <Link
              onClick={() => setOpen(false)}
              className="h-10 text-on_surface "
              key={item.title}
              to={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
