import { PropTypes } from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className={styles.gallery}>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          onClick={onClick}
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
ImageGallery.defaultProps = {
  items: [],
};
ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ).isRequired,
};
