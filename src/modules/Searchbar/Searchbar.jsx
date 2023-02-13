import { useState } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import initialState from './initialState';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { search } = state;
  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.label}>Search</span>
          <ImSearch />
        </button>

        <input
          name="search"
          value={search}
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class Searchbar extends Component {
//   state = {
//     search: '',
//   };
//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     const { onSubmit } = this.props;
//     onSubmit({ ...this.state });
//     this.reset();
//   };
//   reset() {
//     this.state({ search: '' });
//   }

//   render() {
//     const { search } = this.state;
//     const { handleChange, handleSubmit } = this;
//     return (
//       <header className={styles.searchbar}>
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <button type="submit" className={styles.button}>
//             <span className={styles.label}>Search</span>
//             <ImSearch />
//           </button>

//           <input
//             name="search"
//             value={search}
//             className={styles.input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }
// export default Searchbar;
// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
