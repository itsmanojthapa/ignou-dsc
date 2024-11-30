import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";
import { getTopQuestions } from "@/lib/actions/question.action";
import { getTopPopularTags } from "@/lib/actions/tag.action";

const RightSidebar = async () => {
  const topQuestions = await getTopQuestions();
  const popularTags = await getTopPopularTags();
  return (
    <section className="light-border right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l bg-slate-500 p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7">
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-[30px]">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id + ""}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RightSidebar;
