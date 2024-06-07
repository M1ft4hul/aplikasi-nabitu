import Typography from '@mui/material/Typography'

import { Grid } from '@mui/material'
import FormInputUser from '@/views/cruduser/create/create_user'

const TambahUser = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>Form Tambah Data User</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormInputUser />
      </Grid>
    </Grid>
  )
}
export default TambahUser
