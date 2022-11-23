import { NavLink } from "react-router-dom";

function Nav({status}) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="container-fluid">
                            <span className="navbar-brand">Siuvykla</span>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    {/* {status === 3 || status === 4 ? <NavLink to="/" end className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink> : null} */}
                                    {status === 3 ? <NavLink to="/books" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Knygos</NavLink> : null}
                                    {status === 3 ? <NavLink to="/cats" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Kategorijos</NavLink> : null}
                                    {status === 2 ? <NavLink to="/rezervacijos" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Rezervuoti knygas</NavLink> : null}
                                    {status !== 1 ? <NavLink to="/logout" className="nav-link">Logout</NavLink> : null}
                                    {status === 1 ? <NavLink to="/register" className="nav-link">Register</NavLink> : null}
                                    {status === 1 ? <NavLink to="/login" className="nav-link">Login</NavLink> : null}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav;