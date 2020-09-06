import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ data, onClick }) => (
  <li onClick={onClick} className={styles.ImageGalleryItem}>
    <img
      src={data.webformatURL}
      id={data.id}
      alt={data.tags}
      className={styles.ImageGalleryItem_image}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;