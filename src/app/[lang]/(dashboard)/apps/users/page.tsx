import { ButtonsTambah } from '@/views/cruduser/button'
import DataUsers from '@/views/cruduser/form_user'
import { Grid } from '@mui/material'

const users = async () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ButtonsTambah />
      </Grid>
      <Grid item xs={12}>
        <DataUsers />
      </Grid>
    </Grid>
  )
}

export default users
