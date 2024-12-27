"use client";
import { useQueryAutomation } from "@/hooks/user-queries";
import ActiveTrigger from "./active";
import { Separator } from "@radix-ui/react-separator";

type Props = {
  id: string;
};

function Trigger({ id }: Props) {
  const { data } = useQueryAutomation(id);

  if (data?.data && data.data.trigger) {
  }

  return (
    <div className="flex flex-col gap-y-6 items-center">
      {/* wip */}
      <ActiveTrigger
        type={"COMMENT"}
        keywords={[
          {
            id: "1",
            word: "hello",
            automationId: id,
          },
        ]}
      />
      {/* {data?.data?.trigger.length > 1 && } */}

      <>
        <div className="relative w-6/12 my-4">
          <p className="absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
            or
          </p>
          <Separator
            orientation="horizontal"
            className="border-muted border-[1px]"
          />
        </div>
        <ActiveTrigger
          type="MESSAGE"
          keywords={[
            {
              id: "2",
              word: "hello",
              automationId: id,
            },
          ]}
        />
      </>
    </div>
  );
}

export default Trigger;
