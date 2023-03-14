import { _getQuestion } from "@/api/index"
import { List } from "@arco-design/web-react"
import { useEffect } from "react"
function TopicList() {
    const getQuestion = async () => {
        // const res = await _getQuestion({ answer: false })
        // console.log(res)
    }
    useEffect(() => {
        getQuestion()
    }, [])
    return (
        <div>
            <List
                style={{ width: 622 }}
                size="small"
                header="List title"
                dataSource={[
                    "Beijing Bytedance Technology Co., Ltd.",
                    "Bytedance Technology Co., Ltd.",
                    "Beijing Toutiao Technology Co., Ltd.",
                    "Beijing Volcengine Technology Co., Ltd.",
                    "China Beijing Bytedance Technology Co., Ltd.",
                ]}
                render={(item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                )}
            />
        </div>
    )
}

export default TopicList
