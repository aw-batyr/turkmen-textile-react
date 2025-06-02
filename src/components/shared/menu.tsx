import { FC, PropsWithChildren, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Chevron, HoverMenu } from "./";
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
  const [isHover, setIsHover] = useState(false);
  const setSheet = useUiStore((state) => state.setSheet);

  return (
    <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <PopoverTrigger
        className={cn("flex items-center gap-2", triggerClassName)}
      >
        {title}
        {children}
        {!children && (
          <Chevron
            color={color}
            className={cn("transition-all", isOpen && "rotate-180")}
          />
        )}
      </PopoverTrigger>

      <PopoverContent className="w-fit px-0 bg-surface_container">
        {dropDownContent &&
          dropDownContent.map((item, i) =>
            item.hover ? (
              <HoverMenu setIsOpen={setIsOpen} key={i} {...item} />
            ) : item.link ? (
              <Link
                onClick={() => {
                  setIsOpen(false);
                  setSheet(false);
                }}
                className="h-14 px-3 flex gap-3 justify-between cursor-pointer items-center hover:bg-slate-300/50 transition-all"
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
                onMouseEnter={() => setIsHover(item.hover ? true : false)}
                onMouseLeave={() => setIsHover(false)}
                className="relative"
                key={i}
              >
                <div
                  key={item.text}
                  className="h-14 px-3 py-2 flex items-center cursor-pointer hover:bg-slate-300/50 transition-all"
                  onClick={() => {
                    setIsOpen(false);
                    setSheet(false);
                  }}
                >
                  {item.text}
                </div>
                {isHover && (
                  <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() =>
                      setTimeout(() => setIsHover(false), 1000)
                    }
                    className="absolute bottom-0 flex flex-col -right-40 bg-surface_container"
                  >
                    {item.hoverItems?.map((item, i) => (
                      <Link
                        key={i}
                        to={item.link ?? ""}
                        className="h-14 px-3 py-2"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
      </PopoverContent>
    </Popover>
  );
};
