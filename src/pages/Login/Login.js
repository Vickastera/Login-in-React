import React, { useState } from 'react';
import './Login.css';
import Title from './Components/Title/Title';
import Label from './Components/Label/Label';
import Input from './Components/Input/Input';
// import avatar from "./Perfil descripts.jpg";
// import Home from "../Home/Home";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     Redirect
//   } from "react-router-dom";
  import axios from 'axios';

const Login= (props)=> {
    
    const [ user, setUser ]= useState(''); //variable que almacena el estado
    const [ password, setPassword ]= useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState (false); //se inicia en false
    const [hasError, setHasError] = useState(false);
    const [addAccount, setAddAccount] = useState(false);
    function handleChange (name,value) {
        if(name === 'usuario') {
            setUser(value);

            setHasError(false);

        } else {
            if (value.length < 6) {
                setPasswordError (true);
                setPasswordError (false);

            }  else {
                setPasswordError(false);
                setPassword(value)
                setHasError (false);
            }  
        }  
    };

    function ifMatch(param) {
        if(param.user.length > 0 && param.password.length > 0) {
            axios.get("http://localhost:4000/todos/login?user="+param.user+"&pwd="+param.password)
            .then(res => {
                if(res.data[0]){
                    
                    const {user, password} = param;
                    let ac = {user , password}; //*creamos nueva variable
                    let account = JSON.stringify(ac); //*pasamos a json
                    // console.log(res.data[0], account)
                    localStorage.setItem('account' , account);
                    setIsLogin(true);
                    document.location.href = '/service'
                }
                else {
                    setIsLogin(false);
                    setHasError (true);
                }
            })
        } else{
            setIsLogin(false);
            setHasError (true);
        }

    }

    function handleSubmit() {
        let account = {user, password}
        if (account){
            
            ifMatch(account);
        }
        
    };
  
     return (
        
        <div>
            
            <div className='login-container'>
            
            { isLogin ?
                <div className= 'home-container'>
                    <h1>¡Hola, {user}!</h1>
                    <label> Felicitaciones, estas logueado.</label>
                </div>    
            :
            <div className='main-container'>
            <Title text='¡Bienvenido!'/>
            <div className = "login-avatar">
                <img src = "/img/Perfil descripts.jpg" />    
            </div>    
            {hasError &&
                <label className= 'label-alert'>
                Su contraseña o usuario son incorrectos,
                o no existen en nustra plataforma.
                </label>
            }    
            
            <ul>
                <li>
                <Label text='Usuario'/>
                 <Input
                    attribute={{
                        id: 'usuario',
                        name:'usuario',
                        type:'text',
                        placeholder:'Ingrese su usuario',
                    }}

                    handleChange= {handleChange}
                    />
                </li>
                <li>
                    <Label text='Contraseña'/>
                    <Input
                        attribute={{
                            id: 'contraseña',
                            name:'contraseña',
                            type:'password',
                            placeholder:'Ingrese su contraseña'
                        }}
                        handleChange= {handleChange}
                        param={passwordError}
                        />
                </li>
            </ul>
           

            
            

            { passwordError &&
                <label className= 'label-error'>
                    Contraseña inválida o incompleta
                </label>
            }

            <div className='submit-button-container'>
                <button onClick={handleSubmit} className='submit-button' > 
                Ingresar 
                </button>
                
            </div>

            <div className = "create-account">
                <div className = "left-checkbox">
                    <input type = "checkBox"></input>
                    <a>Se te olvidó tu contraseña</a>
                </div>
                <div className = "right-checkbox"><a>Crear una nueva cuenta</a></div>
                
            </div>
            </div>

            }
            
        </div>

        </div>
       
    )
};

export default Login;