'use client'
import Typography from '@mui/material/Typography'

import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { User } from '@/models/Users'
import handleUser from '@/app/api/HandleUser'
import UserDetail from '@/views/cruduser/detail_data/user_detail'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomAvatar from '@core/components/mui/Avatar'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'
// Type Imports
import type { ThemeColor } from '@core/types'
import EditUserInfo from '@components/dialogs/edit-user-info'
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import { Profil } from '@/models/Profile'
import handleProfile from '@/app/api/HandleProfil'

const DetailUser = ({ params }: { params: { id: number } }) => {
  // const [userDetail, setUserDetail] = useState<User>()
  const [userDetail, setUserDetail] = useState<Profil>()

  const id = params.id

  useEffect(() => {
    id && getUserById()
  }, [id])

  const getUserById = async () => {
    // const api = `/users/${id}`
    const api = `/profile/${id}`

    try {
      // const res: any = await handleUser.getUsers(api)
      const res: any = await handleProfile.getProfile(api)

      if (res) {
        setUserDetail(res)
      } else {
        console.log(`user not found`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // console.log(userDetail?.data.age)
  const buttonProps = (children: string, color: ThemeColor, variant: ButtonProps['variant']): ButtonProps => ({
    children,
    color,
    variant
  })
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>View Users</Typography>
      </Grid>
      <Grid item xs={12} lg={4} md={5}>
        <Card>
          <CardContent className='flex flex-col pbs-12 gap-6'>
            <div className='flex flex-col gap-6'>
              <div className='flex items-center justify-center flex-col gap-4'>
                <div className='flex flex-col items-center gap-4'>
                  <CustomAvatar alt='user-profile' src='/images/avatars/1.png' variant='rounded' size={120} />
                  <Typography variant='h5'>{userDetail?.data.fullname}</Typography>
                </div>
                <Chip label='Nasabah' color='secondary' size='small' variant='tonal' />
              </div>
            </div>
            <div>
              <Divider className='mlb-4' />
              <div className='flex flex-col gap-2'>
                <div className='flex items-center flex-wrap gap-x-1.5'>
                  <Typography className='font-medium' color='text.primary'>
                    Umur:
                  </Typography>
                  <Typography>{userDetail?.data.age}</Typography>
                </div>
                <div className='flex items-center flex-wrap gap-x-1.5'>
                  <Typography className='font-medium' color='text.primary'>
                    Alamat:
                  </Typography>
                  <Typography>{userDetail?.data.alamat}</Typography>
                </div>
              </div>
            </div>
            <div className='flex gap-4 justify-center'>
              <OpenDialogOnElementClick
                element={Button}
                elementProps={buttonProps('Edit', 'primary', 'contained')}
                dialog={EditUserInfo}
                // dialogProps={{ data: userData }}
              />
              <OpenDialogOnElementClick
                element={Button}
                elementProps={buttonProps('Suspend', 'error', 'tonal')}
                dialog={ConfirmationDialog}
                dialogProps={{ type: 'suspend-account' }}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default DetailUser
