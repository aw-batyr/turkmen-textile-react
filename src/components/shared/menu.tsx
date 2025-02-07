import { FC } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Chevron } from "./";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  dropDownText?: string;
  title: string;
  color?: string;

  items?: {
    title: string;
    link: string;
    blank: boolean;
  }[];
}

export const Menu: FC<Props> = ({ title, dropDownText, color, items }) => {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2">
        {title}
        <Chevron color={color} />
      </PopoverTrigger>

      <PopoverContent className="w-fit cursor-pointer bg-surface_container">
        {dropDownText}
        {items &&
          items.map((item) => (
            <Link key={item.title} target="_blank" to={item.link}>
              {item.title}
            </Link>
          ))}
      </PopoverContent>
    </Popover>
  );
};
