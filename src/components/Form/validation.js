const validation = (userData,errors,setErrors,property) => {

  //validacion de username
  if(property==='email'){
    if(!userData.email){
      setErrors({
        ...errors,
        email:'Porfavor completa este campo'
      })
    }else if(userData.email.length > 35){
      setErrors({
        ...errors,
        email:'No puedes superar los 35 caracteres'
      })
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)){
      setErrors({
        ...errors,
        email:'Email invalido'
      })
    }else{
      setErrors({
        ...errors,
        email:''
      })
    }
  }

  
  if(property==='password'){
    if(userData.password.length < 6 || userData.password.length > 10){
      setErrors({...errors,password:"Longitud de password inválida"})
    }else if(!/\d/.test(userData.password)){
      setErrors({...errors,password:'Debe contener al menos un numero'})
    }else{
      setErrors({...errors,password:''})
    }
  
  }

}


export default validation;