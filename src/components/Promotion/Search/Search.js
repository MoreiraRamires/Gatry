import React, { useEffect, useState } from 'react';
import './Search.css';
import PromotionList from 'components/Promotion/List/List';

import { Link } from 'react-router-dom';
import useApi from 'components/utils/useApi'

const PromotionSearch = () => {
  const [search,setSearch] = useState("")
  const [load, loadInfo] = useApi({
    url:'/promotions?',
    method:'get',
    params:{
      _embed:"comments",
      _order:"desc",
      _sort:"id",
      title_like:search || undefined,    //title_like => realizar a busca - aula 06 - 30min
    },
  })

    useEffect(() => {
   
      load();
    },[search]);

    return(
      <div className="promotion-search">
        <header className="promotion-search__header">
          <h1>Promo Show</h1>
          <Link to="/create">Nova Promoção</Link>
        </header>
      
          <input 
          className="promotion-search__input" 
          placeholder="Buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search" name="" id="" 
          />

        <PromotionList 
          promotions={loadInfo.data} 
          loading={loadInfo.loading}
          error={loadInfo.error}
        />
    </div>
    )
}

export default PromotionSearch