import axios from "axios";
import { useState } from "react"

const initialRequestInfo ={
  error:null,
  data:null,
  loading:false
}
export default function useApi(config){
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo);

  async function call(localConfig){
    setRequestInfo({
      ...initialRequestInfo,
      loading:true,
    });
    let response =null
    try{
      response = await axios(
     { 
       baseURL:'http://localhost:5000',
        ...config,
        ...localConfig
      }
      ); 
      setRequestInfo({
        ...initialRequestInfo,
        data:response.data,
      });  
    }
    catch(error){
      setRequestInfo({
        ...initialRequestInfo,
        error,//error:error
      });
    }
    //implentar autocomplete  - 25 min aula 09
    if (config.onCompleted){
      config.onCompleted(response);
    }  
  }

  return [
    call,
    requestInfo
  ]

}