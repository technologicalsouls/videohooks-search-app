import axios from 'axios';

const KEY = 'AIzaSyB8cd5EN2R4DPTUbOkLEuQMCkfnkuG97kM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

