import React, {useState, useEffect} from "react"
import { useBodyRef } from '@App/useBodyRef'


// Хук для отслеживания позиции Body контейнера
export default function useBodyPosition() {
    const [position, setPosition] = useState({ right: 0 })
    const bodyRef = useBodyRef() // получаем ссылку на Body контейнер

    useEffect(() => {
        const updatePosition = () => {
            const bodyElement = bodyRef.current
            if (bodyElement) {
                const rect = bodyElement.getBoundingClientRect()

                // после 1180px у body появляется отступ в 32px
                let padding = 0
                if (window.innerWidth <= 1180) {
                    padding = 32
                }

                // мобильная отрисовка баннера
                if (window.innerWidth <=1024) {
                    setPosition({ right: -104})
                    return
                }

                setPosition({ right: window.innerWidth - rect.right + padding })
            }
        }

        updatePosition()
        window.addEventListener('scroll', updatePosition)
        window.addEventListener('resize', updatePosition)

        return () => {
          window.removeEventListener('scroll', updatePosition)
          window.removeEventListener('resize', updatePosition)
        }
    }, [])

    return position
}

