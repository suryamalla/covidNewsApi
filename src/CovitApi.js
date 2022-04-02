import React, { useEffect, useState } from 'react'
import './App.css'


const CovitApi = () => {

    const [news, setNews] = useState([]);
    const getNews = async () => {
        try{
            const response = await fetch('https://corona.askbhunte.com/api/v1/news');
            // const response = await fetch('https://jsonplaceholder.typicode.com/users');
            // setNews(await response.json());
    const actualData= await response.json();
    console.log(actualData.data);
    setNews(actualData.data);

        }catch(err){
console.log(err);
        }
       

    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <h1>NEPAL covit news</h1>
            {/* <div className="container"> */}
                {
                    news.map((curElem) => {
                        return (
                            <>



                                <div className="container1" >
                                    

                                    {/* <div className="containerm34"> */}
                                    <h1>Heading</h1>
                                        <div className="container2" id='a' >{curElem.title}</div>
                                        <h2>News</h2>
                                        <div className="container2"> {curElem.summary}</div>
                                         <br />
                                        <div className="container2" >source:{curElem.source}</div>
                                        {/* <br /><br />
                                    </div> */}
                                </div>

                            </>

                        )
                    })

                }
            {/* </div> */}



        </>
    )
}

export default CovitApi;