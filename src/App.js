import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/common/header';
import AppHome from './components/views/home';
import AppFooter from './components/common/footer';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
    return (
        <Layout className='mainLayout'>
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <AppHome />
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    );
}

export default App;
