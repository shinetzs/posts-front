import React from 'react';
import styles from './CreatePostForm.module.css';

const CreatePostForm = ({ newPost, onInputChange, onCreatePost }) => {
  return (
    <div className={styles.createPostContainer}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Nombre del post"
          value={newPost.name}
          onChange={onInputChange}
          name="name"
          className={styles.createInput}
        />
        <input
          type="text"
          placeholder="Descripción del post"
          value={newPost.description}
          onChange={onInputChange}
          name="description"
          className={styles.createInput}
        />
      </div>
      <button onClick={onCreatePost} className={styles.createButton}>
        Crear
      </button>
    </div>
  );
};

export default CreatePostForm;
