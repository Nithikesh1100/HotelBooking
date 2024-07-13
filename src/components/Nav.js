// import React from 'react';
// import '../styles/Nav.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {

  
  
//   return (
//     <div className='nav-container'>
//       <div className='nav-items'>
//         <Link to="/">Home</Link>
//         <Link to="/hotels">Hotels</Link>
//         <Link to="/contact">Contact Us</Link>
//         <Link to="/about">About Us</Link>
//       </div>
//       <div className='authentication'>
//       <Link to="/signup">Sign Up</Link>
//       <Link to="/signin">Sign In</Link>
//       </div>

//     </div>
//   )
// }

// export default Navbar;

import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { signout } from '../Reducers/authSlice';

const Navbar = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  
  return (
    <div className='nav-container'>
      <div className='nav-items'>
        <Link to="/">Home</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className='authentication'>
      {isAuthenticated ? (
          <><Link to="/" className="logout" onClick={() => dispatch(signout())}>Logout</Link></>
        ) : (
          <>
            <><Link to="/signup">SignUp</Link></>
            <><Link to="/signin">SignIn</Link></>
          </>
        )}
      </div>

    </div>
  )
}

export default Navbar;

