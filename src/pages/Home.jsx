import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import "../styles/home.css"
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
// import products from "../assets/data/products"
import { Container , Row , Col } from 'reactstrap';
import Services from '../services/Services';
import ProductsQuery from '../components/UI/ProductsQuery';



const Home = () => {
  const year = new Date().getFullYear();

  return (
    <Helmet title ={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make your interior more minimalistic & modern</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quae quam rerum at sed sit tenetur, necessitatibus natus? Ut, dolore.</p>

                <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to="/shop">Shop Now</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src="./images/hero-img.png" alt=""/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services/>

      <ProductsQuery/>
    </Helmet>
  )
}

export default Home
