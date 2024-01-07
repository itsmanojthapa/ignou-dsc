import AnswerCard from "@/components/cards/AnswerCard";
import { getUserAnswers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import React from "react";
import Pagination from "../Pagination/Pagination";

interface AnswersTabProps extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const AnswersTab = async ({
  searchParams,
  userId,
  clerkId,
}: AnswersTabProps) => {
  const { userAnswers, isNextAnswer } = await getUserAnswers({
    userId,
    page: searchParams?.page ? +searchParams.page : 1,
  });

  const pageNumber = searchParams?.page ? +searchParams.page : 1;
  return (
    <>
      {userAnswers.map((answer) => (
        <AnswerCard
          key={answer._id}
          clerkId={clerkId}
          _id={answer._id}
          question={answer.question}
          author={answer.author}
          upvotes={answer.upvotes.length}
          createdAt={answer.createdAt}
        />
      ))}
      <div className="mt-10">
        <Pagination pageNumber={pageNumber} isNext={isNextAnswer} />
      </div>
    </>
  );
};

export default AnswersTab;
