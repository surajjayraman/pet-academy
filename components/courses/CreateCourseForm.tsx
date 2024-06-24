"use client";

import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title is required and minimum 2 characters"
  }),
  categoryId: z.string().min(1, {
    message: "Category is required"
  })
});

const CreateCourseForm = () => {
  return <div>CreateCourseForm</div>;
};

export default CreateCourseForm;
