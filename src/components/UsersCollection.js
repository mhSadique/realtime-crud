import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/features/users/usersSlice';
import UserSingle from './UserSingle';

const UsersCollection = () => {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers)
    }, [dispatch]);

    return (
        <Container sx={{
            mt: 4
        }}>
            <Paper elevation={4}>
                <Typography
                    component='h3'
                    variant='h4'
                    sx={{

                    }}
                >
                    Users Collection
                </Typography>
                <Grid
                    container
                    sx={{
                        gap: 5,
                        width: '100%',
                        p: 3

                    }}
                >
                    {users.map(user => <UserSingle key={user.id} user={user} />)}
                </Grid>
            </Paper>
        </Container>
    );
};

export default UsersCollection;