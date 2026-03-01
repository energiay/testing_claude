import {useState, useEffect} from 'react'
import getSrcFromName from '@App/libs/getSrcFromName'
import useContent from './useContent'

export default (modal, settings) => {
    const {
        open=false,
        toggle=()=>{},
        metric={},
    } = modal

    const [content] = useContent(modal, settings)

    // закрыть по кнопке ESC
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                toggle()
            }
        }

        if (open) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleEscape)
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleEscape)
        }
    }, [open, toggle])

    const close = getSrcFromName('mwclose')

    return {open, metric, toggle, img: close, content}
}
