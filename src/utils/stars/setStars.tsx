import Star from "./star"

export default function SetStars(starsNumber: number){

    for (let index = 0; index < 5; index++) {
    
    if(index < starsNumber){
        return(Star(10), '#1E6FD9')
    }
    return(Star(10))
       
    }
    
    }