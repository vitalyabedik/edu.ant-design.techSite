import React from 'react';

import { Menu, Anchor } from 'antd';
const { Link } = Anchor;

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
                <Anchor targetOffset='65'>
                    <Link href='#hero' title='Home' />
                    <Link href='#about' title='About' />
                    <Link href='#feature' title='Features' />
                    <Link href='#works' title='How it works' />
                    <Link href='#faq' title='FAQ' />
                    <Link href='#pricing' title='Pricing' />
                    <Link href='#contact' title='Contact' />
                </Anchor>
            </div>
        </div>
    );
}

export default AppHeader;
