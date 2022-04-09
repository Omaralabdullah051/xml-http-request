import React, { useEffect, useState } from 'react';

const SendData = () => {
    const [post, setPost] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }));
        xhr.onload = () => {
            if (xhr.status >= 400) {
                setError('something went wrong!');
            }
            else {
                const result = xhr.response;
                setPost(result);
            }
        };
        xhr.onerror = () => {
            setError('something went error. fix the network issue');
        }
    }, [])

    const sendDataHandler = () => {
        console.log(post);
        console.log(error);
    }

    return (
        <div>
            <button onClick={sendDataHandler}>Send Data</button>
        </div>
    );
};

export default SendData;