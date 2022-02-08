import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

const index = () => {
    const router = useRouter();
    const { department } = router.query;
  return <div>
      You are in page {department}
  </div>;
};



export default index;
