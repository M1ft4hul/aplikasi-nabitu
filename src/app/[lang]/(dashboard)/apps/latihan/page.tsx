import { Grid } from '@mui/material'

import Typography from '@mui/material/Typography'
import FormInputLatihan from '@/views/crudlatihan/FormInputLatihan'
import FormLatihan from '@/views/crudlatihan/form_latihan'
import TabelData from '@/views/crudlatihan/crud/tabel-latihan'
import { ButtonsTambah } from '@/views/crudlatihan/button'

const latihans = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ButtonsTambah />
      </Grid>
      <Grid item xs={12}>
        <FormLatihan content={<TabelData />} />
      </Grid>
    </Grid>
  )
}

export default latihans
