import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "lucide-react";

const Loading = () => {
  return (
    <section>
      <div className="flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[40px] rounded-lg px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mb-12 mt-11 flex flex-wrap items-center justify-between gap-5">
        <Skeleton className="h-14 flex-1 bg-light-700 " />
        <div className="hidden max-md:block">
          <Skeleton className="h-14 w-28 bg-light-700 " />
        </div>
      </div>

      <div className="my-10 hidden flex-wrap gap-6 md:flex">
        <Skeleton className="h-9 w-40 bg-light-700 " />
        <Skeleton className="h-9 w-40 bg-light-700 " />
        <Skeleton className="h-9 w-40 bg-light-700 " />
        <Skeleton className="h-9 w-40 bg-light-700 " />
      </div>

      <div className="flex flex-col gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Skeleton
            key={item}
            className="h-48 w-full rounded-xl bg-light-700 "
          />
        ))}
      </div>
    </section>
  );
};
export default Loading;
