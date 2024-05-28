import { digital, shirt, vinyl, cap, hoodies } from "../assets/images"


const Shop = () => {
  return (
    <section className="py-10 px-10 bg-white max-container-no-margin">

      <div>
        <h2 className="lg:px-20 pb-4 text-4xl font-nunito font-bold text-black">XO Shop</h2>
      </div>
    
      <div id className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
				<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src={vinyl} alt="vinyl" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-nunito font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Vinyl / CD</h3>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-2">
				<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src={cap} alt="cap" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-nunito font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Cap</h3>
				</div>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src={shirt} alt="shirt" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-nunito font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Shirt</h3>
					</div>
					<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src={digital} alt="albums" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-nunito font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Digital Album</h3>
					</div>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
				<div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src={hoodies} alt="hoodies" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-nunito font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Hoodies</h3>
				</div>
			</div>
		</div>

    </section>

  )
}

export default Shop