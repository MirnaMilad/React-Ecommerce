import React , {useRef , useEffect} from 'react';
import { NavLink} from "react-router-dom"
import './header.css';
import { useSelector } from "react-redux";
// import logo from '../../assets/images/eco-logo.png'
// import userIcon from "./images/user-icon.png";

import {motion} from 'framer-motion'

import { Container , Row} from 'reactstrap';

const nav__links=[
  {
    path : "home",
    display:"Home"
  },
  {
    path : "about",
    display:"About"
  },
  {
    path : "cart",
    display:"Cart"
  }
]
const Header = () => {
  
const {count} = useSelector((state)=>state.counter)

  const headerRef = useRef(null)

  const stickyHeaderFunc =()=>{
    window.addEventListener('scroll' , ()=>{
        headerRef.current.classList.add('sticky__header')
      }
    )
    }
  // }

  useEffect(()=>{
    stickyHeaderFunc()
    return()=>window.removeEventListener('scroll' , stickyHeaderFunc)
  })
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src="./images/eco-logo.png" alt="logo"/>
              <div>
                <h1>Mirna</h1>
              </div>
            </div>

              <div className="navigation">
                <ul className="menu">
                  {nav__links.map((item , index)=>(
                    <li className='nav__item' key={index}>
                      <NavLink to={item.path} className={(navClass)=>navClass.isActive? 'nav__active':''}>
                        {item.display}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
                <div className="nav__icons">

                  {/* <span className="fav__icon"><i className="ri-heart-line"></i>
                  <span className="badge">1</span> */}
                  {/* </span> */}
                  <span className ="cart__icon"><i className="ri-shopping-bag-line"></i>
                  <span className="badge">{count}</span>
                  </span>
                </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header