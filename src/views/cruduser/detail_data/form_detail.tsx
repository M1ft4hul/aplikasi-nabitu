import Grid from '@mui/material/Grid'
import UserDetail from './user_detail'

const DetailUsers = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UserDetail />
      </Grid>
    </Grid>
  )
}

export default DetailUsers
