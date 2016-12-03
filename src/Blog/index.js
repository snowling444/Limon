import React from 'react';

import BlogCard from '../component/BlogCard';

let data=[
  {index:1,title:'Today',desc:'不开心'},
  {index:2,title:'Today',desc:'不开心'},
  {index:3,title:'Today',desc:'不开心'},
  {index:4,title:'Today',desc:'不开心'}
]
class Blog extends React.Component {
  render () {
    let cards=data.map((item,i) => <BlogCard {...item} key={i} />)
    return(
      <div className='blog-wrap'>
        {cards}
      </div>
    )
  }
}

export default Blog;
