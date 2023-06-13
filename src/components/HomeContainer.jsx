import React from 'react'
import Delivery from '../Images/delivery.png'
import HeroBg from '../Images/heroBg.png'
import { heroData } from '../utils/data'




const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-green-300 px-2 py-1 rounded-full">
        <p className="text-base text-green-600 font-semibold">
          Bike Delivery
        </p>
        <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
        <img src={Delivery} className="w-full h-full object-contain" alt="delivery" />
        </div>
        </div>

        <p className="text-[2.5rem] lg:text-[3rem] font-bold tracking-wide text-headingColor">
          The Best Online Grocery Store
          <span className="text-green-600 text-[3rem] lg:text-[4rem]"> In Ghana</span>
          </p>
          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Your One-Stop Online Grocery Shop in Ghana: Fresh, Convenient, Delivered to Your Doorstep!
          </p>

        <button type="button" className="bg-gradient-to-br from-green-400 to-green-500 md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
            Order Now
            </button>

      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img src={HeroBg} className=" ml-auto h-420 w-full lg:w-auto lg:h-510" alt="hero-bg" />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 lg:px-5 gap-3 flex-wrap">
            {heroData && 
                heroData.map((n) =>(
                <div 
                key={n.id} 
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                >
                <img 
                src={n.imageSrc} 
                className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="thyme" />

                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                    {n.name}
                    </p>

                    <p className="text-[10px]  lg:text-sm text-lighttextGray font-semibold  my-1 lg:my-3">
                    {n.decp}
                    </p>

                    <p className="text-sm font-semibold text-headingColor">
                        <span className="text-xs text-green-500">Ghc</span>{n.price}
                    </p>
            </div>
            ))}
        </div>
      </div>
      
    </section>
  )
}

export default HomeContainer