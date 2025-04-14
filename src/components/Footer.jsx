import React from 'react';
import '../assets/styles/footer.css';
import Face from '../assets/img/facebook-svgrepo-com.svg'
import Insta from '../assets/img/instagram-svgrepo-com.svg'
import Link from '../assets/img/linkedin-svgrepo-com.svg'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <div className="footer-container">
                {/* Seção de Logo e Descrição */}
                <div className="footer-brand">
                    <h3 className="footer-logo">TechStore Solutions</h3>
                    <p className="footer-description">
                        Soluções inovadoras para seu dia a dia.
                    </p>
                </div>

                {/* Links Úteis */}
                <div className="footer-section">
                    <h4 className="footer-title">Links Rápidos</h4>
                    <ul className="footer-links">
                        <li><a href="/sobre">Sobre Nós</a></li>
                        <li><a href="/servicos">Serviços</a></li>
                        <li><a href="/contato">Contato</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>

                {/* Contato */}
                <div className="footer-section">
                    <h4 className="footer-title">Contato</h4>
                    <ul className="footer-contact">
                        <li><i className="fas fa-envelope"></i> contato@techstoresolutions.com</li>
                        <li><i className="fas fa-phone"></i> (xx) 1234-5678</li>
                        <li><i className="fas fa-map-marker-alt"></i> Escritório on-line</li>
                    </ul>
                </div>

                {/* Redes Sociais */}
                <div className="footer-section">
                    <h4 className="footer-title">Redes Sociais</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i><img src={Face} width={35} title='Facebook' /></a>
                        {/* <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a> */}
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i><img src={Insta} width={35} title='Instagram' /></a>
                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i><img src={Link} width={35} title='Linkedin' /></a>
                    </div>
                </div>
            </div>

            {/* Rodapé inferior */}
            <div className="footer-bottom">
                <p>&copy; {currentYear} TechStore Solutions. Todos os direitos reservados.</p>
                <div className="footer-legal">
                    <a href="/privacidade">Política de Privacidade</a>
                    <a href="/termos">Termos de Serviço</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;