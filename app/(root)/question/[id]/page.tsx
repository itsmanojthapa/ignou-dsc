import Answer from "@/components/forms/Answer";
import AllAnswers from "@/components/shared/AllAnswers/AllAnswers";
import Metric from "@/components/shared/Metric/Metric";
import ParselHTML from "@/components/shared/ParselHTML/ParselHTML";
import RenderTag from "@/components/shared/RightSidebar/RenderTag";
import Votes from "@/components/shared/Votes/Votes";
import { getQuestionById } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { getTimeStamp, formatAndDivideNumber } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Question details | IGNOU-DSC",
  description: "Question page page of IGNOU-DSC",
};

interface QuestionDetailsProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | undefined };
}
const QuestionDetails = async ({
  params,
  searchParams,
}: QuestionDetailsProps) => {
  const question = await getQuestionById({ questionId: params.id });
  const { userId: clerkId } = auth();
  let mongoUser;
  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  }
  return (
    <article>
      <div className="flex-start w-full flex-col ">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Link
            href={`/profile/${question.author.clerkId}`}
            className="flex items-center justify-start gap-2">
            <Image
              src={question.author.picture}
              alt="profile picture"
              className="rounded-full"
              width={22}
              height={22}
            />
            <p className="paragraph-semibold text-dark300_light700">
              {question.author.name}
            </p>
          </Link>
          {/*  VOTING */}
          <div className="flex justify-end">
            {mongoUser && (
              <Votes
                type="Question"
                itemId={JSON.stringify(question._id)}
                userId={JSON.stringify(mongoUser._id)}
                upvotes={question.upvotes.length}
                hasupVoted={question.upvotes.includes(mongoUser._id)}
                downvotes={question.downvotes.length}
                hasdownVoted={question.downvotes.includes(mongoUser._id)}
                hasSaved={mongoUser?.saved.includes(question._id)}
              />
            )}
          </div>
        </div>
        <h1 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
          {question.title}
        </h1>
      </div>
      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Metric
          imgUrl="/assets/icons/clock.svg"
          alt="=clock icon"
          value={`- asked ${getTimeStamp(question.createdAt)}`}
          title="Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={question.answers.length}
          title="Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatAndDivideNumber(question.views)}
          title="Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
      <div className="markdown w-full min-w-full">
        <ParselHTML data={question.content} />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {question.tags.map((tag: any) => (
          <RenderTag
            key={tag._id}
            _id={tag._id}
            name={tag.name}
            showCount={false}
          />
        ))}
      </div>
      {mongoUser && (
        <>
          <AllAnswers
            questionId={question._id}
            userId={JSON.stringify(mongoUser._id)}
            totalAnswers={question.answers.length}
            page={searchParams?.page}
            filter={searchParams?.filter}
          />
          <Answer
            question={question.content}
            questionId={JSON.stringify(question._id)}
            authorId={JSON.stringify(mongoUser._id)}
          />
        </>
      )}
    </article>
  );
};

export default QuestionDetails;
