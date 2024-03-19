import { ModalBtn1 } from "@/components/Modal1";
import { ModalBtn2 } from "@/components/Modal2";
import { useState } from "react";
export default function Modals() {
  const [confirmNunber, setConfirmNunber] = useState(1);
  switch (confirmNunber) {
    case 1:
      return <ModalBtn1 setConfirmNunber={setConfirmNunber} />;
      break;
    case 2:
      return <ModalBtn2 setConfirmNunber={setConfirmNunber} />;
      break;
    default:
      break;
  }
}
