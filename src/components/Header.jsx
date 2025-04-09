import React, { useState, useEffect } from 'react';
import Logo from '../assets/img/logo.jpg';
import Acesso from '../components/Acesso'
import '../assets/styles/header.css';

const Header = () => {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // Atualiza o relógio a cada segundo
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Limpa o intervalo ao desmontar o componente
        return () => clearInterval(timer);
    }, []);


    return (
        <>
            <div>
                <nav class="navbar bg-primary fixed-top">
                    <div class="container-fluid">
                        <a class="navbar-brand text-light" ><img src={Logo} width={30} /> ArmMarc</a>
                        {/* relógio */}
                        <div className="text-light mx-3">
                            {currentTime}
                        </div>
                        <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src={Logo} width={30} /> ArmMarc</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Área do Funcionário</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Cadastrar funcionáio</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Mais
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Estoque</a></li>
                                            <li><a class="dropdown-item" href="#">Aniversariante do mês</a></li>
                                            <li>
                                                <hr class="dropdown-divider" />
                                            </li>
                                            <li><a class="dropdown-item" href="#">Dashboard</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form class="d-flex mt-3" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header