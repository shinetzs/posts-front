import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, test, expect, vi } from 'vitest';
import PostList from './PostList';

const mockStore = {
  posts: {
    posts: [
      { id: 1, name: 'Post 1', description: 'Descripción 1' },
      { id: 2, name: 'Post 2', description: 'Descripción 2' },
      { id: 3, name: 'Post 3', description: 'Descripción 3' },
    ],
    loading: false,
    error: null,
  },
  dispatch: vi.fn(),
};

const renderWithStore = (store = mockStore) => {
  const storeInstance = configureStore({
    reducer: {
      posts: (state = store.posts) => state,
    },
  });

  return render(
    <Provider store={storeInstance}>
      <PostList />
    </Provider>
  );
};

describe('PostList', () => {
  test('Search filter shows only the corresponding posts', async () => {
    renderWithStore();

    const inputSearch = screen.getByPlaceholderText(/buscar.../i);
    fireEvent.change(inputSearch, { target: { value: 'Post 2' } });
    fireEvent.click(screen.getByText('Buscar'));

    await waitFor(() => {
      expect(screen.getByText('Post 2')).toBeInTheDocument();
      expect(screen.queryByText('Post 1')).toBeNull();
      expect(screen.queryByText('Post 3')).toBeNull();
    });
  });
});
