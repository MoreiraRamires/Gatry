import React ,{useState}from 'react'
import { useHistory } from 'react-router';
import './Form.css';
import axios from "axios";

const initialValue ={
  title:"",
  url:"",
  imageUrl:"",
  price:0,
}
const PromotionForm = () => {
  const [values,setValues] = useState(initialValue);
  const history = useHistory()
  console.log(values)
  function onChange(e){
    const {name,value} = e.target
    console.log({name,value})
    
    setValues({...values,[name]:value});
  }

  function onSubmit(e){
    e.preventDefault();
    axios.post("http://localhost:5000/promotions",values)
    .then((response)=>{
      history.push("/") //redirecionar para a página de listagem - hook
    })
    
  }
  return(

    <>
      <h1>Promotion</h1>
      <h2>Nova Promoção</h2>
      <form onSubmit={onSubmit}>
        <div className="promotion-form__group">
          <label htmlFor="title">Titulo</label>
          <input id="title"type="text" name="title" onChange={onChange}/>
          <label htmlFor="price">Preço</label>
          <input id="price"type="number" name="price" onChange={onChange}/>
          <label htmlFor="url">Link</label>
          <input id="url" type="text" name="url"/>
          <label htmlFor="imageUrl">Imagem(url)</label>
          <input id="url" type="text" name="imageUrl" onChange={onChange}/>
        </div>
        <div className="promotion-form__save">
          <button type="submit">Salvar</button>
        </div>

      </form>
    </>
  )
}

export default PromotionForm