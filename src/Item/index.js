import React from 'react';
import axios from 'axios';
var marked = require('marked');
console.log(marked('I am using __markdown__.'));

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    let address =this.props.params.title;
    axios.get(`https://raw.githubusercontent.com/snowling444/Limon/master/data/${address}.md`)
     .then( res => this.setState({data:res.data}) )
  }
  render () {
    let content = this.state.data.length==0 ? 'Wait' : marked(this.state.data);
    return(
      <div className='item-arl'>
        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )
  }
}

export default Item;
