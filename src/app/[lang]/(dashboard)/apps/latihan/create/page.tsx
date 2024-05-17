import FormInputLatihan from '@/views/crudlatihan/FormInputLatihan'
import Typography from '@mui/material/Typography'

import { Grid } from '@mui/material'

const TambahData = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>Form Tambah Data Latihan</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormInputLatihan />
      </Grid>
    </Grid>
  )
}
export default TambahData
