import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        //app first loads, shows this
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async term => {
        //console.log(term); --> this to youtube api
        const response = await youtube.get(
            '/search', {
            params: {
                q: term
            }
        });
        // console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        // console.log('from app ', video);
        this.setState({selectedVideo: video});
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />

                <VideoDetail video={this.state.selectedVideo} />

                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}  />
            </div>
        );
    }
}

export default App;