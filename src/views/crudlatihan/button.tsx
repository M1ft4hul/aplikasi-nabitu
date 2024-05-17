// MUI Imports
import Button from '@mui/material/Button'

const ButtonsHapus = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='contained' href='#' className='hover:text-[var(--mui-palette-primary-contrastText)]'  startIcon={<i className='tabler-trash' />}>
        Edit Data
      </Button>
    </div>
  )
}

export default ButtonsHapus
