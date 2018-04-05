import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail'

const YOUTUBE_API_KEY = "AIzaSyAK7iuUqK6rO2d2d9x5_2LFSc9KFYzJCFk";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Portland Timbers');
    }

    videoSearch(term){
        YTSearch({key: YOUTUBE_API_KEY, term: term}, videos => {
            this.setState({ videos, selectedVideo: videos[0] });
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={(term => this.videoSearch(term))}/>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 3}}>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div style={{flex: 2}}>
                        <VideoList
                            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                            videos={this.state.videos}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));