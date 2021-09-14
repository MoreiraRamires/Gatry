import React ,{useEffect, useState}from 'react'
import { useHistory } from 'react-router';
import './Form.css';
import axios from "axios";

const initialValue ={
  title:"",
  url:"",
  imageUrl:"",
  price:0,
}
const PromotionForm = ({id}) => {
  const [values,setValues] = useState(initialValue);
  const history = useHistory()


useEffect(()=>{ // vou iniciar um request quando meu componente for montado. Igual na listagem
  if(id){ // o id representa que estou trabalhando com uma edicao 
    axios.get(`http://localhost:5000/promotions/${id}`)
      .then((response) => {
        
        setValues(response.data);
    })
  }
},[]);// o segundo parametro representa o que será ouvido para que o useEffect seja acionado novamente. O vazio significa que o hook sera acionado apenas quando o componente montar.


  function onChange(e){
    const {name,value} = e.target
    console.log({name,value})
    
    setValues({...values,[name]:value});
  }

  function onSubmit(e){
    e.preventDefault();

    const method = id ? 'put' : 'post';
    const url = id
    ?`http://localhost:5000/promotions/${id}`
    :'http://localhost:5000/promotions'

    axios[method](url,values)
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
          <input id="title"type="text" name="title" onChange={onChange} value={values.title}/> 
          {/* props value faz com que o campo seja preenchido com o ID */}
          <label htmlFor="price">Preço</label>
          <input id="price"type="number" name="price" onChange={onChange} value={values.price}/>
          <label htmlFor="url">Link</label>
          <input id="url" type="text" name="url"/>
          <label htmlFor="imageUrl">Imagem(url)</label>
          <input id="url" type="text" name="imageUrl" onChange={onChange} value={values.imageUrl}/>
        </div>
        <div className="promotion-form__save">
          <button type="submit">Salvar</button>
        </div>

      </form>
    </>
  )
}

export default PromotionForm