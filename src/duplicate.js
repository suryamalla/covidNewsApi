import React, { useEffect, useState } from 'react'
import App from './App.css';
const CovitApi = () => {
    const [news, setNews] = useState([]);
    const getNews = async () => {
        // const response = await fetch('https://data.covid19india.org/data.json');
        const response = await fetch('https://api.github.com/users');
        // const setNews= await response.json();
        setNews(await response.json());

    }

    useEffect(() => {  getNews();
    }, []);

    return (
        <>
            <h1>NEPAL covit news</h1>
            <div className="container">
            {
               news.map((curElem)=>{
             return (
                <>



                    <div className="container1">
                        <div className="container2">Number of people confirmed : {curElem.totalconfirmed}</div>

                        <div className="containerm34">
                            <div className="container2">total recoverd:{curElem. totalrecovered}</div>
                            <div className="container2"> total deceased:{curElem.totaldeceased}</div>
                        </div>
                    </div>
                   
                </>

                )
           })

        }
            </div>



        </>
    )
}

export default CovitApi;