"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title is required and minimum 2 characters"
  }),
  categoryId: z.string().min(1, {
    message: "Category is required"
  }),
    subCategoryId: z.string().min(1, {
        message: "Subcategory is required"
    }),
});

const CreateCourseForm = () => {
  return <div>CreateCourseForm</div>;
};

export default CreateCourseForm;
