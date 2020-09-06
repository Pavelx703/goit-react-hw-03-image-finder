import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => (
  <>
    <ul className={styles.ImageGallery}>
      {images.length > 0 &&
        images.map(image => (
          <ImageGalleryItem data={image} key={image.id} onClick={onClick} />
        ))}
    </ul>
  </>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
