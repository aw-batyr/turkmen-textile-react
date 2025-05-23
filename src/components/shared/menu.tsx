import { FC, PropsWithChildren, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Chevron } from "./";
import { Link } from "react-router-dom";
import { Modal } from "./modal";
import { DropDownContent } from "@/locales/types/nav.type";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/ui";

interface Props {
  className?: string;
  title?: string;
  color?: string;
  triggerClassName?: string;

  dropDownContent?: DropDownContent[];
}

export const Menu: FC<PropsWithChildren<Props>> = ({
  title,
  dropDownContent,
  color,
  triggerClassName,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const setSheet = useUiStore((state) => state.setSheet);

  return (
    <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <PopoverTrigger
        className={cn("flex items-center gap-2", triggerClassName)}
      >
        {title}
        {children}
        {!children && <Chevron color={color} />}
      </PopoverTrigger>

      <PopoverContent className="w-fit px-0 cursor-pointer bg-surface_container">
        {dropDownContent &&
          dropDownContent.map((item) =>
            item.link ? (
              <Link
                onClick={() => {
                  setIsOpen(false);
                  setSheet(false);
                }}
                className="h-14 px-3 flex gap-3 items-center hover:bg-slate-300/50 transition-all"
                key={item.text}
                target={item.blank ?? ""}
                to={item.link}
              >
                {item.text}
                {item.blank && <img src="/pdf.svg" />}
              </Link>
            ) : item.modal ? (
              <Modal key={item.text} title={item.text} />
            ) : (
              <div
                key={item.text}
                className="h-14 px-3 py-2 flex items-center hover:bg-slate-300/50 transition-all"
                onClick={() => {
                  setIsOpen(false);
                  setSheet(false);
                }}
              >
                {item.text}
              </div>
            )
          )}
      </PopoverContent>
    </Popover>
  );
};
