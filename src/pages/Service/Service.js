import React, { useReducer } from 'react';
import './Home.css';
import overlayImage from "../Home/img/overlay-bg.jpg"
// import Login from "../Login/Login";
import { BrowserRouter as Router, Link, Switch,Route} from 'react-router-dom';
class Service extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            show: false,
            otherShow:false,
            userName:"",
            loading: true
        };
        // localStorage.setItem("account",[])
        this.showModal = this.showModal.bind(this);
        this.logOut = this.logOut.bind(this);
        
       
    }
    componentWillMount = () =>{
        if(localStorage.getItem("account")){
            let aaa = localStorage.getItem('account')
            
            this.setState({
                otherShow:true,
                userName:JSON.parse(aaa).user,
            })

        }
        else {this.setState({otherShow:false});window.location.href = "/login"}
    }
    showModal = () => {
        this.setState({
            show: true
        });
        console.log(this.state.show)
    };
    handleChange =() =>{
        this.setState({otherShow:true})
    }
    logOut =() =>{
        localStorage.clear();
        window.location.href = "/";
        
    }

    componentDidMount() {
        setTimeout(()=>{    
            this.setState({loading: false})
        }, 1000)
    }

    render(){
     return (
         <div>
            <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav" >
            <div className="container">
                <Link to="/" className="navbar-brand js-scroll">Bienvenidos</Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
                </button>
                <div className="navbar-collapse collapse justify-content-end" id="navbarDefault" >
                <ul className="navbar-nav"  >
                    <li className="nav-item">
                    <Link to="/" className="nav-link js-scroll"  style = {{color:"#0076fb"}}>Inicio</Link>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link js-scroll" href="#about" style = {{color:"#0076fb"}}>Sobre Mi</a>
                    </li> */}
                    {this.state.otherShow?<li className="nav-item"><a className="nav-link js-scroll" href="#service" style = {{color:"#0076fb"}}>Servicios</a>
                    </li>:<Link to="/login" className="nav-item nav-link js-scroll" style = {{color:"#0076fb"}}>Servicios</Link>}
                    {/* {this.state.otherShow?<li className="nav-item"><a className="nav-link js-scroll" href="#portfolio" style = {{color:"#0076fb"}}>Portfolio</a>
                    </li>:<Link to="/login" className="nav-item nav-link js-scroll" style = {{color:"#0076fb"}}>Portfolio</Link>} */}
                    
                    
                    {/* <li className="nav-item">
                    <a className="nav-link js-scroll" href="#blog" style = {{color:"#0076fb"}}>Blog</a>
                    </li> */}
                    <li className="nav-item">
                    <a className="nav-link js-scroll" href="#contact" style = {{color:"#0076fb"}}>Contacto</a>
                    </li>
                    {this.state.otherShow?<li className="nav-item">
                    <a className="nav-link js-scroll" href="" onClick = {this.logOut} style = {{color:"#0076fb"}}>Cerrar sesión</a>
                    </li>:<Link to="/login" className="nav-item nav-link js-scroll" style = {{color:"#0076fb"}}>Iniciar sesión</Link>}
                    
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Clientes
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#login" onClick={this.showModal}>Iniciar sesión</a>
                            <a className="dropdown-item" href="#">Registrarse</a>
                            <a className="dropdown-item" href="#">Conocerlos</a>
                        </div>
                        </li> */}
                    </ul>
                </div>
            </div>
            </nav>
            <div style = {{height:"10vh"}}></div>
           
           <section id="service" className="services-mf route">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                        <h3 className="title-a">
                            Servicios
                        </h3>
                        <p className="subtitle-a">
                            Aquí puedes encontrar algúnos de mis trabajos.
                        </p>
                        <div className="line-mf"></div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-monitor"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Web Design</h2>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-code-working"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Example 1</h2>
                        
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-paintbrush"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Example 2</h2>
                        
                        </div>
                        </div>
                    </div>
                    
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-monitor"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">FrontEnd Developer</h2>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-code-working"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Example 1</h2>
                        
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-paintbrush"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Example 2</h2>
                        
                        </div>
                        </div>
                    </div>
                    
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-monitor"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Graphic Design</h2>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-code-working"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Example 1</h2>
                        
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-paintbrush"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Example 2</h2>
                        
                        </div>
                        </div>
                    </div>
                    
                    </div>
                
                </div>
                
            </section>
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage:overlayImage}}>
            <div className="overlay-mf"></div>
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="contact-mf">
                    <div id="contact" className="box-shadow-full">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="title-box-2">
                            <h5 className="title-left">
                                Envíe su mensaje
                            </h5>
                            </div>
                            <div>
                                <form action="" method="post" role="form" className="contactForm">
                                <div id="sendmessage">Su mensaje ah sido enviado. Gracias!</div>
                                <div id="errormessage"></div>
                                <div className="row">
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validation"></div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validation"></div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div className="validation"></div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validation"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="button button-a button-big button-rouded">Enviar Mensaje</button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="title-box-2 pt-4 pt-md-0">
                            <h5 className="title-left">
                                Contáctenos
                            </h5>
                            </div>
                            <div className="more-info">
                            <p className="lead">
                                Por una atendimiento personalizado puede ponerse en contacto con nosotros.
                            </p>
                            <ul className="list-ico">
                                <li><span className="ion-ios-location"></span> 18 de Julio esq Andes</li>
                                <li><span className="ion-ios-telephone"></span>+598 98571567</li>
                                <li><span className="ion-email"></span> victoriacastera019@gmail.com</li>
                            </ul>
                            </div>
                            <div className="socials">
                            <ul>
                                <li><a href=""><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                                <li><a href=""><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                                <li><a href=""><span className="ico-circle"><i className="ion-social-twitter"></i></span></a></li>
                                <li><a href=""><span className="ico-circle"><i className="ion-social-pinterest"></i></span></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <footer>
                <div className="container">
                
                        
                        Designed by Visual Studio Code
                    
                </div>
            </footer>
            </section>
            

        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
            {
                this.state.loading?<div id="preloader"></div>:null
            }
            
            {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
            <title>React App</title>
            {/* <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage:overlayImage}}>
                <div id="login">
                    <Modal show={this.state.show} onChange={this.handleChange} />
                </div>
            </section> */}
            
        </div>
        
            
    )
}
};


export default Service;