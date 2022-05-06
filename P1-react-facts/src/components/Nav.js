import logo from '../logo.svg';

const Nav = () => {
    return (
        <nav className='navBar'>
            <div className="logo">
                <img src={logo} alt="" />
                <h2>ReactFacts</h2>
            </div>
            <div className="navInfo">
                <h3>React Course - Project 1</h3>
            </div>
        </nav>
    )
}

export default Nav;
