import CreateCourseForm from '@/components/courses/CreateCourseForm'
import { db } from '@/lib/db'
import React from 'react'

const CreateCoursePage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name:"asc"
    },
    include:{
      subCategories: true
    }
  })
  return (
    <div><CreateCourseForm categories={categories}/></div>
  )
}

export default CreateCoursePage