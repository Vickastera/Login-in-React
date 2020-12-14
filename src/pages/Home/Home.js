import React, { useReducer } from 'react';
import './Home.css';
import introImage from "./img/intro.JPG";
import overlayImage from "./img/overlay-bg.jpg"
import Login from "../Login/Login";



import { BrowserRouter as Router, Link, Switch,Route} from 'react-router-dom';
class Home extends React.Component { 
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
    componentDidMount = () =>{
        if(localStorage.getItem("account")){
            let aaa = localStorage.getItem('account')
            
            this.setState({
                otherShow:true,
                userName:JSON.parse(aaa).user,
            })

        }
        else {this.setState({otherShow:false})}


            setTimeout(()=>{    
                this.setState({loading: false})
            }, 1000)
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
        window.location.href = "/";
        localStorage.clear();
        
    }


    render(){
     return (
         <div>
            <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll" href="#page-top">Bienvenidos</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
                </button>
                <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link js-scroll active" href="#home">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link js-scroll" href="#about">Sobre Mi</a>
                    </li>
                    {this.state.otherShow?<Link to="/service" className="nav-item nav-link js-scroll">Servicios</Link>:<Link to="/login" className="nav-item nav-link js-scroll">Servicios</Link>}
                    <li className="nav-item">
                    <a className="nav-link js-scroll" href="#portfolio">Portfolio</a>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-link js-scroll" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link js-scroll" href="#contact">Contacto</a>
                    </li>
                    {this.state.otherShow?<li className="nav-item">
                    <a className="nav-link js-scroll" href="" onClick = {this.logOut}>Cerrar sesión</a>
                    </li>:<Link to="/login" className="nav-item nav-link js-scroll">Iniciar sesión</Link>}
                    
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
            <div id="home" className="intro route bg-image" style={{backgroundImage: "url(" + introImage + ")"}}>
            <div className="overlay-itro"></div>
            <div className="intro-content display-table">
                <div className="table-cell">
                <div className="container">
                    {this.state.otherShow? <h1 className="intro-title mb-4">Yo soy {this.state.userName}</h1>:<h1></h1>}
                   
                    <p className="intro-subtitle"><span className="text-slider-items">Web Developer,Web Designer,Frontend Developer,Graphic Designer</span><strong className="text-slider"></strong></p>
                </div>
                </div>
            </div>
            </div>
            
            <section id="about" className="about-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="box-shadow-full">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-6 col-md-5">
                            <div className="about-img">
                                <img src="img/Perfil descripts.jpg" className="img-fluid rounded b-shadow-a" alt=""/>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-7">
                            <div className="about-info">
                                <p><span className="title-s">Nombre: </span> <span>Victoria Casterá</span></p>
                                <p><span className="title-s">Perfil: </span> <span>Graphic Design - FrontEnd Developer</span></p>
                                <p><span className="title-s">Email: </span> <span>victoriacastera019@gmail.com</span></p>
                                <p><span className="title-s">Celular: </span> <span>+598 98571567</span></p>
                            </div>
                            </div>
                        </div>
                        <div className="skill-mf">
                            <p className="title-s">Habilidades</p>
                            <span>HTML</span> <span className="pull-right">40%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>CSS</span> <span className="pull-right">30%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                            <span>JAVASCRIPT</span> <span className="pull-right">5%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "5%"}} aria-valuenow="5" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                            <span>PHOTOSHOP</span> <span className="pull-right">65%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                            <span>CORELDRAW</span> <span className="pull-right">70%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                            <span>ILLUSTRATOR</span> <span className="pull-right">50%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                            <span>AUTOCAD</span> <span className="pull-right">60%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                            <span>SKETCHUP</span> <span className="pull-right">60%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                            <span>InDesign</span> <span className="pull-right">60%</span>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="about-me pt-4 pt-md-0">
                            <div className="title-box-2">
                            <h5 className="title-left">
                                Sobre Mi
                            </h5>
                            </div>
                            <p className="lead">
                            Me considero una persona responsable, dinámica y creativa, con facilidad de
                            adaptación y de trabajar en equipo o de manera freelancer, en condiciones bajo presión, con iniciativa y
                            estrategias para resolver problemas eficientes y lograr las metas y objetivos trazados.
                            
                            </p>
                        
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {
                this.state.otherShow?            <section id="service" className="services-mf route">
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
                            <h2 className="s-title">FrontEnd Developer</h2>
                        
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-paintbrush"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Graphic Design</h2>
                        
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </section>:null
               
            }
           <section id="portfolio" className="portfolio-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div className="title-box text-center">
                    <h3 className="title-a">
                        Portfolio
                    </h3>
                    <p className="subtitle-a">
                        Algunos trabajos realizados.
                    </p>
                    <div className="line-mf"></div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="img/1.jpg" data-lightbox="gallery-mf">
                        <div className="work-img">
                        <img src="img/1.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="work-content">
                        <div className="row">
                            <div className="col-sm-8">
                            <h2 className="w-title">Diseño con Tipografías</h2>
                            <div className="w-more">
                                <span className="w-ctegory"> Diseño Gráfico</span> / <span className="w-date">18 Sep. 2015</span>
                            </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="img/Logo.jpg" data-lightbox="gallery-mf">
                        <div className="work-img">
                        <img src="img/Logo.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="work-content">
                        <div className="row">
                            <div className="col-sm-8">
                            <h2 className="w-title">Rediseño de Logotipo</h2>
                            <div className="w-more">
                                <span className="w-ctegory">Diseño Gráfico</span> / <span className="w-date">12 Nov. 2015</span>
                            </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="img/4.jpg" data-lightbox="gallery-mf">
                        <div className="work-img">
                        <img src="img/4.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="work-content">
                        <div className="row">
                            <div className="col-sm-8">
                            <h2 className="w-title">Packaging Rediseñado</h2>
                            <div className="w-more">
                                <span className="w-ctegory">Diseño Gráfico</span> / <span className="w-date">20 Nov. 2015</span>
                            </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="img/2.jpg" data-lightbox="gallery-mf">
                        <div className="work-img">
                        <img src="img/2.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="work-content">
                        <div className="row">
                            <div className="col-sm-8">
                            <h2 className="w-title">Afiche de Evento</h2>
                            <div className="w-more">
                                <span className="w-ctegory"></span>Diseño Gráfico / <span className="w-date"> 3 Sep. 2016</span>
                            </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="img/parad.png" data-lightbox="gallery-mf">
                        <div className="work-img">
                        <img src="img/parad.png" alt="" className="img-fluid"/>
                        </div>
                        <div className="work-content">
                        <div className="row">
                            <div className="col-sm-8">
                            <h2 className="w-title">Modelo Parada de Ómnibus</h2>
                            <div className="w-more">
                                <span className="w-ctegory">Diseño Gráfico</span> / <span className="w-date">18 Abril. 2018</span>
                            </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-box">
                    <a href="img/5.jpg" data-lightbox="gallery-mf">
                        <div className="work-img">
                        <img src="img/5.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="work-content">
                        <div className="row">
                            <div className="col-sm-8">
                            <h2 className="w-title">Etiqueta para Queso</h2>
                            <div className="w-more">
                                <span className="w-ctegory">Diseño Gráfico</span> / <span className="w-date">18 Sep. 2017</span>
                            </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="w-like">
                                <span className="ion-ios-plus-outline"></span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </a>
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
                
                        
                        Designed by Victoria Casterá
                    
                </div>
            </footer>
            </section>
            
            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
            {
                this.state.loading?<div id="preloader"></div>:null
            }
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
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



export default Home;