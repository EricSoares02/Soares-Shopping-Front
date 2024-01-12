import { ComunicationSvgComponent } from "./comunication.style";

interface PropType {
  size: number;
  color?: string;
}

export default function ComunicationSvg(prop: PropType) {
  return (
    <ComunicationSvgComponent $comSize={prop.size}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
 fill={prop.color ? prop.color : "#000000"} stroke="none">
<path d="M546 4709 c-62 -15 -153 -68 -197 -116 -22 -24 -55 -74 -72 -111
l-32 -67 0 -1376 0 -1375 37 -76 c45 -91 103 -147 196 -191 l67 -32 543 -3
542 -3 25 25 c33 33 33 79 0 111 l-24 25 -512 0 c-372 0 -523 3 -553 12 -55
16 -138 99 -154 154 -17 60 -17 2648 0 2708 16 55 99 138 154 154 60 18 3928
18 3988 0 55 -16 138 -99 154 -154 17 -60 17 -2648 0 -2708 -16 -55 -99 -138
-154 -154 -31 -9 -224 -12 -753 -12 l-713 0 -26 -27 c-15 -16 -133 -211 -262
-435 -129 -225 -237 -408 -240 -408 -3 0 -84 135 -180 301 -95 165 -183 307
-194 315 -43 30 -104 6 -121 -46 -9 -27 1 -46 238 -455 165 -285 208 -351 230
-359 63 -23 62 -24 353 479 l273 470 708 5 709 5 76 37 c91 45 147 103 191
196 l32 67 0 1375 0 1375 -32 67 c-44 93 -100 151 -191 196 l-76 37 -1995 2
c-1182 0 -2012 -3 -2035 -8z"/>
</g>
</svg>
    </ComunicationSvgComponent>
  );
}
