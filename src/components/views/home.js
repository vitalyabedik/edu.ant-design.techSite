import React from 'react';

import AppHero from '../home/hero';
import AppAbout from '../home/about';
import AppFeature from '../home/feature';
import AppWorks from '../home/works';

function AppHome() {
    return (
        <div className='main'>
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWorks />
        </div>
    );
}

export default AppHome;
