import logo from '../logo.svg';

const Nav = ({darkTheme, setDarkTheme}) => {

    const changeTheme = () => {
        setDarkTheme((prev) => !prev);
      };

    return (
        <nav style={darkTheme ? null : {background: '#fff'}} className='navBar'>
            <div className={darkTheme ? 'logo' : 'logoSwitch'}>
                <img className="logoImg" src={logo} alt="" />
                <h2 className='logoH2'>ReactFacts <span className="versionTwo">V2</span></h2>
            </div>
            <div className="navInfo">
                <h3 style={darkTheme ? null : {color: '#313131'}}>React Course - Project 6</h3>
            </div>
            <div className='themeToggle'>
                <h5 className={darkTheme ? 'lightText' : 'lightTextSwitch'}>Light</h5>
                <div style={darkTheme ? null : {background: '#313131'}} className="switch" onClick={changeTheme}>
                    <div className={darkTheme ? 'ball' : 'ballSwitch'}></div>
                </div>
                <h5 className={darkTheme ? 'darkText' : 'darkTextSwitch'}>Dark</h5>
            </div>
        </nav>
    )
}

export default Nav;