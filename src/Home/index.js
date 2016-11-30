import React from 'react';

class Home extends React.Component {
  render () {
    return(
      <div className='home-wrap'>
        <div className='home-cover'>
          <div className='home-item'>
            <h3>HI,I'M Snow</h3>
            <p>WEB DEVELOPER</p>
            <button type="button" className="btn btn-info">
              <a href='https://snowling444.github.io' style={{color:'#fff'}}>HIRE ME</a>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
