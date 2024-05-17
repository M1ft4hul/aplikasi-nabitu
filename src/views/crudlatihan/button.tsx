// MUI Imports
import Button from '@mui/material/Button'

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

export const ButtonsTambah = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='contained' href='#' color='primary' startIcon={<i className='tabler-file-plus' />}>
        Tambah Data
      </Button>
    </div>
  )
}
