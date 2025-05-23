import { FC } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu } from "../menu";
import { Chevron } from "../chevron";

interface Props {
  className?: string;
}

export const HomeActions: FC<Props> = ({ className }) => {
  const { t } = useTranslation("home");

  const { title, items } = t("buttons", { returnObjects: true }) as {
    title: string;
    items: {
      text: string;
      link?: string;
      blank?: boolean;
      dropdown?: boolean;
      items: { text: string; link: string }[];
    }[];
  };

  console.log(items);

  return (
    <section className={cn("bg-teritary_container py-10", className)}>
      <Container>
        <h2 className="h2 text-center mb-10 !text-on_teritary_container">
          {title}
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {items.map((item) =>
            !item.dropdown ? (
              <Link to={item.link ?? ""} target={item.blank ? "_blank" : ""}>
                <Button
                  variant={"teritary"}
                  size={"lg"}
                  className="w-full drop-shadow-sm shadow-md text-xl bg-teritary text-on_teritary hover:bg-teritary/90"
                >
                  {item.text}
                </Button>
              </Link>
            ) : (
              <Link
                target={item.blank ? "_blank" : ""}
                key={title}
                to={item.link ?? ""}
                className="w-full"
              >
                <Menu
                  dropDownContent={item.items}
                  triggerClassName="w-full"
                  className="!w-full"
                >
                  <Button
                    size={"lg"}
                    variant={"teritary"}
                    className="w-full drop-shadow-sm shadow-md text-xl bg-teritary text-on_teritary hover:bg-teritary/90"
                  >
                    {item.text}
                    <Chevron w={"40"} h={"40"} color="white" />
                  </Button>
                </Menu>
              </Link>
            )
          )}
        </div>
      </Container>
    </section>
  );
};
