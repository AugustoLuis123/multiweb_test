import { headerLogo } from '../assets/images';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="padding-x py-5 relative z-30 w-full bg-dark-gray" >
      <nav className="flex justify-between items-center max-container">
        <Link to="/" >
          <img src={headerLogo}
          alt="Logo"
          width={30}
          height={30}

          />

          
        </Link>

        <ul className="flex-1 flex justify-center items-center gap-16 max-md:hidden">

            <li>
              <Link className="font-nunito leading-normal text-lg font-bold text-white hover:text-hero2" 
                  to="/">Home</Link>
            </li>
            <li>
              <Link className="font-nunito leading-normal text-lg font-bold text-white hover:text-hero2" 
                  to="/marketplace">Marketplace</Link>
            </li>

        </ul>
      </nav>
    </header>
  )
}

export default Nav