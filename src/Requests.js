const key = 'b7b7d75659538f512efdae15b82753f4'

const requests = {
    requestPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1',
    requestTrending: 'https://api.themoviedb.org/3/trending/all/day?api_key=${key}',
    requestLatest: 'https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US',
    requestUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1',
    requestTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1',

};

export default requests
