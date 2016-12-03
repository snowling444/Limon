import React from 'react';
import axios from 'axios';

import BlogCard from '../component/BlogCard';
import Loading from '../component/Loading';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentWillMount(){
    axios.get('https://raw.githubusercontent.com/snowling444/Limon/master/data/blogcard.json?a='+Math.random())
     .then( res => this.setState({data:res.data,wait:false}))
  }
  render () {
    return(
      <div className='blog-wrap'>
        {this.state.wait ? <Loading /> : this.state.data.map((item,i) => <BlogCard {...item} key={i} />)}
      </div>
    )
  }
}

export default Blog;
