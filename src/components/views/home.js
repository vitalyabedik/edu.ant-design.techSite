import React from 'react';

import AppHero from '../home/hero';
import AppAbout from '../home/about';
import AppFeature from '../home/feature';

function AppHome() {
    return (
        <div className='main'>
            <AppHero />
            <AppAbout />
            <AppFeature />
        </div>
    );
}

export default AppHome;
