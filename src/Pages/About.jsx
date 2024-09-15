//// src/pages/About.jsx
//import React from 'react';

//const About = () => {
//  return (
//    <div>
//      <h2>About Page</h2>
//      <p>This is the About Page.</p>
//    </div>
//  );
//};

//export default About;

import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

const Users = ({ setLogin }) => {
    // Define a state variable to hold the fetched data
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let [objdata, setobjdata] = useState("");

    // useEffect hook to fetch data when the component is mounted
    useEffect(() => {
        // Fetch data from the API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json(); // Parse the JSON from the response
            })
            .then((data) => {
               if(data[0].id == 1)
                {
                    setobjdata = "Success";
                }
               else {
                   setobjdata = "Faild";
               }

                if (setobjdata == "Success") {

                    setLogin(true);
                }

                setUsers(data); // Set the fetched data in the state
                setLoading(false); // Turn off the loading state
            })
            .catch((error) => {
                setError(error.message); // Set the error message
                setLoading(false); // Turn off the loading state
            });
    }, []); // Empty dependency array means the effect runs once after the initial render

    // Handle loading state
    if (loading) {
        return <p>Loading...</p>;
    }

    // Handle error state
    if (error) {
        return <p>Error: {error}</p>;
    }

    // Render the list of users
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(a => (
                    <li>
                        {a.name} "{a.email}"
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;


