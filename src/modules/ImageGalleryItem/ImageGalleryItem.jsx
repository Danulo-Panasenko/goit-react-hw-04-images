import { PropTypes } from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => {
  return (
    <li onClick={() => onClick(largeImageURL, tags)} className={styles.item}>
      <img src={webformatURL} alt={tags} className={styles.image} />
    </li>
  );
};
export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};
