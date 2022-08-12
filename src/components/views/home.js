import React from 'react';

import AppHero from '../home/hero';
import AppAbout from '../home/about';
import AppFeature from '../home/feature';
import AppWorks from '../home/works';
import AppFaq from '../home/faq';

function AppHome() {
    return (
        <div className='main'>
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWorks />
            <AppFaq />
        </div>
    );
}

export default AppHome;
