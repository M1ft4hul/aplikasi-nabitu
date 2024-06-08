import { ButtonsTambah } from '@/views/crudposts/button'
import DataPosts from '@/views/crudposts/form_post'
import { Grid } from '@mui/material'

const posts = async () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ButtonsTambah />
      </Grid>
      <Grid item xs={12}>
        <DataPosts />
      </Grid>
    </Grid>
  )
}

export default posts