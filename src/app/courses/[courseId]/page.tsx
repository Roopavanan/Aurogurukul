import { categories } from "@/data/courseData";
import { notFound } from "next/navigation";
import CourseList from "@/components/CourseList";
interface Props {
  params: {
    courseId: string;
  };
}

export default function CoursePage({ params }: Props) {
  const courseId = params.courseId;
  const baseClass = courseId.split("-").slice(0, -1).join("-");
  const filtered = categories.filter((cat) => cat.id.startsWith(baseClass));

  if (filtered.length === 0) return notFound();

  return (
    <CourseList baseClass={baseClass} courses={filtered} />
  );
}
