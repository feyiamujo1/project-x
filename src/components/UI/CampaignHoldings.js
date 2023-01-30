import GantryImage from "../../../src/assets/images/Gantry.png"
import UnipolesImage from "../../../src/assets/images/Unipoles.png"
import BusShelterImage from "../../../src/assets/images/Bus_Shelter.png"
import LedImage from "../../../src/assets/images/LED.png"
import MuralImage from "../../../src/assets/images/mural.png"
import LampostImage from "../../../src/assets/images/Lampoles.png"
import BridgePanelImage from "../../../src/assets/images/bridge.png"
import FenceDrapeImage from "../../../src/assets/images/fence_drape.png"
import WallWrapImage from "../../../src/assets/images/wallwrap.png"
import WhiteLogo from "../../../src/assets/images/logo_white.png"
import 'aos/dist/aos.css';

const CampaignHoldings = () => {
    const Campaigns = [
      { id: 0, name: "Gantry", image: GantryImage, vacant: 13, deployed: 50 },
      { id: 1, name: "Unipoles", image: UnipolesImage, vacant: 54, deployed: 95 },
      { id: 2, name: "Bus Shelter", image: BusShelterImage, vacant: 32, deployed: 11 },
      { id: 3, name: "LED", image: LedImage, vacant: 2, deployed: 4 },
      { id: 4, name: "Murals", image: MuralImage, vacant: 0, deployed: 10 },
      { id: 5, name: "Lampost", image: LampostImage, vacant: 98, deployed: 146 },
      { id: 6, name: "Bridge Panels", image: BridgePanelImage, vacant: 20, deployed: 32 },
      { id: 7, name: "Wallwrap", image: WallWrapImage, vacant: 54, deployed: 4 },
      { id: 8, name: "Fence Drape", image: FenceDrapeImage, vacant: 0, deployed: 17 },
    ]

  return (
    <div className="w-full space-y-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Campaigns.map((campaign, index) => 
        (
          <div 
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay={ window.innerWidth < 768? "0": `${100*index}`}
            className="text-white p-6 border border-custom-white rounded-2xl space-y-6 group cursor-pointer active:bg-custom-blue md:hover:bg-custom-blue group" key={campaign.id}> {/* confirm style first campaign.id === 8 ? campaignStyle + " sm:col-span-2 md:col-span-1" : campaignStyle*/}
            <div className="mx-auto w-fit">
              <img className="w-[70px] h-[65px]" src={campaign.image} alt="" />
            </div>
            <h2 className="font-medium mx-auto w-fit text-xl ">{campaign.name}</h2>
            <div className="space-y-4">
              <div className="flex flex-row items-center">
                <div className="">
                  { 
                    campaign.vacant > 0 &&
                    <div>
                      <div className="w-3 h-3 bg-notification-green rounded-full animate-ping absolute"> </div>
                      <div className="w-3 h-3 bg-notification-green rounded-full relative"></div>
                    </div>
                  }
                  {
                    campaign.vacant === 0 &&
                    <div>
                      <div className="w-3 h-3 bg-notification-red rounded-full animate-ping absolute"> </div>
                      <div className="w-3 h-3 bg-notification-red rounded-full relative"></div>
                    </div>
                  }
                  
                </div>
                <div className="w-full text-center">
                  <p className="group-active:text-black md:group-hover:text-black group-hover:font-bold"><span className="font-bold">{campaign.vacant}</span> Available</p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="">
                  <div className="w-3 h-3 bg-notification-white group-hover:bg-white rounded-full relative"></div>
                </div>
                <div className="w-full text-center">
                  <p className="text-notification-white group-active:text-black md:group-hover:text-black group-hover:font-bold"><span className="font-bold">{campaign.deployed}</span> Deployed</p>
                </div>
              </div>
            </div>
          </div>
        )
        )}
        <div 
          data-aos="fade-up" 
          data-aos-duration="1500"
          data-aos-delay="300"
          className="space-y-7 md:col-span-3 p-6 border border-custom-white rounded-2xl group active:bg-custom-blue md:hover:bg-custom-blue cursor-pointer"> {/*sm:col-span-2 */}
          <div className="">
              <img className="mx-auto" src={WhiteLogo} alt="" />
          </div>
          <p className="text-white font-semibold text-center text-xl group-active:text-black md:group-hover:text-black">Iconic Concept</p>
          <p className="text-white font-semibold text-center text-base group-active:text-black md:group-hover:text-black">On Request</p>
        </div>
      </div>
      
    </div>
  )
}

export default CampaignHoldings