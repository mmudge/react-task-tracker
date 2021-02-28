import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
  const onClick = () => {
    console.log('on click from header')
  }
  return (
    <header className="header">
      <h1>{ title }</h1>
      <Button color="green" text="hello" onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
