import { lazy, Suspense } from "react"
import { useNearScreen } from "../../hooks/useNearScreen"

const TrendingSearches = lazy(() => import('./TrendingSearches'))

export const LazyTrending = () => {

    const {show, elementRef} = useNearScreen({ distance:'50px' })
    
    return (
        <div ref={elementRef}>
            <Suspense fallback={null}>
            { show ? <TrendingSearches /> : null } 
            </Suspense>
        </div>
    )
} 