import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import Youtube from "./apis/youtube";
import VideoList from "./components/videoList";
import VideoDetails from "./components/videoDetail";
export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };


  componentDidMount(){
    this.onVideoSubmit('ed sheeran')
  }
  onVideoSubmit = async (videoName) => {
    const res = await Youtube.get("/search", {
      params: {
        q: videoName,
      },
    });
    console.log(res.data.items);
    this.setState({ videos: res.data.items,
       selectedVideo: res.data.items[0] 
      });
  };

  onVideoSelect = (video) => {
    console.log("from the app", video);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onVideoSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
          {/* length{this.state.videos.length} */}
        </div>
      </div>
    );
  }
}
