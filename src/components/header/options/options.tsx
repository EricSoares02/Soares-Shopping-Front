import Link from 'next/link';
import { OptionsComponent } from './options.style';
import { useSelector } from "react-redux";
import { RootStateType } from '@/redux/root-reducer';

export default function Options(){
    
    const token = useSelector(
      (state: RootStateType) => state.userSlice
    );
  
    const rout = token.access_token ? '/account' : '/login'
    const img = '/user.svg'
    
return(
    <OptionsComponent.DivOptions>
    <Link href={rout}>
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