import React from "react";
import { SearchParamsProps } from "@/types";
import { getUserQuestions } from "@/lib/actions/user.action";
import QuestionCard from "@/components/cards/QuestionCard";
import Pagination from "../Pagination/Pagination";

interface QuestionTabProps extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const QuestionTab = async ({
  searchParams,
  userId,
  clerkId,
}: QuestionTabProps) => {
  const { userQuestions, isNextQuestion } = await getUserQuestions({
    userId,
    page: searchParams?.page ? +searchParams.page : 1,
  });
  const pageNumber = searchParams?.page ? +searchParams.page : 1;

  return (
    <>
      {userQuestions.map((question) => (
        <div key={question._id} className="mb-3">
          <QuestionCard
            key={question._id}
            _id={question._id}
            clerkId={clerkId}
            title={question.title}
            tags={question.tags}
            author={question.author}
            upvotes={question.upvotes.length}
            views={question.views}
            answers={question.answers}
            createdAt={question.createdAt}
          />
        </div>
      ))}
      <div className="mt-10">
        <Pagination pageNumber={pageNumber} isNext={isNextQuestion} />
      </div>
    </>
  );
};

export default QuestionTab;
