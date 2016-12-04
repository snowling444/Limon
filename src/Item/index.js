import React from 'react';
import axios from 'axios';

import hljs from 'highlight.js';

import Loading from '../component/Loading';
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
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    return(
      <div className='item-wrap'>
        {this.state.data.length==0 ? <Loading /> :
         <div className='post-content' dangerouslySetInnerHTML={{__html:marked(this.state.data)}} />}
      </div>
    )
  }
}

export default Item;
