import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',

  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    key: '31991088-557b1f719244b12b6790ca772',
  },
});

export const fetchImages = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
      per_page: 12,
    },
  });
  return data;
};
