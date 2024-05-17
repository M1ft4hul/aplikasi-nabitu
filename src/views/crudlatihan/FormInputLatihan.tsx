// React Imports
// import { useState } from 'react'
import { db } from '@/libs'
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
import data from '@/data/searchData'
import { redirect } from 'next/dist/server/api-utils'

const FormInputLatihan = () => {
  async function createLatihan(formData: FormData) {
    'use server'

    // cek input dari user dan pastikan datanya valid
    const judul = formData.get('judul') as string;
    const isi =  formData.get('isi') as string;

    // buat data baru di database
    // const latihan = await db.latihan.create({
    //   data: {
    //     judul,
    //     isi
    //   }
    // });
    // console.log(latihan);

    // action={createLatihan}

    // kembali ke halaman data
    // redirect('/dashboards/index');
  }
  return (
    <Card>
      <CardHeader title='Tambah Soal Latihan' />
      <Divider />
      <form>
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Pertanyaan'
                placeholder='Silahkan masukkan soal pertanyaan'
                name='isi'
                id='isi'
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button type='submit' variant='contained' className='mie-2'>
            Submit
          </Button>
          <Button type='reset' variant='tonal' color='secondary'>
            Reset
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormInputLatihan
