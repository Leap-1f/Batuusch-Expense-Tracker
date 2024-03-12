import Comfirm1 from "@/components/Comfirm1";
import Comfirm2 from "@/components/Comfirm2";
import Comfirm3 from "@/components/Comfirm3";
import { useState } from "react";
export default function Comfirm() {
  const [confirmNunber, setConfirmNunber] = useState(1);
  switch (confirmNunber) {
    case 1:
      return <Comfirm1 setConfirmNunber={setConfirmNunber} />;
      break;
    case 2:
      return <Comfirm2 setConfirmNunber={setConfirmNunber} />;
      break;
    case 3:
      return <Comfirm3 setConfirmNunber={setConfirmNunber} />;
      break;
    default:
      break;
  }
}

// if (confirmNunber ==  1) {
//     return <Comfirm1 onNext={confrimBtn1} />;
//   } else if (confirmNunber == 2) {
//     return <Comfirm2 number="0987654321" onBack={()=>{confirmNunber=1}}/>;
// }
