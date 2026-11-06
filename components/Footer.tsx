import { Dispatch,SetStateAction } from "react"
import google_link from "@/public/google_link.png"
import appstore_link from "@/public/appstore_link.png"
import Image from "next/image"
import { menuType,TranslationSection } from "@/app/page"
type props={
    menu:menuType,
    setMenu:Dispatch<SetStateAction<menuType>>,
    t:Record<menuType, TranslationSection>
    model:"takeout"|"deals"
}
export default function Footer({menu,setMenu,t,model}:props){
    return(
        <footer className="min-h-[80px] grid grid-cols-3 items-center mb-3 text-[#D1BC00]/41">
            <button className={`xl:text-xl 2xl:text-3xl font-extrabold hover:text-[#D1BC00] transition duration-300
                ${menu=="SurpriseBag"&&"text-[#D1BC00]"}`}
                onClick={()=>setMenu("SurpriseBag")}
            >{model === "deals"?t["SurpriseBag"].menuItemDeals??t["SurpriseBag"].menuItemTakeout:t["SurpriseBag"].menuItemTakeout}
            </button>
            <div className="flex justify-center">
                <button className="opacity-30 hover:opacity-100 transition duration-300">
                    <Image className="w-15 xl:w-20" src={appstore_link} alt="Appstore link"/>
                </button>
                <button className="opacity-30 hover:opacity-100 transition duration-300">
                    <Image className="w-15 xl:w-20" src={google_link} alt="Google link"/>
                </button>
            </div>
            <button className={`xl:text-xl 2xl:text-3xl font-extrabold hover:text-[#D1BC00] transition duration-300
                ${menu=="Contact"&&"text-[#D1BC00]"}`}
                onClick={()=>setMenu("Contact")}
            >{model === "deals"?t["Contact"].menuItemDeals??t["Contact"].menuItemTakeout:t["Contact"].menuItemTakeout}
            </button>
        </footer>
    )
}