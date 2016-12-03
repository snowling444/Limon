import React from 'react';
var marked = require('marked');
console.log(marked('I am using __markdown__.'));

class Item extends React.Component {
  render () {
    let content = this.props.params.title == 0 ? 'First' :
     this.props.params.title == 1 ? 'Second' :'nth'
    return(
      <div>
        {content}
        <div dangerouslySetInnerHTML={{__html:marked('# HAHA')}}></div>
      </div>
    )
  }
}

export default Item;
