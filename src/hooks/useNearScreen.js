import { useEffect, useRef, useState } from 'react'


export const useNearScreen = ({ distance = '50px' } = {}) => {
    const [show, setShow] = useState(false)
    const elementRef = useRef()


    useEffect(() => {
        let observer

        const onView = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onView, {
                rootMargin: distance
            })
    
            observer.observe(elementRef.current)
        })

        return () => observer && observer.disconnect()
    })
    
    return {show, elementRef}
}