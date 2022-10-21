import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState();
    const photoURLRef = useRef(user.photoURL);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(photoURLRef.current.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>User Profile</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={handleNameChange} defaultValue={user?.displayName} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control defaultValue={user?.email} type="email" placeholder="Enter email" disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPicture">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;