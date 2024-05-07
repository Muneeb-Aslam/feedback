import { Link } from 'react-router-dom'

interface props{
  text:string;
  bg:string;
  color:string;
}

const Header = ({text,bg,color}:props) => {
  return (
    <header style={{background:bg,color:color}}>
    <div className='container'>
      <Link to='/' style={{ textDecoration: 'none', color: '#ff6a95' }}>
        <h2>{text}</h2>
      </Link>
    </div>
  </header>
  )
}

export default Header