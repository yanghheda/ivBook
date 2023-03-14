import { Button, Input, message } from "antd"
import { useEffect, useState } from "react"
import Vditor from "vditor"
import "vditor/dist/index.css"
import { _insertQuestionForMarkDown } from "../../api"

function Editor() {
    const [question, setQuestion] = useState<string>()
    const [vd, setVd] = useState<Vditor>() // vd是 vditor编辑器的实例，getValue方法获取内容字符串
    const [messageApi, contextHolder] = message.useMessage()
    useEffect(() => {
        const vditor = new Vditor("vditor", {
            after: () => {
                setVd(vditor)
            },
            minHeight: 500,
        })
    }, [])

    const insertQuestion = async () => {
        // console.log(question, vd?.getValue())
        const { result } = await _insertQuestionForMarkDown(
            question,
            vd?.getValue()
        )
        console.log(result)
        if (result.success) {
            success()
        } else {
            error(result.message)
        }
    }

    const success = () => {
        messageApi.open({
            type: "success",
            content: "上传成功！",
        })
    }
    const error = (message: string) => {
        messageApi.open({
            type: "error",
            content: message,
        })
    }

    return (
        <div>
            <Input
                value={question}
                onChange={(e) => {
                    setQuestion(e.target.value)
                }}
            />
            <hr />
            <div id="vditor" className="vditor" />
            <Button onClick={insertQuestion}>发送</Button>
            {contextHolder}
        </div>
    )
}

export default Editor
