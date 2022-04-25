import {Link} from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <h1>我是Dashboard组件: </h1>
            <nav>
                <Link to="/dashboard/child1">child1</Link>
                <Link to="/dashboard/child2">child2</Link>
            </nav>
        </div>
    )
}

export default Dashboard