import React from 'react';
import Banner from '../Banner/Banner';
import CausesHome from '../CausesHome/CausesHome';
import FeaturedCausesHome from '../FeaturedCausesHome/FeaturedCausesHome';
import TeamWork from '../TeamWork/TeamWork';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CausesHome></CausesHome>
            <TeamWork></TeamWork>
            <FeaturedCausesHome></FeaturedCausesHome>
        </div>
    );
};

export default Home;