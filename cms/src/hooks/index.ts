import { debounce } from "loadsh"
import { useRef } from "react"
export const useDebounce = (fun, wait, options = {}) => {
    const myRef = useRef()
    if (!myRef.current) {
        myRef.current = debounce(fun, wait, options)
    }
    return myRef.current
}
