import { Schema, model, Document, Types } from "mongoose";

interface IResponse {
  question_id: Types.ObjectId;
  selected_option_id: number;
}

export interface IUserResponse extends Document {
  user_id: Types.ObjectId;
  quiz_id: Types.ObjectId;
  responses: IResponse[];
  score: number;
  completed_at: Date;
}

const userResponseSchema = new Schema<IUserResponse>({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "user id required for ref"],
  },
  quiz_id: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
    required: [true, "Quiz id required for ref"],
  },
  responses: [
    {
      question_id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      selected_option_id: { type: Number, required: true },
    },
  ],
  score: { type: Number, required: true },
  completed_at: { type: Date, default: Date.now },
});

export const UserResponse = model<IUserResponse>(
  "UserResponse",
  userResponseSchema
);
