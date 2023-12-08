import { formatAndDivideNumber, getTimeStamp } from "@/lib/utils";
import Link from "next/link";
import RenderTag from "../shared/RightSidebar/RenderTag";
import Metric from "../shared/Metric/Metric";

interface QuestionCardProps {
  _id: string;
  title: string;
  tags: { _id: string; name: string }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

function QuestionCard({
  _id,
  title,
  tags,
  author,
  upvotes,
  createdAt,
  views,
  answers,
}: QuestionCardProps) {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={`/questions/${_id}`}>
            <h3 className="text-dark200_light900 base-semibold sm:h3-semibold line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* //TODO: If sign-in edit delete action */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        {author && (
          <Metric
            href={`/profile/${author._id}`}
            imgUrl={"/assets/icons/avatar.svg"}
            alt="user"
            value={author.name}
            isAuthor
            title={`- asked ${getTimeStamp(createdAt)}`}
            textStyles="body-medium text-dark400_light700"
          />
        )}
        <div className="flex-between flex-wrap gap-3">
          <Metric
            href={`/questions/${_id}`}
            imgUrl="assets/icons/like.svg"
            alt="upvotes"
            value={formatAndDivideNumber(upvotes)}
            title="Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            href={`/questions/${_id}`}
            imgUrl="assets/icons/message.svg"
            alt="message"
            value={answers.length}
            title="Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            href={`/questions/${_id}`}
            imgUrl="assets/icons/eye.svg"
            alt="eye"
            value={formatAndDivideNumber(views)}
            title="Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
