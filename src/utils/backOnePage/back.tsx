import { useRouter } from "next/navigation";
import Image from "next/image";
import { BackBtnComponent } from "./back.style";

export default function BackButton() {
  const router = useRouter();

  return (
    <BackBtnComponent.Conteiner>
      <BackBtnComponent.ConteinerToAlign>
        <BackBtnComponent.Btn onClick={() => router.back()}>
          <Image src="back-btn.svg" alt="img" width={30} height={30} priority />{" "}
          Back
        </BackBtnComponent.Btn>
      </BackBtnComponent.ConteinerToAlign>
    </BackBtnComponent.Conteiner>
  );
}
