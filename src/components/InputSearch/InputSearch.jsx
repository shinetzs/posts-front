import React, { useRef } from 'react';
import styles from './InputSearch.module.css';

const InputSearch = ({ onSearch }) => {
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    if (searchInputRef.current) {
      onSearch(searchInputRef.current.value);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        ref={searchInputRef}
        className={styles.searchInput}
      />
      <button onClick={handleSearchClick} className={styles.searchButton}>
        Buscar
      </button>
    </div>
  );
};

export default InputSearch;
