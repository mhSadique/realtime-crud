import { Modal, Box, TextField, Button, Paper } from '@mui/material';
import React, { useState } from 'react';

const EditModal = ({ modalOpen, onClose, user, setModalOpen }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleUpdateUser = () => {
        fetch(`https://realtimecrudapp.herokuapp.com/user/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setModalOpen(false);
                    alert('User Updated Successfully.')
                }
            });

    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <Modal
            open={modalOpen}
            onClose={onClose}
        >
            <Box
                sx={style}
            >
                <Paper
                    elevation={2}
                    sx={{
                        width: '100%',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <TextField
                        variant='outlined'
                        label='Name'
                        sx={{ my: 2, mx: 3 }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        variant='outlined'
                        label='Email'
                        sx={{ my: 2, mx: 3 }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Button
                        variant='contained'
                        sx={{ my: 2, mx: 3 }}
                        onClick={handleUpdateUser}
                    >
                        Update</Button>
                </Paper>
            </Box>
        </Modal>
    );
};

export default EditModal;