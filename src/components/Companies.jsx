import facebook from "../assets/facebook-network-communication-internet-interaction-svgrepo-com.svg"
import tiktok from "../assets/tiktok-svgrepo-com (1).svg"
import whatsapp from "../assets/whatsapp-svgrepo-com.svg"
import gmail from "../assets/gmail-svgrepo-com.svg"
const Companies = () => {
    return ( <>
    <div className="flex justify-evenly items-center py-12">
        <button><img src={facebook} className="w-20 h-20" alt="" /></button>
        <button><img src={tiktok} className="w-20 h-20" alt="" /></button>
        <button><img src={whatsapp} className="w-20 h-20" alt="" /></button>
        <button><img src={gmail} className="w-20 h-20" alt="" /></button>
        </div>
    
    </> );
}
 
export default Companies;