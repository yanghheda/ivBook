import { useEffect } from "react"
import { _getQuestion } from "../../api/index"
import { message } from "antd"

function Learning() {
    const [messageApi, contextHolder] = message.useMessage()
    const getQuestion = async () => {
        const { data, code, message } = await _getQuestion()
        if (code) {
            error(message)
        }
        console.log(data)
    }
    const error = (message: string) => {
        messageApi.open({
            type: "error",
            content: message,
        })
    }
    useEffect(() => {
        // getQuestion()
    }, [])
    return (
        <div>
            <h1>展示题目</h1>
            {contextHolder}
        </div>
    )
}

export default Learning
