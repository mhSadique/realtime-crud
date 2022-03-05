import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const UserSingle = ({ user }) => {

    const onEditUser = () => {
        console.log('editing');
    };

    const onDeleteUser = () => {
        console.log('deleting');
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