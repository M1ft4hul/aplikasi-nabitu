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
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'
import data from '@/data/searchData'
import { redirect } from 'next/dist/server/api-utils'
import { ButtonsReset, ButtonsSimpan } from './button'
import { saveLatihan } from '@/libs/actions'
import { useFormState } from 'react-dom'

const FormEditLatihan = () => {
  // validation
  const [state, formAction] = useFormState(saveLatihan, null)
  return (
    <Card>
      <CardHeader title='Tambah Soal Latihan' />
      <Divider />
      <form action={formAction}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant='body2' className='font-medium'>
                Silahkan input data soal
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Judul'
                placeholder='Silahkan masukkan judul pertanyaan '
                name='judul'
                id='judul'
              />
              {/* menampilkan pesan error */}
              <div id='judul-error' aria-live='polite' aria-atomic='true'>
                <p className='text-red-700'>{state?.Error?.judul}</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Pertanyaan'
                placeholder='Silahkan masukkan soal pertanyaan'
                name='isi'
                id='isi'
              />
              {/* menampilkan pesan error */}
              <div id='isi-error' aria-live='polite' aria-atomic='true'>
                <p className='text-red-700'>{state?.Error?.isi}</p>
              </div>
            </Grid>
          </Grid>
          {/* pesan error */}
          <div id='message-error' aria-live='polite' aria-atomic='true'>
            <p className='text-red-700'>{state?.message}</p>
          </div>
        </CardContent>
        <Divider />
        <CardActions>
          <ButtonsSimpan label='Update Data' />
          <ButtonsReset />
        </CardActions>
      </form>
    </Card>
  )
}

export default FormEditLatihan
