import InfoBox from "./InfoBox";
import BenefitsBox from "./boxes/BenefitsBox";
import ImplBox from "./boxes/ImplBox";
import RecentRobotsBox from "./boxes/RecentRobotsBox";
import RisksBox from "./boxes/RisksBox";
import DomesticLabourBox from "./boxes/DomesticLabourBox";
import FutureBox from "@/components/boxes/FutureBox.tsx";

function InfoBoxes() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="grid grid-cols-3 gap-6 p-6">
            <InfoBox title="Domestic Labour" width="max-w-6xl">
                <DomesticLabourBox />
            </InfoBox>
            <InfoBox title="Recent Robots">
                <RecentRobotsBox />
            </InfoBox>
            <InfoBox title="Benefits">
                <BenefitsBox />
            </InfoBox>
            <InfoBox title="Implementations">
                <ImplBox />
            </InfoBox>
            <InfoBox title="Risks and Mitigations" width="max-w-7xl">
                <RisksBox />
            </InfoBox>
            <InfoBox title="Future Directions" width="max-w-6xl">
                <FutureBox />
            </InfoBox>
        </div>
        </div>
    );
}

export default InfoBoxes;
