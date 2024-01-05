import Star from "@/utils/svgs/stars/star";

export default function setStars(starsNumber: number) {
  switch (starsNumber.toFixed()) {
    case "1":
      return (
        <>
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15})}
          {Star({size:15})}
          {Star({size:15})}
          {Star({size:15})}
        </>
      );
    case "2":
      return (
        <>
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15})}
          {Star({size:15})}
          {Star({size:15})}
        </>
      );
    case "3":
      return (
        <>
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15})}
          {Star({size:15})}
        </>
      );
    case "4":
      return (
        <>
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15})}
        </>
      );
    case "5":
      return (
        <>
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15, color:"#1E6FD9"})}
          {Star({size:15, color:"#1E6FD9"})}
        </>
      );
    default:
      return (
        <>
          {Star({size:15})}
          {Star({size:15})}
          {Star({size:15})}
          {Star({size:15})}
          {Star({size:15})}
        </>
      );
  }
}
