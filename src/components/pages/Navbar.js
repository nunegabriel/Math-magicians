import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      {/* //         <div className='heading'>Math Magicians</div>
    //        Home
    //         Calculator</div>
    //    </div> */}
      <div className="heading"><Link to="/">Math Magicians</Link></div>
      <div className="nav-link"><Link to="/">Home</Link></div>
      <div className="nav-link-1"><Link to="/calculator">Calculator</Link></div>
      <div className="nav-link-1"><Link to="/quote">Quote</Link></div>

    </div>
  );
}

export default Navbar;
