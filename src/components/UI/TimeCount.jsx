import React from 'react';
import { Container , Row , Col } from 'reactstrap';
import Clock from './Clock';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
// import counterImg from "./images/counter-timer-img.png";

const TimeCount = () => {
  return (
    <section className="timer__count">
    <Container>
      <Row>
        <Col lg="6" md="6">

          <div className="clock__top-content">
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
          </div>
          <Clock/>
          <motion.button whileTap={{sale:1.2}} className="buy__btn store__btn">
            <Link to ="shop">Visit Store</Link>
          </motion.button>
        </Col>
        <Col lg="6" md="6" className='text-end'>
          <img src="./images/counter-timer-img.png" alt=""/>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default TimeCount