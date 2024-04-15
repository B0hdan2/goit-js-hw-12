import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export async function requestToServer(query, page, perPage) {
  const API_KEY = '43354074-012c59d6306474dc1e40056e0';

  const response = await axios({
    params: {
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      key: API_KEY,
      per_page: perPage,
      page,
    },
  });

  return response;
}
