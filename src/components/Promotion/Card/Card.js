import React from "react";
import "./Card.css"

const PromotionCard =({promotion})=>{

  return(
    
    <div className="promotion-card">
      <img className="promotion-card__image"src={promotion.imageUrl} alt={promotion.title} />
      <h1 className="promotion-card__title">{promotion.title}</h1>
      <span className="promotion-card__price">R$ {promotion.price}</span>
      <footer className="promotion-card__footer">
        {promotion.comments.length > 0 && (
        <div className="promotion-card__comments">
          {promotion.comments[0].comment}
        </div>
        )}

        <div className="promotion-card__comments-count">
          {promotion.comments.length}{' '}
          {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
        </div>
        <a href={promotion.url} target="_blank"rel="noreferrer" className="promotion-card__link">Ir para o site</a>
      </footer>
    </div>
  )
}

export default PromotionCard