import { Link, Routes, Route, Outlet } from 'react-router-dom'
import Child1 from "../Child1"
import Child2 from "../Child2"

function Dashboard() {
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
            <Link to="/dashboard/child1">child1</Link>
            <Link to="/dashboard/child2">child2</Link>
        </div>
    )
}

function Container () {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}
export default Dashboard