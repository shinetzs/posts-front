import React from 'react';
import styles from './PostTable.module.css';

const PostTable = ({ posts, onDelete }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.postsTable}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
      </table>
      <div className={styles.tableBodyWrapper}>
        <table className={styles.postsTable}>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan="3" className={styles.noData}>
                  Sin datos disponibles.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.name}</td>
                  <td>{post.description}</td>
                  <td>
                    <button
                      onClick={() => onDelete(post.id)}
                      className={styles.deleteButton}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostTable;
