import React, { useEffect, useState } from 'react';
import './Search.css';
import PromotionCard from 'components/Promotion/Card/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/promotions?_embed=comments')
        .then((response) => {
          setPromotions(response.data);
        });
    },[]);

    return(
      <div className="promotion-search">
        <header className="promotion-search__header">
          <h1>Promo Show</h1>
          <Link to="/create">Nova Promoção</Link>
        </header>
      
          <input className="promotion-search__input" type="search" name="" id="" />

      {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
    </div>
    )
}

export default PromotionSearch