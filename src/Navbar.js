import React, { useState } from 'react'; 



const Navbar = () => {
    let navbar = document.querySelector('.links');
    let menubar = document.querySelector('.menubtn');
    
    const [menu, setSidebar] = useState(false);

    const showmenu = () => setSidebar(!menu) ;

    return (
        <section className="nav">
            <h2>Nav<span className='head'>Bar ++</span></h2>
            <div className={menu ? 'links active' : 'links'}>
                <a href="#" className='active'>Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
                <a href="#"> Follow ++</a>
            </div>
            <div onClick={showmenu} className="menubtn">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </section>

    );
}
 
export default Navbar;