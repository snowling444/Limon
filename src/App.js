import React from 'react';

import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';

class App extends React.Component {
  constructor(){
    super();
    this.state={title:'Home'}
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
            this.props.router.isActive('/Work') ? 'Work' : 'About'
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
export default App;
