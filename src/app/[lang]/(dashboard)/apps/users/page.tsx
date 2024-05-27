import TabelDataUser from '@/views/cruduser/crud/data-user'
import DataUsers from '@/views/cruduser/form_user'
import { Grid } from '@mui/material'

const users = async () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <DataUsers contents={<TabelDataUser />} />
      </Grid>
    </Grid>
  )
}

export default users
