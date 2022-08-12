import React from 'react';

import { Menu } from 'antd';

function AppHeader() {
    const menuItems = [
        {
            label: `Home`,
            key: 'home',
        },
        {
            label: `About`,
            key: 'about',
        },
        {
            label: `Features`,
            key: 'features',
        },
        {
            label: `How it works`,
            key: 'howitworks',
        },
        {
            label: `FAQ`,
            key: 'faq',
        },
        {
            label: `Pricing`,
            key: 'pricing',
        },
        {
            label: `Contact`,
            key: 'contact',
        },
    ];
    return (
        <div className='container-fluid'>
            <div className='header'>
                <div className='logo'>
                    <i className='fas fa-bolt'></i>
                    <a href='http://www.google.com'>Tech</a>
                </div>
                <Menu
                    mode='horizontal'
                    defaultSelectedKeys={['home']}
                    items={menuItems}
                />
            </div>
        </div>
    );
}

export default AppHeader;
