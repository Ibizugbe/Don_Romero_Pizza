import { FaPizzaSlice } from 'react-icons/fa';
import { IconContext } from "react-icons";

function Nav() {
    return ( 
        <header>
            <nav>
                <ul className='sm:ml-20 px-10'>
                    <div className='flex justify-between nav-div pb-3'>
                        <li className='flex'>
                            <IconContext.Provider value={{size: "20px"}}>
                                <FaPizzaSlice />
                            </ IconContext.Provider >
                            <span className='text-sm font-bold pl-3'>Pizzas</span>
                        </li>
                        <li className='flex'>
                            <IconContext.Provider value={{size: "20px"}}>
                                <FaPizzaSlice />
                            </ IconContext.Provider >
                            <span className='text-sm font-bold pl-3'>Pizzas</span>
                        </li>
                        <li className='flex'>
                            <IconContext.Provider value={{size: "20px"}}>
                                <FaPizzaSlice />
                            </ IconContext.Provider >
                            <span className='text-sm font-bold pl-3'>Pizzas</span>
                        </li>
                        <li className='flex'>
                            <IconContext.Provider value={{size: "20px"}}>
                                <FaPizzaSlice />
                            </ IconContext.Provider >
                            <span className='text-sm font-bold pl-3'>Pizzas</span>
                        </li>
                    </div>
                    
                </ul>
            </nav>
        </header>
     );
}

export default Nav;