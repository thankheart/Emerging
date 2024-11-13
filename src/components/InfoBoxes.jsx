import React from 'react';
import InfoBox from './InfoBox';
import BenefitsBox from './boxes/BenefitsBox';
import ImplBox from './boxes/ImplBox';
import RecentRobotsBox from './boxes/RecentRobotsBox';
import RisksBox from './boxes/RisksBox';
import '../App.css';

function InfoBoxes(){
    return(
        <div className="info-boxes-container">
            <InfoBox title="Recent Robots">
                <RecentRobotsBox />
            </InfoBox>
            <InfoBox title="Implimentations">
                <ImplBox />
            </InfoBox>
            <InfoBox title="Benefits">
                <BenefitsBox />
            </InfoBox>
            <InfoBox title="Risks and Mitigations">
                <RisksBox />
            </InfoBox>
        </div>
    );

}

export default InfoBoxes;