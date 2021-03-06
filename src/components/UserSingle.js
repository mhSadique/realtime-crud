import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditModal from './EditModal';

const UserSingle = ({ user }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const onEditUser = () => {
        console.log('editing');
        handleModalOpen();
    };

    const onDeleteUser = () => {
        const confirm = window.confirm('Do you want to delete the user?');
        if (confirm) {
            fetch(`https://realtimecrudapp.herokuapp.com/user/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('User deleted');
                    }
                })
        }
    };

    return (
        <Grid item
            sx={{
                flexGrow: 1,
                flexBasis: '33.333%'
            }}
        >
            <Card>
                <CardContent>
                    <Typography
                        component='div'
                        variant='h5'
                    >
                        {user.name}
                    </Typography>
                    <Typography
                        component='div'
                        variant='h6'
                    >
                        {user.email}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        variant='contained'
                        color='success'
                        size='small'
                        onClick={onEditUser}
                    >
                        Edit
                    </Button>
                    <EditModal
                        modalOpen={modalOpen}
                        onClose={handleModalClose}
                        user={user}
                        setModalOpen={setModalOpen}
                    />
                    <Button
                        variant='contained'
                        color='error'
                        size='small'
                        onClick={onDeleteUser}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default UserSingle;