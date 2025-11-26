import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <header className='header'>
      <NavLink
        to="/"
        className="font-bold text-2xl text-blue-600 hover:text-red-800"
        
      >
        JSP
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className= {({ isActive  }) => isActive ? "text-blue-600 " : "text-black hover:text-pink-500" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black hover:text-purple-600"}>
          Projects
        </NavLink>
       
      </nav>
    </header>
  );
};

export default Navbar;
