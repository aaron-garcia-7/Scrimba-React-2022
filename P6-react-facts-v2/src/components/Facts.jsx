import logo2 from '../logo2.svg';

const Facts = ({darkTheme}) => {

    const factList = [
        'Was first released in 2013',
        'Was originally created by Jordan Walke',
        'Has well over 100k stars on GitHub',
        'Is maintained by Facebook',
        'Powers thousands of enterprise apps, including mobile apps',
    ];
    
    const listItems = factList.map((li, key) => {
        return (
            <li key={key + 1} className={darkTheme ? "factsLi" : "factsLiSwitch"}>{li}</li>
        )
    });

    return (
        <div className={darkTheme ? "facts" : "factsSwitch"}>
            <h1 className={darkTheme ? "factsHeader" : "factsHeaderSwitch"}>Fun facts about React</h1>
            <ul className={darkTheme ? "factsUl" : "factsUlSwitch"}>
                {listItems}
            </ul>
            {darkTheme && <img className="factsImg" src={logo2} alt="" /> }
        </div>
    );
}

export default Facts;