import React, { useEffect, useState } from 'react';

const GetData2 = () => {
    const [post, setPost] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
        xhr.onload = () => {
            if (xhr.status >= 400) {
                setError('something went wrong!');
            }
            else {
                const result = xhr.response;
                setPost(JSON.parse(result));
            }
        };
        xhr.onerror = () => {
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
};

export default GetData2;