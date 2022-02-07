import React from 'react';
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    const { course } = router.query;
  return <div>
      This is the course page
  </div>;
};

export default index;
