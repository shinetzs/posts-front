import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost, createPost } from '../../redux/posts/postApi';
import InputSearch from '../InputSearch/InputSearch';
import PostTable from '../PostTable/PostTable';
import CreatePostForm from '../CreatePostForm/CreatePostForm';
import styles from './PostList.module.css';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const [newPost, setNewPost] = useState({
    name: '',
    description: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleCreatePost = () => {
    if (newPost.name && newPost.description) {
      dispatch(createPost(newPost));
      setNewPost({
        name: '',
        description: '',
      });
    }
  };

  const filteredPosts = Array.isArray(posts)
    ? posts.filter((post) =>
        post.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className={styles.postListContainer}>
      <InputSearch onSearch={handleSearch} />

      <div className={styles.postList}>
        {loading && <p>Cargando posts...</p>}
        {error && <p>Error: {error}</p>}
        <PostTable posts={filteredPosts} onDelete={handleDelete} />
      </div>

      <CreatePostForm
        newPost={newPost}
        onInputChange={handleInputChange}
        onCreatePost={handleCreatePost}
      />
    </div>
  );
};

export default PostList;
