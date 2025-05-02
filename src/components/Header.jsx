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
            <div className='header-container'>
                <div class="container-fluid">
                    <span>ArmMarc</span>
                    {/* relógio */}
                    {currentTime}
                    <img src={Logo} width={30} />
                </div>
            </div>
        </>
    )
}

export default Header