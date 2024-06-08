'use client'

// React Imports
import { ChangeEvent, useEffect, useState } from 'react'

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
import { Profil } from '@/models/Profile'
import handleProfile from '@/app/api/HandleProfil'
import { useRouter } from 'next/navigation'

const FormInputUser = () => {
  const router = useRouter()
  const [users, setUsers] = useState<Profil[]>([])
  const [newUser, setNewUser] = useState({
    fullname: '',
    age: '',
    alamat: '',
    users_id: '1'
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewUser({ ...newUser, [name]: value })
  }

  const handleAddUser = async (newUser: any) => {
    try {
      const res = await handleProfile.createProfile('/profile', newUser)
      setUsers([...users, res])
      console.log('User added successfully:', res)
      // Bersihkan form setelah berhasil menambahkan user
      setNewUser({
        fullname: '',
        age: '',
        alamat: '',
        users_id: '1' // Diisi kembali dengan angka 1
      })
      router.push('/apps/users')
    } catch (error) {
      console.error('Error adding user:', error)
    }
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    handleAddUser(newUser)
  }

  return (
    <Card>
      <CardHeader title='Tambah User' />
      <Divider />
      <form onSubmit={handleSubmit}>
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
                value={newUser.fullname}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                label='Umur'
                placeholder='Silahkan Isi Umur'
                name='age'
                id='age'
                value={newUser.age}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                rows={4}
                multiline
                fullWidth
                label='Alamat Rumah'
                name='alamat'
                value={newUser.alamat}
                onChange={handleChange}
                placeholder='Silahkan Alamat rumah'
                id='alamat'
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
