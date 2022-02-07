import React from 'react';
import { useRouter } from 'next/router';
import Nav

const index = () => {
    const router = useRouter();
    const { course } = router.query;
  return <div>
      You are in page {course}
  </div>;
};

export async function getStaticProps() {

}

export default index;
