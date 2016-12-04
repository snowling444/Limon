import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';//2

import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';

class App extends React.Component {
  constructor(){
    super();
    this.state={title:'Home'}
  }
  getChildContext(){//2
    return{muiTheme:getMuiTheme()}
  }
  componentWillMount(){
    this.setTitle();
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true) ? 'Home' :
            this.props.router.isActive('/Blog') ? 'Blog' :
            this.props.router.isActive('/Work') ? 'Work' :
            this.props.router.isActive('/About') ? 'About' : 'Blog'
    })
  }
  render () {
    // console.log(this.props)
    return(
      <div className='my-wrap'>
        <NavHeader title={this.state.title}/>
        <div className='main'>{this.props.children}</div>
        <NavFooter />
      </div>
    )
  }
}
App.childContextTypes={
  muiTheme:React.PropTypes.object
}
export default App;
