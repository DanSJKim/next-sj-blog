import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/followList';

const Profile = () => {
    const followerList = [{ nickname: '승맨' }, { nickname: '오뚜켸' }, { nickname: '꽃두보'}]
    const followingList = [{ nickname: '승맨' }, { nickname: '오뚜켸' }, { nickname: '꽃두보'}]

    return (
      <>
        <Head>
          <title>my profile</title>
        </Head>
        <AppLayout>
          <NicknameEditForm />
          <FollowList header="Following" data={followingList}/>
          <FollowList header="Follower" data={followerList}/>
        </AppLayout>
      </>
    )

};

export default Profile;