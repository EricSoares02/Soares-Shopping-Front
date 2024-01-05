import Star from "@/utils/stars/star";

export default function setStars(starsNumber: number) {
  
    switch (starsNumber.toFixed()) {
        case '1':
    
            return (<>
                {Star(15, '#1E6FD9')}
                {Star(15)}
                {Star(15)}
                {Star(15)}
                {Star(15)}</>
                )
            case '2':
    
            return (<>
                {Star(15, '#1E6FD9')}
                {Star(15, '#1E6FD9')}
                {Star(15)}
                {Star(15)}
                {Star(15)}</>
                )
            case '3':
    
            return (<>
                {Star(15, '#1E6FD9')}
                {Star(15, '#1E6FD9')}
                {Star(15, '#1E6FD9')}
                {Star(15)}
                {Star(15)}</>
                )
            case '4':
    
            return (<>
                {Star(15, '#1E6FD9')}
                {Star(15, '#1E6FD9')}
                {Star(15, '#1E6FD9')}
                {Star(15, '#1E6FD9')}
                {Star(15)}</>
                )
            case '5':
    
            return (<>
                {Star(15, '#1E6FD9')}
                {Star(15, '#1E6FD9')}
                {Star(15, '#1E6FD9')}
                {Star(15, '#1E6FD9')}
                {Star(15, '#1E6FD9')}</>
                )
        default:
            return (<>
                {Star(15)}
                {Star(15)}
                {Star(15)}
                {Star(15)}
                {Star(15)}</>
                )
    }
}