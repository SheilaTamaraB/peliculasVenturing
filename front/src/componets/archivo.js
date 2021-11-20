import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios'

export default function Archivo() {

    function handleFileUpload(e) {
        const selectedFile = e.target.files[0];
        const formData = new FormData();
        formData.append('uploadFile', selectedFile)

        axios.post(`http://localhost:7000/api/uploadPeliculasFile`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(() => {
            window.location.reload()
        }).catch(err=>console.log(err))

    }

    return (
        <Box sx={{ width: 'auto', alignItems: 'center', textAlign: 'center' }}>
            <input onChange={(e) => handleFileUpload(e)} id={'fileInputId'} type='file' hidden />
            <Button variant="outlined" onClick={() => { document.getElementById('fileInputId').click() }}>Subir Archivo</Button>
        </Box>
    )
}