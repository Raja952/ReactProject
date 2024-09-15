import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export function LoginModel({ Parameter, login, setLogin }) {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setLogin(false);

    };
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log("Email:", email);
        console.log("Password:", password);
        // Close the modal after login logic (optional)
        handleClose();
    };

    useEffect(() => {
        if (login) {

            handleShow();
        }

    },[login])

    return (
        <>

            <div variant="primary" onClick={handleShow}>
                {Parameter }
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>



                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" className="mt-3 btn btn-primary" style={{ width: "100%" }}>
                                Submit
                            </Button>
                        </div>
                    </Form>












                </Modal.Body>
                {/*<Modal.Footer>*/}
                {/*    <Button variant="secondary" onClick={handleClose}>*/}
                {/*        Close*/}
                {/*    </Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </>
    );
}

//export default Example;