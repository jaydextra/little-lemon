import React from 'react';
import '../styles/Highlights.css';

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>This weeks specials!</h2>
        <button className="online-menu-btn" aria-label="On Click">Online Menu</button>
      </div>
      <div className="highlights-container">
        <article className="dish-card">
          <div className="dish-image-placeholder" aria-label="Dish image placeholder">Image</div>
          <h3 className="dish-name">Greek salad</h3>
          <p className="dish-price">$12.99</p>
          <p className="dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <p className="order-delivery">Order a delivery ➤</p>
        </article>
        <article className="dish-card">
          <div className="dish-image-placeholder" aria-label="Dish image placeholder">Image</div>
          <h3 className="dish-name">Bruchetta</h3>
          <p className="dish-price">$5.99</p>
          <p className="dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <p className="order-delivery">Order a delivery ➤</p>
        </article>
        <article className="dish-card">
          <div className="dish-image-placeholder" aria-label="Dish image placeholder">Image</div>
          <h3 className="dish-name">Lemon Dessert</h3>
          <p className="dish-price">$5.00</p>
          <p className="dish-description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <p className="order-delivery">Order a delivery ➤</p>
        </article>
      </div>
    </section>
  );
}

export default Highlights;

