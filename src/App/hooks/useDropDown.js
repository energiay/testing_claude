import {useState, useRef, useEffect} from 'react'

export default (open=false) => {
    const content = useRef(null)
    const [height, setHeight] = useState(0)

    const click = () => {
        if (!content.current) {
            return
        }

        height
            ? setHeight(0)
            : setHeight(content.current.getBoundingClientRect().height)
    }

    useEffect(() => {
        if (!open) return

        // даем время контенту полностью загрузиться в контейнер
        // прежде чем начать его открывать
        setTimeout(click, 100)
    }, [])


    return {content, height, click}
}
