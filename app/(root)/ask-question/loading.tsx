import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      <Skeleton className="mb-12 mt-11 h-14 w-full bg-light-700" />

      <div className="mt-10 flex flex-col gap-6">
        {[1, 2].map((item) => (
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
