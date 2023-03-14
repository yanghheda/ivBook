import { Layout } from "@arco-design/web-react"
import { Outlet } from "react-router-dom"
import Nav from "./components/nav"

const Header = Layout.Header
const Footer = Layout.Footer
const Content = Layout.Content

function App() {
    return (
        <div className="App">
            <Layout>
                <Header>
                    <Nav />
                </Header>
                <Content>
                    <Outlet />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    )
}

export default App
