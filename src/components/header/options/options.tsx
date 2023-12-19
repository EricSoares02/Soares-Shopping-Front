import Link from 'next/link';
import { OptionsComponent } from './options.style';

export default function Options(){
    const img = '/user.svg'
return(
    <OptionsComponent.DivOptions>
    <Link href={'/account'}>
      <OptionsComponent.ImageOptionsUser src={img} />
    </Link>
    <OptionsComponent.AlignToCart>
      <Link href={'/cart'}>
        <OptionsComponent.ImageOptions src='/bag.svg' />
      </Link>
      {3}
    </OptionsComponent.AlignToCart>
  </OptionsComponent.DivOptions>
)

}