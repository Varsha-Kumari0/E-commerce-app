import React from 'react';
import './HomePage.css';
import banner1 from '../../assets/images/banner-1.jpg';
import banner2 from '../../assets/images/banner-2.jpg';
import banner3 from '../../assets/images/banner-3.jpg';
import {hat, coat, coesmetic, glasses, bag, dress, jacket, product1, product2, product3, product4, product5, product6, product7, product8, product9} from "./images"
import { Card } from '../../Components/Card/Card';

export const HomePage = () => {

  const products = [product9, product2, product3, product4, product5, product6, product7, product8, product1]
  const product_text = [
    "VERO MODA Women's Regular Fit Top",
    "VERO MODA Women's Slim Fit Jeans",
    "VERO MODA Women's Slim Fit T-Shirt",
    "VERO MODA Women's Slim Fit T-Shirt",
    "VERO MODA Men's Pajamas's",
    "VERO MODA Men's Shorts",
    "VERO MODA Women's Slim Fit Jeans",
    "VERO MODA Women's Slim Fit T-Shirt",
    "VERO MODA Women's Slim Fit Jeans"
  ]
  const product_heading = [
    "Stylish Tops",
    "Stylish Tops",
    "Stylish Tops",
    "Stylish Tops",
    "Stylish Pajama's",
    "Stylish Shorts",
    "Stylish Tops",
    "Stylish Tops",
    "Stylish Tops"
  ]
  return (
    <div className='p-4 w-full flex flex-col md:flex-row'>
      <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            <img src={banner1} alt="women's latest fashion sale" className="banner-img"/>
            <div className="banner-content">
              <p className="banner-subtitle">Trending item</p>
              <h2 className="banner-title">Women's latest fashion sale</h2>
              <p className="banner-text">
                starting at $ <b>20</b>.00
              </p>
              <a href="#" className="banner-btn">Shop now</a>
            </div>
          </div>
          <div className="slider-item">
            <img src={banner2} className="banner-img"/>
            <div className="banner-content">
              <p className="banner-subtitle">Trending accessories</p>
              <h2 className="banner-title">Modern sunglasses</h2>
              <p className="banner-text">
                starting at $ <b>15</b>.00
              </p>
              <a href="#" className="banner-btn">Shop now</a>
            </div>
          </div>
          <div className="slider-item">

            <img src={banner3}className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion summer sale</h2>

              <p className="banner-text">
                starting at $ <b>29</b>.99
              </p>

              <a href="#" className="banner-btn">Shop now</a>

            </div>

          </div>

        </div>

      </div>

    </div>


    <div className="category">

      <div className="category-container">

        <div className="category-item-container has-scrollbar">

          <div className="category-item">

            <div className="category-img-box">
              <img src={dress} alt="dress &amp; frock" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Dress &amp; frock</h3>

                <p className="category-item-amount">(53)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src={hat} alt="winter wear" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Winter wear</h3>

                <p className="category-item-amount">(58)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src={glasses} alt="glasses &amp; lens" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Glasses &amp; lens</h3>

                <p className="category-item-amount">(68)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>


          <div className="category-item">

            <div className="category-img-box">
              <img src={jacket} alt="jacket" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Jacket</h3>

                <p className="category-item-amount">(16)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src={hat} alt="hat &amp; caps" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Hat &amp; caps</h3>

                <p className="category-item-amount">(39)</p>
              </div>

              <a href="#" className="category-btn">Show all</a>

            </div>

          </div>

        </div>

      </div>

    </div>

    <div className='card-container'>
    {products.map((product, index)=>(
      <Card imgURL={product} heading={product_heading[index]} text={product_text[index]} />
    ))}
    </div>
    </div>
  )
}