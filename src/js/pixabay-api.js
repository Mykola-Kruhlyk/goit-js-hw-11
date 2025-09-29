import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '52528070-8ab6f0ab3cc039c01ba9e9076';

export default function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios.get(`${API_URL}?${searchParams}`).then(result => {
    return result.data.hits;
  });
}
