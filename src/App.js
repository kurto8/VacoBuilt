import './App.css';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';
import { useEffect, useState } from 'react';
import BlogList from './blogList';
import BlogEntries from './blogEntries';
import EntryModal from './entryModal';


const url = 'https://us-central1-mbtcandidate.cloudfunctions.net/posts';
const username = 'kwaterbury';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentText, setCurrentText] = useState('');


  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  function handleAddOrEditInfo(bool, id, title, text) {
    setOpenModal(bool);
    setCurrentId(id);
    setCurrentTitle(title);
    setCurrentText(text);
  }

  async function fetchData() {
    try {
      const jsonData = await fetch(`${url}/${username}`);
      const data = await jsonData.json();
      setPosts(data.response);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleCreate(title, text) {
    try {
      const jsonData = await fetch(`${url}/${username}`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          title,
          text,
        }),
      });
      const data = await jsonData.json();
      console.log(data);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleEdit(id, title, text) {
    try {
      const jsonData = await fetch(`${url}/${username}/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          title,
          text,
        }),
      });
      const data = await jsonData.json();
      console.log(data);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete(id) {
    try {
      const jsonData = await fetch(`${url}/${username}/${id}`, {
        method: 'DELETE',
      });
      const data = await jsonData.json();
      console.log(data);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteAll() {
    try {
      const jsonData = await fetch(`${url}/${username}`, {
        method: 'DELETE',
      });
      const data = await jsonData.json();
      console.log(data);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  console.log(posts);

  return (
    <Box Box sx={{ flexGrow: 1 }}>
      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {!loading && <BlogList posts={posts} />}
          </Grid>
          <Grid item xs={9}>
            {!loading && (
              <BlogEntries
                posts={posts}
                handleAddOrEditInfo={handleAddOrEditInfo}
                handleDelete={handleDelete}
                handleDeleteAll={handleDeleteAll}
              />
            )}
          </Grid>
        </Grid>
      </Container>
      {openModal && (
        <EntryModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          id={currentId}
          title={currentTitle}
          text={currentText}
          handleEdit={handleEdit}
          handleCreate={handleCreate}
        />
      )}
    </Box>
  );
}
