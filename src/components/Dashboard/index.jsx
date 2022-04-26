import { Link, Outlet, useLocation } from 'react-router-dom'
import "../../css/App.css"

function Dashboard() {
    const location = useLocation()
    console.log("location: ", location);
    return (
        <div>
            <h2>我是Dashboard组件: </h2>
            <Menu></Menu>
            <Container></Container>
        </div>
    )
}

function Menu() {
    return (
        <div>
            <Link className='link' to="/dashboard/child1">child1</Link>
            <Link className='link' to="/dashboard/child2">child2</Link>
        </div>
    )
}

function Container () {
    return (
        <div>
            <hr />
            <Outlet></Outlet>
        </div>
    )
}
export default Dashboard