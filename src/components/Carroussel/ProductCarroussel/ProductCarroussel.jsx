import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './productCarroussel.scss';
import ProductCard from '../../ProductCard/ProductCard';
import { getProduct } from '../../../services/api';
import { useCart } from '../../../contexts/CartContext';
import leftArrow from '../../../assets/icons/left-arrow.svg';
import rightArrow from '../../../assets/icons/right-arrow.svg';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProduct();
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    fetchProducts();
  }, []);
  return products;
};

const ProductCarroussel = ({ titleShowcase }) => {
  const products = useProducts();
  const { addCart } = useCart(); 

  const handleAddToCart = (product) => {
    addCart(product); 
  };

  const settingsShowProductCarroussel = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    prevArrow: <img src={leftArrow} alt="seta para esquerda" />,
    nextArrow: <img src={rightArrow} alt="seta para direita" />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  return (
    <section className="product-carousel">
      <header className="product-carousel__titleShowcase">
        <h2>{titleShowcase}</h2>
        <hr className="product-carousel__divider" />
      </header>
      <Slider {...settingsShowProductCarroussel} className="product-carousel__slider">
        {products.map((product) => (
          <div key={product.productId} className="product-carousel__slide">
            <ProductCard
              imageUrl={product.imageUrl}
              title={product.productName}
              rating={product.stars}
              price={product.price}
              originalPrice={product.listPrice}
              installments={formatInstallments(product.installments)}
              onAddToCart={() => handleAddToCart(product)}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

const formatInstallments = (installments) =>
  installments?.map(formatInstallment).join(', ');

const formatInstallment = (installment) =>
  `${installment.quantity}x de ${formatPrice(installment.value)}`;

const formatPrice = (price) => `R$ ${(price / 100).toFixed(2)}`;

export default ProductCarroussel;