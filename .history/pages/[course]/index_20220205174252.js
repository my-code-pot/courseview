import React from 'react';
import { useRouter } from 'next/router';

const index = (props) => {
    const router = useRouter();
    const { course } = router.query;
  return <div>
      You are in page {course}
  </div>;
};

export default index;
