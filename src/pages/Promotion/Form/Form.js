import React from"react"
import { useParams } from "react-router";


const PagesPromotionForm  = () => {
  const {id} = useParams()
  return(
   <>
      <h2>Hello0</h2>
      {id && (
        <h1>
          Tem um id <span>{id}</span>
        </h1>
      )}
   </>
  )
};

export default PagesPromotionForm;