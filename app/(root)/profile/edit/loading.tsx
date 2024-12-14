import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      <h1 className="h1-bold text-dark100_light900">All Questions</h1>
      <Skeleton className="mb-12 mt-11 h-14 w-full bg-light-700" />
      <Skeleton className="mb-12 mt-11 h-14 w-full bg-light-700" />
      <Skeleton className="mb-12 mt-11 h-14 w-full bg-light-700" />
      <Skeleton className="mb-12 mt-11 h-14 w-full bg-light-700" />
      <Skeleton className="mb-12 mt-11 h-14 w-full bg-light-700" />
    </section>
  );
};

export default Loading;
