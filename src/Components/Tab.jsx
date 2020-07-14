import React, { useState } from 'react';

const Tab = props => {
    const [currentTab, setCurrentTab] = useState(0);
    
    
    //const [tabs, setTabs] = useState(['Type tab contents here...']);

    const content = [
        "Thank Me Later, Take Care, Nothing Was The Same, Views, Scorpion", "Cole World, Born Sinner, KOD, 2014 Forest Hills Drive, 4 Your Eyez Only", "The Real Slim Shady, Recovery, Revival, The Marshall Mathers, Relapse", "Late Registration, The College Dropout, 808's & Heartbreak, The Life of Pablo, My Beautiful Dark Twisted Fantasy, Graduation, Yeezus", "Goodbye & Good Riddance, WRLD on Drugs, Death Race for Love, Legends Never Die"
    ];
    const label = [
        "(2006 - Current)", "(2007 - Current)", "(1996 - Current)", "(2005 - Current)", "(2018 - 2019)"
    ];
    const bio = [
        "The multi-Grammy-award-winning rapper Drake has had two shots at fame — and nailed them both. He first came to prominence in the teen soap Degrassi: The Next Generation in the role of Jimmy Brooks, a wheelchair-bound character he played for seven years. After leaving the show he became one of the biggest rappers on the planet after signing a deal with Lil Wayne's label Young Money Entertainment. ",
        "J. Cole's story is unusual for a rapper. For starters, he was born in Germany — his father was a G.I., and his mother is German. He didn't grow up in a city, but rather in a suburb in Fayetteville, N.C., an experience the rapper says was informative, influential and sometimes scary.",
        "Eminem, byname of Marshall Bruce Mathers III, (born October 17, 1972, St. Joseph, Missouri, U.S.), American rapper, record producer, and actor who was known as one of the most-controversial and best-selling artists of the early 21st century. Mathers had a turbulent childhood, marked by poverty and allegations of abuse.",
        "Kanye Omari West was born in Atlanta, Georgia, on June 8, 1977. His father, Ray, was a photojournalist for the Atlanta Journal newspaper and was also politically active in the Black Panthers; he later became a Christian counselor. ... Her passing would profoundly affect West musically as well as personally",
        "Jarad Anthony Higgins was born on December 2, 1998, in Chicago, Illinois. He moved to Homewood, Illinois, in 1999 and attended Homewood-Flossmoor High School. His parents divorced when he was three years old, and his father left, leaving his mother to raise him as a single mother alongside one older brother."
    ];

    

    

    

    return (
        <>
        <ul className="nav nav-tabs ">
            <li className="nav-item">
                <a className={currentTab === 0 ? "nav-link active text-primary" : "nav-link text-info"}onClick={e => setCurrentTab(0)} href="#">Drake</a>
    
                
            </li>
            <li className="nav-item">
                <a className={currentTab === 1 ? "nav-link active text-primary" : "nav-link text-info"} onClick={e => setCurrentTab(1)}  href="#">J. Cole</a>
                
            </li>
            <li className="nav-item">
                <a className={currentTab === 2 ? "nav-link active text-primary" : "nav-link text-info"} onClick={e => setCurrentTab(2)}  href="#">Eminem</a>
              
            </li>
            <li className="nav-item">
                <a className={currentTab === 3 ? "nav-link active text-primary" : "nav-link text-info"} onClick={e => setCurrentTab(3)}  href="#">Kanye West</a>
              
            </li>
            <li className="nav-item">
                <a className={currentTab === 4 ? "nav-link active text-primary" : "nav-link text-info"} onClick={e => setCurrentTab(4)}  href="#">Juice Wrld</a>
              
            </li>
        </ul>
        <div className="alert alert-danger">Years Active: {label[currentTab]}</div>
        <div className="alert alert-info">Albums: {content[currentTab]}</div>
        <div className="alert alert-success">Biography: {bio[currentTab]}</div>

        
        
        
        </>
    )
}





export default Tab;