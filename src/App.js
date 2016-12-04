import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';//2

import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
import LeftNav from './component/LeftNav';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:'Home',
      showLeftNav:false
    }
  }
  getChildContext(){//2
    return{muiTheme:getMuiTheme()}
  }
  componentWillMount(){
    this.setTitle();
    // if(window.innerWidth>760){
    //   this.setState({showLeftNav:true})
    // }
    this.setNavBar();
  }
  componentDidMount(){
    // let _this = this;
    // window.onresize=function(){
    //   if(window.innerWidth>760){
    //     _this.setState({showLeftNav:true})
    //   }else{
    //     _this.setState({showLeftNav:false})
    //   }
    // }
    window.onresize=this.setNavBar.bind(this)
  }
  setNavBar(){
    this.setState({
      showLeftNav:window.innerWidth>760 ? true : false
    })
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
        {this.state.showLeftNav ? <LeftNav title={this.state.title} /> : <NavHeader title={this.state.title} />}
        <div className='main'>{this.props.children}</div>
        {this.state.showLeftNav ? null : <NavFooter />}
      </div>
    )
  }
}
App.childContextTypes={
  muiTheme:React.PropTypes.object
}
export default App;
