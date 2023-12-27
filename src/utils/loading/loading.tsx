import { LoadingComponent } from "./loading.style";

export default function Load() {
    return (
      <LoadingComponent.Circle>
        <LoadingComponent.Gray>
          <LoadingComponent.Blue/>
        </LoadingComponent.Gray>
      </LoadingComponent.Circle>
    );
  }
  