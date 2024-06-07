'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'
import { ButtonsReset, ButtonsSimpan } from '../button'

const FormInputUser = () => {
  return (
    <Card>
      <CardHeader title='Tambah User' />
      <Divider />
      <form>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant='body2' className='font-medium'>
                Silahkan input user baru
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Nama Lengkap'
                placeholder='Silahkan Isi Nama Lengkap '
                name='fullname'
                id='fullname'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth label='Umur' placeholder='Silahkan Isi Umur' name='age' id='age' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                rows={4}
                multiline
                fullWidth
                label='Alamat Rumah'
                defaultValue='Silahkan Isi Alamat Rumah'
                id='textarea-outlined-static'
              />
            </Grid>
          </Grid>
          
        </CardContent>
        <Divider />
        <CardActions>
          <ButtonsSimpan label='save' />
          <ButtonsReset />
        </CardActions>
      </form>
    </Card>
  )
}

export default FormInputUser
