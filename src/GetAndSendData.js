import React, { useEffect, useState } from 'react';

const GetAndSendData = () => {
    const [post, getPost] = useState({});
    const [post2, sendPost] = useState({});
    const [error, setError] = useState('');

    const sendRequest = (method, url, data) => {
        const promise = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(data);
            xhr.onload = () => {
                if (xhr.status >= 400) {
                    reject('Something was wrong')
                }
                resolve(xhr.response);
            };
            xhr.onerror = () => {
                reject('Something was error!fix the network issue');
            }
        });
        return promise;
    };

    useEffect(() => {
        sendRequest("GET", "https://jsonplaceholder.typicode.com/posts/1")
            .then(res => getPost(JSON.parse(res)))
            .catch(err => setError(err))

        sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }))
            .then(res => sendPost(res))
            .catch(err => setError(err))
    }, [])

    const getDataHandler = () => {
        console.log(post);
        console.log(error);
    }

    const sendDataHandler = () => {
        console.log(post2);
        console.log(error);
    }


    return (
        <div>
            <button onClick={getDataHandler}>Get Data</button>
            <button onClick={sendDataHandler}>Send Data</button>
        </div>
    );
}

export default GetAndSendData;