import React from 'react';
import axios from 'axios';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Loading from '../component/Loading';
import ShowGit from '../component/ShowGit';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:0// 0 没搜索， 1 后台还没响应数据为接收 2 数据接收完
    }
  }
  handleSubmit(e){
    e.preventDefault();
    // console.log(this.refs.gitname.getValue());
    this.setState({
      wait:1
    })
    let value = this.refs.gitname.getValue();
    axios.get(`https://api.github.com/users/${value}`)
      .then( res => this.setState({data:res.data,wait:2}) )
      .catch( error => {alert(error);this.setState({wait:0})} )
    this.refs.form.reset()
  }
  render () {
    let showGitinfo = this.state.wait==0 ? null :
      this.state.wait==1 ? <Loading /> : <ShowGit gitInfo={this.state.data} />
    return(
      <div className='about-wrap'>
        {/* <MuiThemeProvider>
          <FlatButton label="apple" primary={true} style={{border:'1px solid #ccc'}}/>
        </MuiThemeProvider>*/}

        {/* <FlatButton label="apple" primary={true} style={{border:'1px solid #ccc'}}/>
        <FlatButton label="watermelon" secondary={true} style={{border:'1px solid #ccc'}}/>
        <FlatButton label="orange" primary={true} style={{border:'1px solid #ccc'}}/> */}
        <div className='git-card'>
          <h2>Search Git Info</h2>
          <form className='about-form' ref='form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField hintText="Hint Text" ref='gitname' hintText='github username' underlineFocusStyle={{borderColor:'#EF5350'}}/>
            <RaisedButton label="Search" secondary={true} style={{marginLeft:'10px'}}/>
          </form>
          {showGitinfo}
        </div>
      </div>
    )
  }
}

export default About;
