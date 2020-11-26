import React from 'react';
import SearchBar from "./searchBar";
import youtube from "../apis/youtube";
import VideoList from "./videoList";

const KEY = 'AIzaSyBeKMv4VYaHMW2RWdcAe1KnH-79d5GWvEk';

class App extends React.Component {

    state = { videos: []};

    onTextSubmit= async text=> {
        const response = await youtube.get('/search', {
            params: {
                q: text,
                part: "snippet",
                maxResults: 5,
                key: KEY
            }
        });

        this.setState({videos: response.data.items});
    };

    render() {
        return (<div className="ui container">
            <SearchBar onFormSubmit={this.onTextSubmit}/>
           <VideoList videos={this.state.videos}/>
        </div>
        );
    }
}
export default App;