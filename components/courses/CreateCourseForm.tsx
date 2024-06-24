"use client"

import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const CreateCourseForm = () => {
  return (
    <div>CreateCourseForm</div>
  )
}

export default CreateCourseForm