import "./index.less"
import { Menu, Button, Input, Space, Grid } from "@arco-design/web-react"
import { Link } from "react-router-dom"
const { Item: MenuItem } = Menu
const InputSearch = Input.Search
const { Row, Col } = Grid

function Nav() {
    return (
        <div className="nav-warpper">
            <div
                className="nav-content"
                style={{
                    width: "70%",
                    margin: "auto",
                }}
            >
                <Row
                    style={{
                        flexWrap: "nowrap",
                    }}
                >
                    <Col flex="auto">
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={["1"]}
                            ellipsis={false}
                            style={{
                                overflow: "hidden",
                            }}
                        >
                            <MenuItem
                                key="0"
                                style={{ padding: 0, marginRight: 38 }}
                                disabled
                            >
                                <div
                                    style={{
                                        width: 80,
                                        height: 30,
                                        borderRadius: 2,
                                        background: "var(--color-fill-3)",
                                        cursor: "text",
                                    }}
                                />
                            </MenuItem>
                            <MenuItem key="1">
                                <Link to="/">首页</Link>
                            </MenuItem>
                            <MenuItem key="2">
                                <Link to="/topic-list">刷题</Link>
                            </MenuItem>
                            {/* <MenuItem key="3">面经</MenuItem> */}
                        </Menu>
                    </Col>
                    <Col flex="300px">
                        <Space
                            style={{
                                padding: "14px 0",
                            }}
                            size="large"
                        >
                            <InputSearch
                                searchButton
                                defaultValue="Search content"
                                placeholder="Enter keyword to search"
                            />
                            <Button type="primary">登录</Button>
                        </Space>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Nav
