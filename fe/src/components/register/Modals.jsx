import { ModalBtn1 } from "@/components/Modal1";
import { ModalBtn2 } from "@/components/Modal2";
import { useState  , useEffect} from "react";
import MiniModal from "../MiniModal";
export default function Modals({setConfirmNunber , confirmNunber}) {
  switch (confirmNunber) {
    case 1:
      return <ModalBtn1 setConfirmNunber={setConfirmNunber} />;
      break;
    case 2:
      return <ModalBtn2 setConfirmNunber={setConfirmNunber} />;
      break;
      case 3:
        return <MiniModal setConfirmNunber={setConfirmNunber} />;
        break;
    default:
      break;
  }
}
