import React from 'react'

const Helmet = (props) => {
    document.title = 'Mirna -' + props.title
  return (
    <div>
      <div className="w-100">{props.children}</div>
    </div>
  )
}

export default Helmet
