'use client';

import { useSearchParams } from 'next/navigation';
import ClassCourse from '@/components/ClassCourse'; // adjust path if needed

export default function BoardPage() {
  const searchParams = useSearchParams();
  const selectedClass = searchParams.get('class');

  return (
    <div className="w-full">
      {selectedClass ? (
        <ClassCourse className={selectedClass} />
      ) : (
        <div className="max-w-3xl mx-auto py-20 px-4 text-center text-[#214586]">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <p>Please choose a valid class from the course selector.</p>
        </div>
      )}
    </div>
  );
}
