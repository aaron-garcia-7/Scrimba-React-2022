import logo2 from '../logo2.svg';

const Facts = () => {

    const factList = [
        'Was first released in 2013',
        'Was originally created by Jordan Walke',
        'Has well over 100k stars on GitHub',
        'Is maintained by Facebook',
        'Powers thousands of enterprise apps, including mobile apps',
    ];
    
    const listItems = factList.map((li, key) => {
        return (
            <li key={key + 1}>{li}</li>
        )
    });

    return (
        <div className="facts">
            <h1>Fun facts about React</h1>
            <ul>
                {listItems}
            </ul>
            <img src={logo2} alt="" />
        </div>
    );
}

export default Facts;
