
import react from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Search() {
    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }
    return (
        <form action={search}>
            <input name="query" />
            <button type="submit">Search</button>
        </form>
    );
}



//const Contact = () => {
//    return (
//        <>
//            <h1>Contact</h1>            
//        </>
//    );
//}

//export default Contact;
