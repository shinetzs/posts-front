import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const POST_API_URL = `${import.meta.env.VITE_API_URL}/posts`;

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (allData, { rejectWithValue }) => {
    try {
      const response = await axios.get(POST_API_URL, allData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axios.post(POST_API_URL, postData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${POST_API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
