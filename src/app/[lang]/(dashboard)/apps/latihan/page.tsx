import { Grid } from '@mui/material'

import Typography from '@mui/material/Typography'
import FormInputLatihan from '@/views/crudlatihan/FormInputLatihan'
import KitchenSink from '@/views/crudlatihan/form_latihan'

const latihans = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <KitchenSink />
      </Grid>
      <Grid item xs={12}>
        {/* <FormInputLatihan /> */}
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Tambah Data</Typography>
      </Grid>
    </Grid>
  )
}

export default latihans
