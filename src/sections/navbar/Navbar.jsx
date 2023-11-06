import Logo from '../../assets/logo.JPG';
import data from './data';
import './navbar.css';

const Navbar = () => {
    const renderMenuItems = () =>
        data.map(navLinks => (
            <li key={navLinks.id}>
                <a href={navLinks.link}>{navLinks.title}</a>
            </li>
        ));

    return (
        <nav>
            <div className="container nav__container">
                <a href="index.html" className="nav__logo">
                    <img src={Logo} alt="Logo"/>
                </a>
                <ul className="nav__menu">{renderMenuItems()}</ul>
            </div>
        </nav>
    );
};

export default Navbar;