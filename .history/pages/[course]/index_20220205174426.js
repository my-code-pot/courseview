import React from 'react';
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    const { course } = router.query;
  return <div>
      You are in page {course}
  </div>;
};

export asy

export default index;
