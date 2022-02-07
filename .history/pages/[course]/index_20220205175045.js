import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

const index = () => {
    const router = useRouter();
    const { course } = router.query;
  return <div>
      <Navbar />
      You are in page {course}
  </div>;
};

export async function getStaticPath() {
    pages = ["34", "35", "36"];
    return pages.map(item => ({
        params: {
            course: item
        },
        
    }
    ));
}

export default index;
