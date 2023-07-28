import { cols } from "../../colorSchema"
import { Box } from "@mui/material"
export default function WaveNavbar() {
  return (
    <Box sx={{ position: "relative", top: {xs:"0px",sm:"-5px"}, borderTop:`0px solid ${cols.lila}`, zIndex:"2", margin:{xs:"-8px"}, width:"100vw"}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 51.5">
    <path
     fill={cols.lila}
       //   fill-opacity="1"
     d="m 0,3.721986 c 57.97779,17.066599 129.29158,18.357647 180,18.485335 60,0.08919 120,-6.451123 180,0 60,6.332208 120,25.35856 180,28.539528 60,3.062054 120,-9.42399 180,-15.875112 60,-6.332208 120,-6.332208 180,-1.57562 60,4.756588 120,14.269764 180,15.845384 60,1.694534 120,-4.845774 180,-12.664416 60,-7.937556 120,-17.450733 150,-22.207321 l 30,-4.7565878 V 0 H 1410 1260 1080 900 720 540 360 180 30 0 Z"/>

    </svg>
  </Box>
  )
}

