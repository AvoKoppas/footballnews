import React, {useCallback, useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

import axios from "axios";

export default function App() {
    let [responseData, setResponseData] = useState([]);

    const fetchData = useCallback(() => {
        axios({
            method: 'GET',
            url: 'https://livescore6.p.rapidapi.com/news/list',
            params: {category: 'soccer'},
            headers: {
                'x-rapidapi-key': '457a49cbd2msh587809b267ee184p1965ffjsn4b06828b27cb',
                'x-rapidapi-host': 'livescore6.p.rapidapi.com'
            }
        })
            .then((response) => {
                setResponseData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        //in this block will run on mount!
        fetchData()
    }, [fetchData])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Fetching data with React Hooks
                </h1>
                <button type='button' onClick={fetchData}>Click for fresh news
                </button>
            </header>
            <pre>
        <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code>
      </pre>
            <footer>
                Page created by Avo
            </footer>
        </div>
    );
}
