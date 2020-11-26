import axios from 'axios';

const KEY = 'AIzaSyBeKMv4VYaHMW2RWdcAe1KnH-79d5GWvEk';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3'
});


