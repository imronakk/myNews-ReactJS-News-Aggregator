import React, { Component } from 'react'
import Loading from '../Spinner-1s-204px.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
          <img src={Loading} alt="Loading" height={90} width={90} />  
      </div>
    )
  }
}

