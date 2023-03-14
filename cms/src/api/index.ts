//初始化SDK实例
import cloudbase from "@cloudbase/js-sdk"
const app = cloudbase.init({
    env: "mamba-6gmrhjhw43a86947",
})

export function _insertQuestionForMarkDown(
    question: string,
    answer: string
): Promise<cloudbase.functions.ICallFunctionResponse> {
    return app.callFunction({
        // 云函数名称
        name: "insert_question",
        // 传给云函数的参数
        data: {
            question,
            answer,
        },
    })
}
