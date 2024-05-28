import { dawnfm, afterhours, starboycd, xohoodie, vinylitem } from '../assets/images';

const Items = () => {
  return (
    <section className="py-10 px-10 bg-white max-container-no-margin ">
      <div>
        <h2 className="lg:px-20 pb-4 text-4xl font-nunito font-bold text-black">Items</h2>
      </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 lg:px-24">
            <div className="shadow-xl rounded-xl bg-stone-100 border-neutral-400 border p-4 text-center justify-center cursor-pointer hover:scale-105 transition-transform duration-400 ease-in">
                <img src={dawnfm} alt="dawnfm" className="rounded-md w-full h-auto object-contain"/>
                <p className="text-black font-poppins font-bold text-base md:text-lg pt-4 text-wrap">DAWN FM DIGITAL ALBUM</p>
                <p className="text-neutral-900 font-poppins font-semibold text-sm md:text-base py-1 text-wrap">$14.00</p>  
            </div>
            <div className="shadow-xl rounded-xl bg-stone-100 border-neutral-400 border p-4 text-center justify-center cursor-pointer hover:scale-105 transition-transform duration-400 ease-in">
                <img src={afterhours} alt="afterhours" className="rounded-md w-full h-auto object-contain"/>
                <p className="text-black font-poppins font-bold text-base md:text-lg pt-4 text-wrap">AFTER HOURS DIGITAL ALBUM</p>
                <p className="text-neutral-900 font-poppins font-semibold text-sm md:text-base py-1 text-wrap">$14.00</p>  
            </div>
            <div className="shadow-xl rounded-xl bg-stone-100 border-neutral-400 border p-4 text-center justify-center cursor-pointer hover:scale-105 transition-transform duration-400 ease-in">
                <img src={starboycd} alt="starboycd" className="rounded-md w-full h-auto object-contain"/>
                <p className="text-black font-poppins font-bold text-base md:text-lg pt-4 text-wrap">STARBOY DELUXE CD</p>
                <p className="text-neutral-900 font-poppins font-semibold text-sm md:text-base py-1 text-wrap">$18.00</p>  
            </div>
            <div className="shadow-xl rounded-xl bg-stone-100 border-neutral-400 border p-4 text-center justify-center cursor-pointer hover:scale-105 transition-transform duration-400 ease-in">
                <img src={xohoodie} alt="xohoodie" className="rounded-md w-full h-auto object-contain"/>
                <p className="text-black font-poppins font-bold text-base md:text-lg pt-4 text-wrap">XO CLASSIC LOGO LONGSLEEVE</p>
                <p className="text-neutral-900 font-poppins font-semibold text-sm md:text-base py-1 text-wrap">$60.00</p>  
            </div>
            <div className="shadow-xl rounded-xl bg-stone-100 border-neutral-400 border p-4 text-center justify-center cursor-pointer hover:scale-105 transition-transform duration-400 ease-in">
                <img src={vinylitem} alt="vinylitem" className="rounded-md w-full h-auto object-contain"/>
                <p className="text-black font-poppins font-bold text-base md:text-lg pt-4 text-wrap">ONE OF THE GIRLS + POPULAR 7” VINYL</p>
                <p className="text-neutral-900 font-poppins font-semibold text-sm md:text-base py-1 text-wrap">$14.00</p>  
            </div>
      </div>
    

    </section>
  )
}

export default Items