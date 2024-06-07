import FormInputLatihan from '@/views/crudlatihan/FormInputLatihan'
import Typography from '@mui/material/Typography'

import { Grid } from '@mui/material'

const TambahUser = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>Form Tambah Data User</Typography>
      </Grid>
      <Grid item xs={12}>
        {/* <FormInputLatihan /> */}
      </Grid>
    </Grid>
  )
}
export default TambahUser
