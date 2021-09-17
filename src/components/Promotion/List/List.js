import React from 'react';
import PromotionCard from '../Card/Card';
import './List.css';

const PromotionList = ({ loading, promotions,error }) => {
  if(error){
    return <div> Erro</div>
  }
  
  if (loading || promotions === null ) {
    return <div className="loader">Carregando...</div>;
  }

  if(promotions.length === 0){
    return <div> Nada encontrado</div>
  }

  return (
    <div className="promotion-list">
      {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
    </div>
  );
}

export default React.memo(PromotionList);