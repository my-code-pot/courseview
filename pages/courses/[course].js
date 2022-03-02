import React from "react";
import { useRouter } from 'next/router';
import Comment from '../../components/Comment'
const course = () => {
  const router = useRouter();
  const { course } = router.query;
  return (
    <div>
    <Comment ></Comment>
    </div>
  );
};

export default course;