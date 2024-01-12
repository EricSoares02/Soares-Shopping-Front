import { PrivacySvgComponent } from "./privacy.style";

interface PropType {
  size: number;
  color?: string;
}

export default function PrivacySvg(prop: PropType) {
  return (
    <PrivacySvgComponent $priSize={prop.size}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="512.000000pt"
        height="512.000000pt"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill={prop.color ? prop.color : "#000000"}
          stroke="none"
        >
          <path
            d="M1782 4052 c-517 -188 -768 -283 -778 -296 -21 -30 -20 -976 1 -1142
66 -499 289 -953 640 -1299 227 -225 528 -414 817 -514 l98 -33 98 33 c130 45
365 162 485 243 539 361 887 922 972 1570 12 92 15 225 15 620 0 465 -1 505
-17 525 -12 14 -260 108 -782 296 -421 151 -770 275 -775 274 -6 0 -355 -125
-774 -277z m1518 -95 l725 -263 0 -514 c-1 -556 -3 -584 -60 -811 -118 -466
-403 -890 -788 -1176 -160 -118 -377 -234 -550 -294 l-67 -24 -68 23 c-257 90
-537 263 -746 463 -290 276 -493 624 -591 1008 -57 227 -59 255 -60 810 l0
515 725 262 c399 144 732 263 740 263 8 0 341 -118 740 -262z"
          />
          <path
            d="M2728 2623 l-308 -308 -148 148 c-99 99 -154 147 -169 147 -26 0 -53
-25 -53 -49 0 -20 350 -371 370 -371 8 0 164 150 347 332 237 237 333 339 333
355 0 21 -33 53 -54 53 -6 0 -149 -138 -318 -307z"
          />
        </g>
      </svg>
    </PrivacySvgComponent>
  );
}
