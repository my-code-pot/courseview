import React from 'react';
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    const { course } = router.query;
  return <div>
      You are in page {}
  </div>;
};

export default index;
