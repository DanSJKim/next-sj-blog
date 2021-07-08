import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Signup = () => {
    return (
      <>
        <Head>
          <title>sign up</title>
        </Head>
        <AppLayout>
          <div>회원가입</div>
        </AppLayout>
      </>
    )
};

export default Signup;