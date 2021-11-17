import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function UpBar() {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

        </div>

    )
}