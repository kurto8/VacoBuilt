import {
  Paper,
  Typography,
  Button,
  Stack,
  Card,
  CardActions,
  CardContent,
} from '@mui/material';

export default function BlogEntries({ posts, handleAddOrEditInfo, handleDelete, handleDeleteAll }) {
  
  return (
    <>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={5}
        padding={5}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => handleAddOrEditInfo(true)}>
          Add Post
        </Button>
        <Typography
          variant='h3'
          component='h4'
          color='primary.dark'
          gutterBottom>
          BLOG ENTRIES
        </Typography>
        <Button variant='contained' color='error' onClick={handleDeleteAll}>
          Delete All
        </Button>
      </Stack>
      <Stack spacing={2}>
        {posts.map((post) => (
          <Paper key={post.id}>
            <Card>
              <CardContent>
                <Typography variant='h6' component='h4' gutterBottom>
                  {`${new Date(post.timestamp).toDateString()}  -  ${
                    post.title
                  }`}
                </Typography>
                <Typography variant='body'>{post.text}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                  variant='outlined'
                  color='primary'
                  onClick={() =>
                    handleAddOrEditInfo(true, post.id, post.title, post.text)
                  }>
                  Edit
                </Button>
                <Button
                  variant='outlined'
                  color='error'
                  onClick={() => handleDelete(post.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Paper>
        ))}
      </Stack>
    </>
  );
}
