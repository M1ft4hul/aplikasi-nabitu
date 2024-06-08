import FormInputPost from "@/views/crudposts/create/create_posts"
import { Grid, Typography } from "@mui/material"

const TambahPost = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>Form Tambah Data Post</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormInputPost />
      </Grid>
    </Grid>
  )
}

export default TambahPost
