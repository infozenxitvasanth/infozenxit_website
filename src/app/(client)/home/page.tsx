
import HomeAboutSection from '@/app/components/home/HomeAboutSection'
import HomeSeactionOne from '@/app/components/home/HomeSeactionOne'
import HomeSeactionThree from '@/app/components/home/HomeSeactionThree'
import HomeSmallBusinessRoadMap from '@/app/components/home/HomeSmallBusinessRoadMap'
import InternShipOfferingSection from '@/app/components/home/InternShipOfferingSection'


const Homepage = () => {

    return (
        <div>
            <HomeSeactionOne />

            <HomeAboutSection />
            <HomeSmallBusinessRoadMap />
            <HomeSeactionThree />
            <InternShipOfferingSection />
        </div>
    )
}

export default Homepage