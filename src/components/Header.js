import React from 'react'

const Header = () => {
    const selectElement=(element)=>document.querySelector(element);
selectElement('.mobile-menu').addEventListener('click',()=>{
    console.log('sjakhsahdj');

selectElement('header').classList.toggle('active');

});
  return (
      <header>
    <div>
          <div className="container">
            <nav className="nav">
                <ul className="nav-list nav-list-mobile">
                    <div className="mobile-menu">
                        <span className="line line-top"></span>
                        <span className="line line-bottom"></span>
                    </div>
                    <li className="nav-item">
                        <a href="index.html" className="nav-link nav-link-apple"></a>
                    </li>
                    
                    <li className="nav-item ">
                        <a href="#" className="nav-link nav-link-bag"></a>
                    </li>
                </ul>

                <ul className="nav-list nav-list-larger">
                    <li className="nav-item nav-item-hidden">
                        <a href="index.html" className="nav-link nav-link-apple"></a>
                    </li>

                    <li className="nav-item">
                        <a href="" className="nav-link" >Store</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Mac</a>
                    </li>
                    <li className="nav-item">
                        <a href=""  className="nav-link">iPad</a>
                    </li>
                    <li className="nav-item">
                        <a href=""  className="nav-link">iPhone</a>
                    </li>
                    <li className="nav-item">
                        <a href=""  className="nav-link">Watch</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">TV</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Music</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Support</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-link-search"></a>
                    </li>
                    <li className="nav-item nav-item-hidden">
                        <a href="#" className="nav-link nav-link-bag"></a>
                    </li>
                </ul>



            </nav>
        </div>
    </div>
    </header>
  )
}

export default Header