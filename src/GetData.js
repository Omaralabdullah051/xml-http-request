import { useEffect, useState } from 'react';
import './App.css';

function GetData() {
    const [post, setPost] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const xhr = new XMLHttpRequest(); //here we create a new xhr object 
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1") //use open method to prepare the request.(request method,url)
        xhr.responseType = "json"; //need to declare the response Type
        xhr.setRequestHeader('Content-Type', 'application/json');//explicitly need to declare the content-type by setRequestHeader function, so that the server will understand the data type.
        xhr.send();  // use send method to send the request 
        xhr.onload = () => { //use onload method to receive the response and finally we can use it.

            if (xhr.status >= 400) { //checking wether there is an application error(wrong url,etc)
                setError('something went wrong');
            }
            else {
                const result = xhr.response;
                setPost(result);
            }
        };
        xhr.onerror = () => { // use onerror method to handle the network error(when data connection is disrupted)
            setError('something went error. fix the network issue');
        }
    }, [])

    const getDataHandler = () => {
        console.log(post);
        console.log(error);
    }


    return (
        <div>
            <button onClick={getDataHandler}>Get Data</button>
        </div>
    );
}

export default GetData;