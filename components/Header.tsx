import { Dispatch,SetStateAction } from "react"
import logo from "@/public/logo.png"
import Image from "next/image"
import { langType } from "@/app/page"
import { useState,useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
type props={
    lang:langType,
    setLang:Dispatch<SetStateAction<langType>>
}
type title01="Ավելցուկից"|"От излишков"|"Takeout model"
type title02="դեպի շահույթ"|"к прибыли"|"to Profit"
export default function Header({lang,setLang}:props){
    const [title01,setTitle01]=useState<title01>("Ավելցուկից")
    const [title02,setTitle02]=useState<title02>("դեպի շահույթ")
    useEffect(()=>{
        switch(lang){
            case "arm":
                setTitle01("Ավելցուկից")
                setTitle02("դեպի շահույթ")
            break
            case "eng":
                setTitle01("Takeout model")
                setTitle02("to Profit")
            break
            case "ru":
                setTitle01("От излишков")
                setTitle02("к прибыли")
            break
        }
    },[lang])
    return(
        <header className="min-h-[80px] relative">
            <div className="absolute top-10 right-10 
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
            <h1 className="sr-only">
                AppSosa - приложение доставки еды
            </h1>
            <div className="flex items-center justify-center my-5 space-x-2">
            <AnimatePresence mode="wait">
            <motion.h3
                key={title01}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="xl:text-xl 2xl:text-3xl font-extrabold
                bg-gradient-to-br from-[#D1BC00] to-[#CE0003] bg-clip-text text-transparent"
            >
                {title01}
            </motion.h3>
            </AnimatePresence>

                <motion.div
                    layoutId="logo"
                    transition={{
                        layout: {
                        delay:1.5,
                        duration: 1.5,
                        ease: [0.76, 0, 0.24, 1]
                        }
                    }}
                    >
                    <Image
                        src={logo}
                        alt="Appsosa logo"
                        className="w-20 h-20 2xl:w-32 2xl:h-32"
                    />
                </motion.div>
                
            <AnimatePresence mode="wait">
            <motion.h3
                key={title02}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="xl:text-xl 2xl:text-3xl font-extrabold
                bg-gradient-to-br from-[#D1BC00] to-[#CE0003] bg-clip-text text-transparent"
            >
                {title02}
            </motion.h3>
            </AnimatePresence>
            </div>
        </header>
    )
}