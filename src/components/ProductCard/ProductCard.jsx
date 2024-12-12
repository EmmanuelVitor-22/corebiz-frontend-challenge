import React from 'react';
import './productCard.scss';
import starFull from '../../assets/icons/star-full.svg';
import starVoid from '../../assets/icons/star-void.svg';

const ProductCard = ({ imageUrl, title, rating, price, originalPrice, installments, productId, onAddToCart }) => {
    
  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <div className="product-card">
      {hasDiscount && (
        <div className="product-card__discount-flag">
          <span>OFF</span>
        </div>
      )}

      <img
        className="product-card__image"
        src={imageUrl}
        alt={title}
      />

      <div className="product-card__info">
        <h2 className="product-card__title">{title}</h2>

        <div className="product-card__rating">
          {[...Array(5)].map((_star, index) => (
            <img
              key={index}
              src={index < rating ? starFull : starVoid}
              alt={`${index < rating ? 'Estrela cheia' : 'Estrela vazia'} ${index + 1}`}
              className="product-card__star-icon"
            />
          ))}
        </div>

        {hasDiscount && (
          <p className="product-card__price--original">
            {`de: ${formatPrice(originalPrice)}`}
          </p>
        )}

        <p className="product-card__price">
          por: {formatPrice(price)}
        </p>

        <p className="product-card__installments">
          {installments}
        </p>

        <button
          className="product-card__btn"
          onClick={() => onAddToCart({ productId, title, price })}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

const formatPrice = (price) => `R$ ${(price / 100).toFixed(2)}`;

export default ProductCard;