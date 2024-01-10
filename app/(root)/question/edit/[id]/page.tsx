import { getQuestionById } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { ParamsProps } from "@/types";
import Question from "@/components/forms/Question";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Question| IGNOU-DSC",
  description: "Edit Question page of IGNOU-DSC",
};

const EditQuestion = async ({ params }: ParamsProps) => {
  const { userId } = auth();
  if (!userId) return null;

  const mongoUser = await getUserById({ userId });

  const question = await getQuestionById({ questionId: params.id });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>
      <div className="mt-9">
        <Question
          type="Edit"
          mongoUserId={JSON.stringify(mongoUser._id)}
          questionData={JSON.stringify(question)}
        />
      </div>
    </>
  );
};

export default EditQuestion;
