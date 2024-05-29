import Typography from '@mui/material/Typography'

import { Grid } from '@mui/material'
import DetailUsers from '@/views/cruduser/detail_data/form_detail'

const DetailUser = async () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>View Users</Typography>
      </Grid>
      <Grid item xs={12}>
        <DetailUsers/>
      </Grid>
    </Grid>
  )
}
export default DetailUser
