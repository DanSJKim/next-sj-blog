import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/"><a>노드</a></Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile"><a>프로필</a></Link>
          </Menu.Item>
          <Menu.Item>
            <SearchInput enterButton style={{ verticalAlign: 'middle' }}/>
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup"><a>회원가입</a></Link>
          </Menu.Item>
        </Menu>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {isLoggedIn ? <UserProfile/> : <LoginForm/>}
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            <a href="https://www.kurly.com" target="_blank" rel="noreferrer noopener">Kurly</a>
          </Col>
        </Row>
      </div>
    );
}

AppLayout.propTypes = {
    // children의 타입은 node. 화면에 그릴 수 있는 모든것들이 node다. 
    // (return 안에 들어가는 모든 것들)
    children: PropTypes.node.isRequired
};

export default AppLayout;