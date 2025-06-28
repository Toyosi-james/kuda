import React from 'react'
import Button from "../component/reusable/Button"
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <div className='flex justify-between px-16 py-3 items-center max-tablet:px-10'>
      <section className='flex text-purple-950 font-bold'>
      <Link to="/"> <img src="./kuda logo.png" alt="" className='w-30'/></Link>
       <div className='flex items-center gap-1 max-tablet:hidden'> <Link to="/Personal"><nav className='ml-15 text-xs'>Personal</nav> </Link ><IoMdArrowDropdown size={20} /></div>
         <div className='flex items-center gap-1 max-tablet:hidden'><Link to="/Business"><nav className='ml-10 text-xs'>Business</nav></Link> <IoMdArrowDropdown size={20}/></div>
          <div className='flex items-center gap-1 max-tablet:hidden'><Link to="Company"><nav className='ml-10 text-xs'>Company</nav></Link><IoMdArrowDropdown size={20}/></div>
           <div className='flex items-center gap-1 max-tablet:hidden'><Link to="/Help"><nav className='ml-10 text-xs'>Help</nav> </Link><IoMdArrowDropdown size={20}/></div>
      </section>
      <section className='flex gap-7 items-center font-bold max-tablet:hidden'>
     <Button title="Sign In" textColor="#3c0366" size="13px" />
     <Button title="Join Kuda" bgColor="#3c0366" textColor="white" pad="12px 27px" radius="10px"/>
      </section>
      <section className=' hidden max-tablet:block'>
     <GiHamburgerMenu size={35}/>
      </section>
    </div>
  )
}

export default Header
