import React ,{useEffect, useState}from 'react'
import { useHistory } from 'react-router';
import './Form.css';
import useApi from 'components/utils/useApi'


const initialValue ={
  title:"",
  url:"",
  imageUrl:"",
  price:0,
}

const PromotionForm = ({id}) => {
  const [values,setValues] = useState(id ? null : initialValue); // iniciei com null para ter a opção carregando if linha 27
  const history = useHistory()
  const [load] = useApi({
    url:`/promotions/${id}`,
    method:'get',
    onCompleted:(response) =>{
      setValues(response.data);
    },
  })
  const [save, saveInfo] = useApi({
    url : id
      ?`promotions/${id}`:'promotions',
    method : id ? 'put' : 'post',
    onCompleted:(response) =>{
      if(!response.error){
        history.push("/")//redirecionar para a página de listagem - hook
      }
    },
  })
useEffect(()=>{ // vou iniciar um request quando meu componente for montado. Igual na listagem
  if(id){ // o id representa que estou trabalhando com uma edicao 
   load()
  }
},[id]);// o segundo parametro representa o que será ouvido para que o useEffect seja acionado novamente. O vazio significa que o hook sera acionado apenas quando o componente montar.

 if ( !values){
   return ( <div> Carregando</div>)
 }
  function onChange(e){
    const {name,value} = e.target
    console.log({name,value})
    
    setValues({...values,[name]:value});
  }

  function onSubmit(e){
    e.preventDefault();
    save({
      data:values,
    })
  }
  return(

    <>
      <h1>Promotion</h1>
      <h2>Nova Promoção</h2>
      <form onSubmit={onSubmit}>
        {saveInfo.loading && <span>Salvando dados</span>}
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