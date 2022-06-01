import logo from './logo.svg';
import './App.css';
import {
  Container,
  Paper,
  Typography,
  Button,
  Stack,
  Divider,
  Card,
  CardActions,
  CardContent,
  Grid,
  GridItem,
} from '@mui/material';
import { useEffect, useState } from 'react';

const url = 'https://us-central1-mbtcandidate.cloudfunctions.net/posts';
const username = 'kwaterbury';

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  async function fetchData() {
    try {
      const jsonData = await fetch(`${url}/${username}`);
      const data = await jsonData.json();
      setPosts(data.response);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete(id) {
    try {
      const jsonData = await fetch(`${url}/${username}/${id}`);
      const data = await jsonData.json();
      setPosts(data.response);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(posts);

  return (
    <Container maxWidth='lg' className='App' flex>
      <Grid container spacing={2}>
        <Grid item>
          <Stack
            spacing={2}
            divider={<Divider orientation='vertical' flexItem />}>
            {!loading &&
              posts.map((post) => (
                <Paper>
                  <Card key={post.id}>
                    <Button variant='text' color='primary'>
                      <Typography variant='h6' component='h4' gutterBottom>
                        {`${post.title}`}
                      </Typography>
                    </Button>
                  </Card>
                </Paper>
              ))}
          </Stack>
        </Grid>
        <Grid item>
          <Stack
            spacing={2}
            divider={<Divider orientation='vertical' flexItem />}>
            {!loading &&
              posts.map((post) => (
                <Paper>
                  <Card key={post.id}>
                    <CardContent>
                      <Typography variant='h6' component='h4' gutterBottom>
                        {`${post.id}` + `${post.timestamp}` + `${post.title}`}
                      </Typography>
                      <Typography variant='body'>{post.text}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant='contained' color='primary'>
                        Edit
                      </Button>
                      <Button
                        variant='contained'
                        color='error'
                        onClick={handleDelete}>
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Paper>
              ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
