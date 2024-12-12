import React from 'react';
import Header from '../../components/Header/Header';
import ProductCarroussel from '../../components/Carroussel/ProductCarroussel/ProductCarroussel';
import { CartProvider } from '../../contexts/CartContext';
import './style.css';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <CartProvider>
      <div>
        <Header />
        <ProductCarroussel titleShowcase='Mais Vendidos'/>
        <NewsLetter titleNewsLetter="Participe de nossas news com promoções e novidades!"/>
        <Footer/>
      </div>
    </CartProvider>
  );
}

export default Home;
