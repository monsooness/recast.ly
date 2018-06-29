class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      videos: window.exampleVideoData,
      video: window.exampleVideoData[0]
      //replace above by calling search(options, afterSearchState)
      //this.prop.search({query: 'pug goes to petsmart', max: 5, key: window.YOUTUBE_API_KEY}, afterSearchState);
    };

    //defining a function that occurs on a click
  }

  render() {
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} itemClick={this.entryTitleClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
  
  entryTitleClick(videoObj) {
    this.setState({ video : videoObj});
  }


  afterSearchState(collection) {
    this.setState({videos: collection, video: collection[0]});
  }
  
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
