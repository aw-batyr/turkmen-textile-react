import { Cover } from "@/components/layout";
import { B2bFormProgress } from "@/components/shared";
import { B2bForm } from "@/components/shared/forms/b2b-form";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { FC, useState } from "react";

interface Props {
  className?: string;
}

export const B2b: FC<Props> = () => {
  useScrollTop();

  const [stage, setStage] = useState(1);
  const [success, setSuccess] = useState(false);

  return (
    <div className={"pb-[120px]"}>
      <Cover title="B2B | B2G встречи" />

      {!success && stage !== 0 && <B2bFormProgress stage={stage} />}

      <div className="max-w-[808px] md:mx-auto mx-5">
        <B2bForm
          success={success}
          setSuccess={setSuccess}
          stage={stage}
          setStage={setStage}
        />
      </div>
    </div>
  );
};
