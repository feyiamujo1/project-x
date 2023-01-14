import Bet9ja from '../../../src/assets/images/bet9ja.png'
import BioOil from '../../../src/assets/images/bio_oil.png'
import Chivas from '../../../src/assets/images/chivas.png'
import Cocacola from '../../../src/assets/images/cocacola.png'
import CreditDirect from '../../../src/assets/images/credit_direct.png'
import EcoBank from '../../../src/assets/images/ecobank.png'
import FriesLand from '../../../src/assets/images/friesland.png'
import Guiness from '../../../src/assets/images/guiness.png'
import HenryMontego from '../../../src/assets/images/henrymontego.png'
import Jameson from '../../../src/assets/images/jameson.png'
import Jumia from '../../../src/assets/images/jumia.png'
import Konga from '../../../src/assets/images/konga.png'
import Kuda from '../../../src/assets/images/kuda.png'
import LifeMate from '../../../src/assets/images/lifemate.png'
import Martel from '../../../src/assets/images/martel.png'
import MTN from '../../../src/assets/images/mtn.png'
import NigerianBrewery from '../../../src/assets/images/nigerian_brewries.png'
import PeakMilk from '../../../src/assets/images/peakmilk.png'
import PowerOil from '../../../src/assets/images/poweroil.png'
import Stanbic from '../../../src/assets/images/stanbic.png'
import Unilever from '../../../src/assets/images/unilever.png'
import Vento from '../../../src/assets/images/vento.png'

const Partners = () => {
  const SliderImages = [
    {id: 1, logo:Bet9ja, alt_text:"Bet9ja logo"},
    {id: 2, logo:BioOil, alt_text:"BioOil logo"},
    {id: 3, logo:Chivas, alt_text:"Chivas logo"},
    {id: 4, logo:Cocacola, alt_text:"Cocacola logo"},
    {id: 5, logo:CreditDirect, alt_text:"CreditDirect logo"},
    {id: 6, logo:EcoBank, alt_text:"EcoBank logo"},
    {id: 7, logo:FriesLand, alt_text:"FriesLand logo"},
    {id: 8, logo:Guiness, alt_text:"Guiness logo"},
    {id: 9, logo:HenryMontego, alt_text:"HenryMontego logo"},
    {id: 10, logo:Jameson, alt_text:"Jameson logo"},
    {id: 11, logo:Jumia, alt_text:"Jumia logo"},
    {id: 12, logo:Konga, alt_text:"Konga logo"},
    {id: 13, logo:Kuda, alt_text:"Kuda logo"},
    {id: 14, logo:LifeMate, alt_text:"LifeMate logo"},
    {id: 15, logo:Martel, alt_text:"Martel logo"},
    {id: 16, logo:MTN, alt_text:"MTN logo"},
    {id: 17, logo:NigerianBrewery, alt_text:"NigerianBrewery logo"},
    {id: 18, logo:PeakMilk, alt_text:"PeakMilk logo"},
    {id: 19, logo:PowerOil, alt_text:"PowerOil logo"},
    {id: 20, logo:Stanbic, alt_text:"Stanbic logo"},
    {id: 21, logo:Unilever, alt_text:"Unilever logo"},
    {id: 22, logo:Vento, alt_text:"Vento logo"}
  ];

  return (
    <div className='goat'>
      <div className="m-scroll-image">
        <div className="m-scroll__title-image">
            <div className="marquee-image pl-5">
            {
              SliderImages.map((SliderImage) => {
                  return (
                      <div key={SliderImage.id} className='w-[220px] h-[220px] border-[0.01px] border-[#ACACAC80] rounded-full -m-2 flex flex-row justify-center items-center bg-white'>
                        <img className='w-7/12 h-[45px]' src={SliderImage.logo} alt={SliderImage.alt_text}/>
                      </div>
                  )
              })
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Partners