import { Schema, model, Document } from "mongoose";

interface IOption {
  option_id: number;
  option_text: string;
}

// define the option schema for each MCQ's

const optionsSchema = new Schema<IOption>({
  option_id: {
    type: Number,
    required: [true, "option id is required"],
  },
  option_text: {
    type: String,
    require: [true, "option string is required"],
  },
});

interface IQuestion {
  question_text: string;
  options: IOption[];
  correct_option_id: number;
}

const questionSchema = new Schema<IQuestion>({
  question_text: {
    type: String,
    required: [true, "Question text is required"],
  },
  options: [optionsSchema],
  correct_option_id: {
    type: Number,
    required: [true, "correct option id is required"],
  },
});

export interface IQuiz extends Document {
  quiz_name: string;
  questions: IQuestion[];
}

const quizSchema = new Schema<IQuiz>({
  quiz_name: { type: String, required: [true, "Quiz name is required"] },
  questions: [questionSchema],
});

export const Quiz = model<IQuiz>("Quiz", quizSchema);

/*
{
  "_id": ObjectId("..."),
  "quiz_name": "Prophet Seerah Quiz",
  "questions": [
    {
      "question_text": "Who was the first person to embrace Islam?",
      "options": [
        { "option_id": 1, "option_text": "Abu Bakr" },
        { "option_id": 2, "option_text": "Khadijah" },
        { "option_id": 3, "option_text": "Ali" },
        { "option_id": 4, "option_text": "Umar" }
      ],
      "correct_option_id": 2
    },
    {
      "question_text": "Where was the Prophet Muhammad (PBUH) born?",
      "options": [
        { "option_id": 1, "option_text": "Mecca" },
        { "option_id": 2, "option_text": "Medina" },
        { "option_id": 3, "option_text": "Jerusalem" },
        { "option_id": 4, "option_text": "Taif" }
      ],
      "correct_option_id": 1
    }
  ]
}
*/
