import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Loading extends React.Component{
  render(){
    return(
      <div style={{textAlign:'center',marginTop:'20px'}}>
        <CircularProgress size={80} thickness={5} color={'#EF5350'}/>
      </div>
    )
  }
}

export default Loading;
