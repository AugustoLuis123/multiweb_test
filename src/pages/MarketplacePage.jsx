import Items from "../sections/Items"
import Shop from "../sections/Shop"

const MarketplacePage = () => {
  return (
    <>
    <main className="relative overflow-hidden">
    <Shop/>
    <hr className="border-neutral-800 border-2 rounded-full mx-16 md:mx-24 my-2"/>
    <Items/>
    </main>
    </>
  )
}

export default MarketplacePage