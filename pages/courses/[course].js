import React from "react";
import { useRouter } from 'next/router';
const course = () => {
  const router = useRouter();
  const { course } = router.query;
  return <div>This will be the {course} page</div>;
};

export default course;