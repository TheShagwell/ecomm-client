import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Welcome to your admin webpage</h1>
      <p>Please navigate to the following routes to get started:</p>
      <ul>
        <li><Link to='/products/add'>Add products page</Link></li>
        <li><Link to='/products'>View all products page</Link></li>
      </ul>
    </div>
  )
}

export default Home;