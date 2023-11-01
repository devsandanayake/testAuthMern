import React, { useEffect, useState } from "react";
import axios from "axios";

const View = () => {
    const [data, setData] = useState([]);
    //log out
    const logout = () => {
        localStorage.removeItem('usertoken');
        window.location.href = '/';
    };

    useEffect(() => {
        const token = localStorage.getItem('usertoken');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios.get('http://localhost:4000/post', config)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>View</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((post) => (
                        <tr key={post._id}>
                            <td>{post.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default View;
