"use client"

import { useParams } from "next/navigation"
import Link from "next/link"

export default function CourseCategoryPage() {
  const params = useParams()
  const categoryId = params.categoryId as string

  // This would be replaced with actual data fetching in a real application
  const getCategoryName = (id: string) => {
    const categories = {
      "class-1-3": "Class 1 - 3",
      "class-4-8": "Class 4 - 8",
      "class-9-12": "Class 9 - 12",
      "under-graduate": "Under Graduate",
    }
    return categories[id as keyof typeof categories] || "Course Category"
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 md:px-6 lg:px-8">
      <Link href="/" className="text-[#F97316] hover:underline mb-6 inline-block">
        &larr; Back to all courses
      </Link>
      <h1 className="text-3xl font-bold mb-6">{getCategoryName(categoryId)} Courses</h1>
      <p>This page would display all courses for the {getCategoryName(categoryId)} category.</p>
    </div>
  )
}
