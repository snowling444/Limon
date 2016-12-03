import React from 'react';

class Item extends React.Component {
  render () {
    let content = this.props.params.title == 1 ? 'First' :
     this.props.params.title == 2 ? 'Second' :'nth'
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default Item;
