import React from 'react';
import {useQuery} from "react-query";
import axios from "axios";
import { Container , Row , Col } from 'reactstrap';
import ProductsList from './ProductsList';
import TimeCount from './TimeCount';

const ProductsQuery = () => {

    async function fetchProducts() {
        const baseUrl ="http://localhost:3005/products";
        const { data } = await axios.get(baseUrl);
        return data;
        
      }
    
      const { data, error, isError, isLoading } = useQuery("products", fetchProducts);
      if (isLoading) {
        return <div>Loading...</div>;
      }
      if (isError) {
        return <div>Error! {error.message}</div>;
      }
    const trendingProducts = data.filter((item)=>item.category === 'chair');
    const bestSalesProducts = data.filter((item)=>item.category === 'sofa')
    const mobileProducts = data.filter((item)=>item.category === 'mobile')
    const wirelessProducts = data.filter((item)=>item.category === 'wireless')
    const popularProducts = data.filter((item)=>item.category === 'watch')
    




  return (
    <div><section className="trending__products">
    <Container>
      <Row>
        <Col lg="12" className="text-center">
          <h2 className='section__title'>Trending products</h2>
        </Col>
        <ProductsList data = {trendingProducts}/>
      </Row>
    </Container>
  </section>
  <section className='best__sales'>
    <Container>
    <Row>
        <Col lg="12" className="text-center mb-5">
          <h2 className='section__title'>Best Sales</h2>
        </Col>
          <ProductsList data={bestSalesProducts}/>
      </Row>
    </Container>
  </section>
  {/* <section className="timer__count">
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
          <img src={counterImg} alt=""/>
        </Col>
      </Row>
    </Container>
  </section> */}
<TimeCount/>
  <section className="new__arrivals">
    <Container>
      <Row>
      <Col lg="12" className="text-center mb-5">
          <h2 className='section__title'>New Arrivals</h2>
        </Col>

          <ProductsList data = {mobileProducts}/>
          <ProductsList data = {wirelessProducts}/>
      </Row>
    </Container>
  </section>

  <section className="popular__category">
  <Container>
      <Row>
      <Col lg="12" className="text-center mb-5">
          <h2 className='section__title'>popular in Category</h2>
        </Col>

          <ProductsList data = {popularProducts}/>
      </Row>
    </Container>
  </section></div>
  )
}

export default ProductsQuery