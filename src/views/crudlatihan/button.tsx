'use client'
// MUI Imports
import Button from '@mui/material/Button'
import { useFormStatus } from 'react-dom'

export const ButtonsHapus = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='contained' href='#' color='error' startIcon={<i className='tabler-trash' />}>
        Hapus
      </Button>
    </div>
  )
}

export const ButtonsEdit = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='contained' href='#' color='warning' startIcon={<i className='tabler-edit' />}>
        Edit
      </Button>
    </div>
  )
}

// done
export const ButtonsTambah = () => {
  return (
    <div className='flex gap-4'>
      <Button
        variant='contained'
        href='/apps/latihan/create'
        color='primary'
        startIcon={<i className='tabler-file-plus' />}
      >
        Tambah Data
      </Button>
    </div>
  )
}

export const ButtonsReset = () => {
  return (
    <div className='flex gap-4'>
      <Button
        variant='contained'
        href='/apps/latihan'
        color='secondary'
        startIcon={<i className='tabler-arrow-back-up' />}
      >
        Kembali
      </Button>
    </div>
  )
}

export const ButtonsSimpan = ({ label }: { label: string }) => {
  const { pending } = useFormStatus()
  return (
    <div className='flex gap-4'>
      <Button
        variant='contained'
        type='submit'
        color='success'
        endIcon={<i className='tabler-send' />}
        disabled={pending}
      >
        {label === 'save' ? (
          <span>{pending ? 'Proses save...' : 'Simpan Data'}</span>
        ) : (
          <span>{pending ? 'Proses Update...' : 'Update'}</span>
        )}
      </Button>
    </div>
  )
}
