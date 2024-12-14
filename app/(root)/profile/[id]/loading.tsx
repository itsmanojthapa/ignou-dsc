import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      <div className="flex gap-10">
        <Skeleton className="h-36 w-36 rounded-full bg-light-700" />
        <Skeleton className="mb-12 mt-11 h-14 w-full flex-1 bg-light-700" />
      </div>
      <div className="mb-12 mt-11 flex flex-wrap gap-4 ">
        {[1, 2, 3, 4].map((item) => (
          <Skeleton
            key={item}
            className="h-60 w-full flex-1 rounded-2xl bg-light-700 sm:w-[260px]"
          />
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-6">
        {[1, 2, 3, 4].map((item) => (
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
