import Button from './Button'
import React from 'react'
const Header = ({ title }) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color='green' text='ADD' />
    </header>
  )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

export default Header