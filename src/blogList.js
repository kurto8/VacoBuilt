import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

export default function BlogList({ posts }) {
  return (
    <>
      <Typography
        variant='h5'
        component='h4'
        color='primary.dark'
        sx={{ pt: 12, pl: 2 }}
        gutterBottom>
        BLOG LIST
      </Typography>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id} disablePadding>
            <ListItemButton>
              <ListItemText primary={post.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
