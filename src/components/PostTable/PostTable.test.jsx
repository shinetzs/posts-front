import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PostTable from './PostTable';

describe('PostTable', () => {
  it('renders without crashing', () => {
    render(<PostTable posts={[]} onDelete={() => {}} />);
    expect(screen.getByText('Nombre')).toBeInTheDocument();
  });

  it('shows "Sin datos disponibles." when posts is empty', () => {
    render(<PostTable posts={[]} onDelete={() => {}} />);
    expect(screen.getByText('Sin datos disponibles.')).toBeInTheDocument();
  });

  it('renders posts correctly', () => {
    const mockPosts = [
      { id: 1, name: 'Post 1', description: 'Descripción 1' },
      { id: 2, name: 'Post 2', description: 'Descripción 2' },
    ];

    render(<PostTable posts={mockPosts} onDelete={() => {}} />);
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Descripción 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
    expect(screen.getByText('Descripción 2')).toBeInTheDocument();
  });
});
