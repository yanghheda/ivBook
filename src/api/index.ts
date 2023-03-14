import cloudbase from "@cloudbase/js-sdk"

const app = cloudbase.init({
    env: "mamba-6gmrhjhw43a86947",
})
interface IfieldData {
    answer?: boolean
}

export function _getQuestion(
    fieldData: IfieldData
): Promise<cloudbase.functions.ICallFunctionResponse> {
    return app.callFunction({
        name: "get_question",
        // 传给云函数的参数
        data: {
            fieldData,
        },
    })
}
