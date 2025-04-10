import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InputSearch from './InputSearch';

describe('InputSearch', () => {
  it('renders input and button', () => {
    render(<InputSearch onSearch={() => {}} />);

    const input = screen.getByPlaceholderText('Buscar por nombre...');
    const button = screen.getByText('Buscar');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('calls onSearch with the correct value when button is clicked', () => {
    const mockOnSearch = vi.fn();
    render(<InputSearch onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Buscar por nombre...');
    const button = screen.getByText('Buscar');

    fireEvent.change(input, { target: { value: 'Post 1' } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith('Post 1');
  });
});
