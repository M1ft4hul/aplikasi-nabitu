import Typography from '@mui/material/Typography'

import { Grid } from '@mui/material'
import FormEditLatihan from '@/views/crudlatihan/FormEditLatihan'

const EditData = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>Form Edit Latihan</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormEditLatihan />
      </Grid>
    </Grid>
  )
}
export default EditData
