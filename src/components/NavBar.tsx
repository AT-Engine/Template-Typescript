import { Outlet } from "react-router-dom";
import '../styles/NavBar.css';

function NavBar() {
    const value = -1;
    return (
        <>
            <nav className="navbar navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-center" href="http://atem.net/home/">atem.net</a>
                    <h5>Module Name</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* You need to modify this section if your module has many views. If not, comment it */}
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={value} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header"
                            style={{
                                backgroundColor: '#003F63'
                            }}>
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body"
                            style={{
                                backgroundColor: '#003F63'
                            }}>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark"
                                        style={{
                                            backgroundColor: '#003451'
                                        }}>
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider"></hr>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Este componente de aqui funciona para rederizar nuestro elemento hijo que se define en el router */}
            <Outlet />
        </>
    )
}

export default NavBar
