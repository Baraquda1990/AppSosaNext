import { RiMenuFill } from "@remixicon/react"
import { useState } from "react"
import { Dispatch,SetStateAction } from "react"
import { menuType,TranslationSection } from "@/app/page"
import { Button } from "@/components/ui/button"
import {Drawer,DrawerContent,DrawerHeader,DrawerTitle,DrawerTrigger,DrawerFooter} from "@/components/ui/drawer"
import { langType } from "@/app/page"
import Image from "next/image"
import comp4 from "@/public/comp_4.png"
import comp3 from "@/public/comp_3.png"
type props={
  header:string
  menu:menuType,
  setMenu:Dispatch<SetStateAction<menuType>>,
  t:Record<menuType, TranslationSection>
  model:"takeout"|"deals"
  lang:langType,
  setLang:Dispatch<SetStateAction<langType>>,
  setModel:Dispatch<SetStateAction<"takeout"|"deals">>
}
export default function DrawerLeft({header,menu,setMenu,t,model,lang,setLang,setModel}:props) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="flex flex-wrap gap-2 md:hidden absolute top-4 left-4 z-10">
        <Drawer key="left" direction="left" open={open} onOpenChange={setOpen}
        >
          <DrawerTrigger asChild>
            <Button variant="outline" className="capitalize w-10 h-10 border-2">
              <RiMenuFill/>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
            <DrawerHeader>
              <DrawerTitle>{header}</DrawerTitle>
            </DrawerHeader>
<ul className="row-span-3 xl:text-xl 2xl:text-3xl font-bold text-[#736942]/41
[&>li>button:hover]:text-[#736942] [&>li>button]:transition [&>li>button]:duration-300
space-y-3 mt-4 [&>li>button]:text-left">
  <li><button className={`${menu=="WhanWeDo"&&"text-[#736942]"}`} 
        onClick={()=>{setMenu("WhanWeDo");setOpen(false)}}
        >{model === "deals"?t["WhanWeDo"].menuItemDeals??t["WhanWeDo"].menuItemTakeout:t["WhanWeDo"].menuItemTakeout}
        </button></li>
  <li><button className={`${menu=="WhatWeAre"&&"text-[#736942]"}`}
        onClick={()=>{setMenu("WhatWeAre");setOpen(false)}}
        >{model === "deals"?t["WhatWeAre"].menuItemDeals??t["WhatWeAre"].menuItemTakeout:t["WhatWeAre"].menuItemTakeout}
        </button></li>
  <li><button className={`${menu=="WhatWeWant"&&"text-[#736942]"}`}
        onClick={()=>{setMenu("WhatWeWant");setOpen(false)}}
        >{model === "deals"?t["WhatWeWant"].menuItemDeals??t["WhatWeWant"].menuItemTakeout:t["WhatWeWant"].menuItemTakeout}
        </button></li>
  <li><button className={`${menu=="WhatYouGet"&&"text-[#736942]"}`}
        onClick={()=>{setMenu("WhatYouGet");setOpen(false)}}
        >{model === "deals"?t["WhatYouGet"].menuItemDeals??t["WhatYouGet"].menuItemTakeout:t["WhatYouGet"].menuItemTakeout}
        </button></li>
  <li><button className={`${menu=="SurpriseBag"&&"text-[#D1BC00]"}`}
        onClick={()=>{setMenu("SurpriseBag");setOpen(false)}}
      >{model === "deals"?t["SurpriseBag"].menuItemDeals??t["SurpriseBag"].menuItemTakeout:t["SurpriseBag"].menuItemTakeout}
      </button></li>
  <li><button className={`${menu=="OneQuestion"&&"text-[#CE0003]"}`}
        onClick={()=>{setMenu("OneQuestion");setOpen(false)}}
        >{model === "deals"?t["OneQuestion"].menuItemDeals??t["OneQuestion"].menuItemTakeout:t["OneQuestion"].menuItemTakeout}
      </button></li>
  <li><button className={`${menu=="Contact"&&"text-[#D1BC00]"}`}
          onClick={()=>{setMenu("Contact");setOpen(false)}}
      >{model === "deals"?t["Contact"].menuItemDeals??t["Contact"].menuItemTakeout:t["Contact"].menuItemTakeout}
      </button></li>
  <li><button className={`${menu=="SideA"&&"text-[#736942]"}`} 
        onClick={()=>{setMenu("SideA");setOpen(false)}}
        >{model === "deals"?t["SideA"].menuItemDeals??t["SideA"].menuItemTakeout:t["SideA"].menuItemTakeout}
        </button></li>
  <li><button className={`${menu=="SideB"&&"text-[#736942]"}`} 
        onClick={()=>{setMenu("SideB");setOpen(false)}}
        >{model === "deals"?t["SideB"].menuItemDeals??t["SideB"].menuItemTakeout:t["SideB"].menuItemTakeout}
        </button></li>
</ul>
<div className="rounded-full flex mx-auto mt-5 w-fit  border border-1 border-[#CE0003]
items-center [&>button]:rounded-full">
  <button 
    className={`p-3 hover:bg-[#CE0003]/26 transition duration-300
      ${model=="takeout"&&"bg-[#CE0003]/26"}`}
    onClick={()=>setModel("takeout")}
  >
    <Image src={comp4} alt="" className="w-6 h-6 object-contain"/></button>
  <button 
    className={`p-3 hover:bg-[#D1BC00]/50 transition duration-300
      ${model=="deals"&&"bg-[#D1BC00]/50"}`}
    onClick={()=>setModel("deals")}
  >
    <Image src={comp3} alt="" className="w-6 h-6 object-contain"/></button>
</div>
            <DrawerFooter>
              <div className="flex justify-evenly 
              [&>button]:uppercase [&>button]:text-sm [&>button]:font-extrabold 
            [&>button:hover]:text-[#CE0003]
              flex space-x-6">
              <button className={`text-[#787878]
                ${lang=="arm"&&"text-[#CE0003]"}`}
                onClick={()=>setLang("arm")}>
                    arm</button>
                <button className={`text-[#787878]
                ${lang=="eng"&&"text-[#CE0003]"}`}
                onClick={()=>{setLang("eng")}}>
                    eng</button>
                <button className={`text-[#787878]
                ${lang=="ru"&&"text-[#CE0003]"}`}
                onClick={()=>setLang("ru")}>
                    ru</button>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
    </div>
  )
}
