'use client'
import { useState,useEffect } from "react"
import { motion, AnimatePresence,LayoutGroup } from "motion/react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import comp6 from "@/public/comp_6.png"
import comp5 from "@/public/comp_5.png"
import comp4 from "@/public/comp_4.png"
import comp3 from "@/public/comp_3.png"
import Image from "next/image"
import logo from "@/public/logo.png"
export type langType="arm"|"eng"|"ru"
export type menuType="WhanWeDo"|"WhatWeAre"|"WhatWeWant"|"WhatYouGet"|"OneQuestion"|"SurpriseBag"|"Contact"
export type TranslationSection = {
  menuItemTakeout: string
  menuItemDeals?: string
  textTakeout: React.ReactNode|string
  textDeals: React.ReactNode|string
}
type titleType="Թեյքաութ մոդել"|"Takeout model"|"Модель Тейкаут"
export type MenuLangType = Record<langType,Record<menuType, TranslationSection>>
export const menuLang:MenuLangType={
  "arm":{
    "WhanWeDo":{
        menuItemTakeout:"Ինչ ենք Մենք անում",
        textTakeout:"Մենք օգնում ենք ձեզ դրամայնացնել օրվա վերջի ավելցուկը՝ չվաճառված ապրանքները «Անակնկալ փաթեթների» (Surprise Bags) մեջ փաթեթավորելով և ավտոմատ կերպով տեղական գնորդներին վաճառելով, ինչը 100% կորուստը վերածում է մաքուր շահույթի:",
        textDeals:"Հավելյալ ամենօրյա շահույթ չվաճառված ապրանքից՝ ավտոմատացված «Անակնկալ փաթեթների» միջոցով, զրոյական գործառնական գլխացավանք, բաղադրիչների արժեքի ակնթարթային վերականգնում և նոր տեղական վճարունակ հաճախորդների անռիսկ հոսք:",
      },
    "WhatWeAre":{
        menuItemTakeout:"Ով ենք Մենք",
        textTakeout:"Հայաստանի առաջատար «Անակնկալ փաթեթների» շուկայի հարթակը. եկամուտների վերականգնման բարձր շահութաբեր գործիք, որը փակման պահին մնացած ապրանքը վերածում է շահույթի աճի՝ առանց հավելյալ ներդրումների:",
        textDeals:"Հայաստանի՝ ավելցուկային ապրանքների իրացման առաջատար ցանցը՝ բարձր արդյունավետությամբ B2B և B2C հարթակ, որն օգնում է ապրանքանիշերին իրացնել ավելցուկային պաշարները, վերացնել պահեստային ավելորդությունները և պահպանել շահութաբերության մակարդակը։"
      },
    "WhatWeWant":{
        menuItemTakeout:"Ինչ ենք Մէնք ուզում",
        textTakeout:"Վերացնել չօգտագործված ապրանքները Երևանի սննդի արդյունաբերության մեջ «Անակնկալ փաթեթների» միջոցով՝ ապահովելով, որ պատրաստված յուրաքանչյուր խմբաքանակ եկամուտ բերի՝ աղբամանում հայտնվելու փոխարեն:",
        textDeals:"Երևանի սննդի ոլորտում չիրացված պաշարները վերացնել «Անակնկալ փաթեթների» (Surprise Bags) միջոցով՝ ապահովելով, որ պատրաստված յուրաքանչյուր խմբաքանակ դրամական հոսք բերի՝ աղբամանը հայտնվելու փոխարեն։",
      },
    "WhatYouGet":{
        menuItemTakeout:"Ինչ եք Դուք ստանում",
        textTakeout:"Հավելյալ ամենօրյա շահույթ չվաճառված ապրանքից՝ ավտոմատացված «Անակնկալ փաթեթների» միջոցով, զրոյական գործառնական գլխացավանք, բաղադրիչների արժեքի ակնթարթային վերականգնում և նոր տեղական վճարունակ հաճախորդների անռիսկ հոսք:",
        textDeals:"Ավելցուկային ապրանքների դեպքում՝ ուղղակի ծախսերի վերականգնում, երաշխավորված առաքում ձեր նախընտրած ժամկետներում, լիակատար հստակություն (ստանում եք հենց այն, ինչ պատվիրել եք՝ առանց անակնկալների) և բարձր շահութաբերությամբ ուղի՝ պաշարներն արագ իրացնելու համար։",
      },
    "OneQuestion":{
        menuItemTakeout:"Մեկ հարց ձեզ",
        textTakeout:(<span className="text-[#CE0003]">“Նույնիսկ եթե խոսքը օրական ընդամենը երկու-երեք փաթեթի մասին է, ամսվա վերջում դա դառնում է մաքուր շահույթ՝ ստացված, այսպես ասած, «ոչնչից»՝ ավելի ծանր աղբամանի փոխարեն։ Ինչո՞ւ բաց թողնել գումար վաստակելու հնարավորությունը։”</span>),
        textDeals:(<span className="text-[#CE0003]">Նույնիսկ եթե ձեր պահեստում շաբաթական ընդամենը մի քանի պալետ կամ արկղ է մնում, ամսվա վերջում դա վերածվում է մաքուր շահույթի՝ կարծես «օդից» հայտնված, փոխանակ թանկարժեք պահեստային տարածք զբաղեցնելու կամ դուրս գրվելու։ Ինչո՞ւ գումարը թողնել դարակին։</span>)
      },
    "SurpriseBag":{
        menuItemTakeout:"Ի՞նչ է «Անակնկալ փաթեթը»",
        menuItemDeals:"Ինչպե՞ս են գործում առաջարկները։",
        textTakeout:(<span className="text-[#D1BC00]">«Անակնկալ փաթեթը» ձեր օրվա ավելցուկը վաճառելու խելացի և առանց ջանքերի միջոց է՝ փոխանակ այն աղբը նետելու: Քանի որ ձեր օրվա վերջի պահեստային մնացորդը բնականաբար փոխվում է (լինի դա հավելյալ խմորեղեն, պատրաստի ճաշ կամ հյուրանոցի նախաճաշի ուտեստներ), «Անակնկալ փաթեթը» թույլ է տալիս այս բարձր որակի, անթերի սնունդը հավաքել մեկ փաթեթի մեջ և վաճառել զեղչված գնով: Ձեզ հարկավոր չէ առանձին-առանձին թվարկել յուրաքանչյուր ապրանք: Դուք պարզապես փաթեթավորում եք մնացածը փակման ժամին, սահմանում գին և թույլ տալիս տեղացի հաճախորդներին ամրագրել ու վերցնել այն կարճ, նախատեսված ժամանակահատվածում: Սա հնարավորություն է տալիս սննդի պոտենցիալ թափոնը վերածել մաքուր շահույթի՝ միաժամանակ նոր հաճախորդներ բերելով ձեր բիզնես:</span>),
        textDeals:(<>1. Ներկայացրեք ձեր ավելցուկային պաշարները.<span className='text-[#D1BC00]'>Արտադրողները, ներմուծողներն ու մատակարարները հավելյալ պաշարները, սահմանափակ պիտանելիության ժամկետ ունեցող կամ ավելցուկային ապրանքները տեղադրում են անմիջապես հավելվածում՝ կցելով հստակ նկարագրություններ և գներ։</span><br/>
        2. Ընտրե՛ք պայմաններն ու ժամանակացույցը. <span className='text-[#D1BC00]'>Դուք սահմանում եք առաքման պայմանները, պատվերի նվազագույն քանակները և առաքման՝ ձեզ համար նախընտրելի ժամկետները։</span><br/>
        3. Գնորդները պատվերներ են կատարում. <span className='text-[#D1BC00]'>Տեղական մանրածախ գնորդները, ձեռնարկությունները կամ սպառողները դիտում և ձեռք են բերում առաջարկները անմիջապես հարթակի միջոցով։</span><br/>
        4. Կատարե՛ք պատվերները և ստացե՛ք շահույթ. <span className='text-[#D1BC00]'>Դուք փաթեթավորում և առաքում եք հենց այն ապրանքները, որոնք պատվիրվել են՝ ձեր սահմանած ժամանակացույցով, դրանով իսկ չօգտագործվող պաշարները վերածելով երաշխավորված դրամական հոսքի՝ առանց որևէ կորստի։</span>
          </>)
      },
    "Contact":{
        menuItemTakeout:"Կոնտակտներ",
        textTakeout:"",
        textDeals:""
      }
  },
  "eng":{
    "WhanWeDo":{
        menuItemTakeout:"What we do",
        textTakeout:"We help you monetize your end-of-day surplus by packing unserved items into 'Surprise Bags' and automatically selling them to local buyers, turning a 100% loss into pure cash.",
        textDeals:"We connect manufacturers and branded product importers with buyers to sell and deliver surplus inventory in their own chosen timeframe, turning overstock into profitable deals."
      },
    "WhatWeAre":{
        menuItemTakeout:"What we are",
        textTakeout:"Armenia’s premier 'Surprise Bag' marketplace platform—a high-margin revenue recovery tool that turns uncollected closing-stock into immediate bottom-line growth with zero extra investment.",
        textDeals:"Armenia’s premier surplus deal network—a high-efficiency B2B and B2C delivery platform that helps brands clear overstock, eliminate warehouse waste, and protect their profit margins."
      },
    "WhatWeWant":{
        menuItemTakeout:"What we want",
        textTakeout:"To eliminate dead stock across Yerevan’s food industry through the power of 'Surprise Bags,' ensuring every batch prepared generates cash flow instead of hitting the trash bin.",
        textDeals:"To eliminate dead stock across Yerevan’s food industry through the power of 'Surprise Bags,' ensuring every batch prepared generates cash flow instead of hitting the trash bin."
      },
    "WhatYouGet":{
        menuItemTakeout:"What you get",
        textTakeout:"Extra daily profit from unsold stock via automated 'Surprise Bags,' zero operational hassle, instant ingredient cost recovery, and a risk-free stream of new local paying customers.",
        textDeals:"Direct cost recovery on overstock items, guaranteed delivery within your chosen timeframe, zero surprise-bag uncertainty (you get exactly what you order), and a high-margin channel to clear inventory fast."
      },
    "OneQuestion":{
        menuItemTakeout:"One question for you",
        textTakeout:(<span className="text-[#CE0003]">'Even if it's just two or three bags a day, at the end of the month, that’s pure profit turning out of thin air instead of a heavier trash bin. Why leave money on the table?'</span>),
        textDeals:(<span className="text-[#CE0003]">'Even if it's just a few pallets or boxes a week sitting in your warehouse, at the end of the month, that’s pure profit turning out of thin air instead of taking up expensive storage space or getting written off. Why leave money on the shelf?'</span>)
      },
    "SurpriseBag":{
        menuItemTakeout:"What is a “Surprise bag”?",
        menuItemDeals:"How the Deals work?",
        textTakeout:(<span className="text-[#D1BC00]">A 'Surprise Bag' is a smart, zero-effort way to sell your daily surplus instead of throwing it away. Because your end-of-day inventory naturally fluctuates (whether it's extra pastries, prepared lunch meals, or hotel breakfast items), a Surprise Bag allows you to bundle these high-quality, perfectly good items together into a single mystery package at a discounted price. You don't need to list items individually. You simply pack what you have left at closing time, set a price, and let local customers reserve and pick it up during a short, dedicated window. It turns potential food waste into pure profit while introducing new customers to your business!</span>),
        textDeals:(<>1.List Your Overstock: <span className='text-[#D1BC00]'>Manufacturers, importers, and suppliers post excess inventory, short-dated goods, or overstock items directly on the app with clear descriptions and pricing.</span><br/>
        2.Choose Your Terms & Schedule: <span className='text-[#D1BC00]'>You set the delivery terms, minimum order quantities, and your own preferred delivery timeframe.</span><br/>
        3.Buyers Place Orders: <span className='text-[#D1BC00]'>Local retail buyers, businesses, or consumers browse and purchase the deals directly through the platform.</span><br/>
        4.Fulfill & Profit: <span className='text-[#D1BC00]'>You package and deliver the exact items ordered on your schedule, turning idle inventory into guaranteed cash flow with zero waste.</span>
          </>)
      },
    "Contact":{
        menuItemTakeout:"Contact us",
        textTakeout:"",
        textDeals:""
      }
  },
  "ru":{
    "WhanWeDo":{
        menuItemTakeout:"Что мы делаем",
        textTakeout:"Мы помогаем вам монетизировать излишки в конце дня, упаковывая нереализованные товары в «Сюрприз-пакет» (Surprise Bags) и автоматически продавая их местным покупателям, превращая стопроцентный убыток в чистую прибыль.",
        textDeals:"Мы связываем производителей и импортеров брендовых товаров с покупателями, чтобы помочь им реализовать и доставить излишки продукции в удобные для них сроки, превращая невостребованные запасы в выгодные сделки."
      },
    "WhatWeAre":{
        menuItemTakeout:"Кто мы",
        textTakeout:"Первая торговая площадка «Сюрприз-пакетов» в Армении — высокорентабельный инструмент возврата выручки, превращающий нереализованные остатки в рост чистой прибыли без дополнительных инвестиций.",
        textDeals:"Ведущая в Армении сеть для реализации излишков товаров — высокоэффективная B2B- и B2C-платформа, помогающая брендам распродавать товарные остатки, избавляться от складских излишков и защищать свою прибыль."
      },
    "WhatWeWant":{
        menuItemTakeout:"Что мы хотим",
        textTakeout:"Ликвидировать неликвидные запасы в сфере общепита Еревана с помощью концепции «Сюрприз-пакетов», гарантируя, что каждая приготовленная партия приносит денежный поток, а не отправляется в мусор.",
        textDeals:"Ликвидировать неликвидные запасы в сфере общепита Еревана с помощью концепции «Сюрприз-пакетов», гарантируя, что каждая приготовленная партия приносит денежный поток, а не отправляется в мусор."
      },
    "WhatYouGet":{
        menuItemTakeout:"Что вы получаете",
        textTakeout:"Дополнительная ежедневная прибыль от непроданных запасов через автоматизированные «Сюрприз-пакеты», полное отсутствие операционной головной боли, мгновенный возврат стоимости ингредиентов и безрисковый приток новых местных платящих клиентов.",
        textDeals:"Дополнительная ежедневная прибыль от непроданных запасов через автоматизированные «Сюрприз-пакеты», полное отсутствие операционной головной боли, мгновенный возврат стоимости ингредиентов и безрисковый приток новых местных платящих клиентов."
      },
    "OneQuestion":{
        menuItemTakeout:"Один вопрос к Вам",
        textTakeout:(<span className="text-[#CE0003]">“Даже если речь идет всего о двух-трех пакетах в день, по итогам месяца это превращается в чистую прибыль, возникшую буквально из ничего — вместо того чтобы просто наполнять мусорный бак. Зачем упускать возможность заработать?”</span>),
        textDeals:(<span className="text-[#CE0003]">“Даже если речь идет всего о двух-трех пакетах в день, по итогам месяца это превращается в чистую прибыль, возникшую буквально из ничего — вместо того чтобы просто наполнять мусорный бак. Зачем упускать возможность заработать?”</span>)
      },
    "SurpriseBag":{
        menuItemTakeout:"Что такое “Сюрприз-пакет”?",
        menuItemDeals:"Как работает Дилс?",
        textTakeout:(<span className="text-[#D1BC00]">«Сюрприз-пакет» — это простой и эффективный способ продать ежедневные излишки вместо того, чтобы их выбрасывать. Поскольку остатки продукции в конце дня естественным образом меняются (будь то лишняя выпечка, готовые блюда или продукты с завтрака в отеле), «Сюрприз-пакет» позволяет объединить эти качественные свежие продукты в один секретный набор по сниженной цене. Вам не нужно добавлять каждый товар по отдельности. Вы просто упаковываете то, что осталось при закрытии, устанавливаете цену, а местные клиенты бронируют и забирают его в течение короткого выделенного времени. Это превращает потенциальные пищевые отходы в чистую прибыль и привлекает новых клиентов в ваш бизнес!</span>),
        textDeals:(<>1.Разместите свои излишки: <span className='text-[#D1BC00]'>Производители, импортеры и поставщики публикуют излишки продукции, товары с истекающими сроками или складские остатки прямо в приложении с четким описанием и ценами.</span><br/>
        2.Выберите условия и график: <span className='text-[#D1BC00]'>Вы сами устанавливаете условия доставки, минимальный объем заказа и удобный для вас временной интервал.</span><br/>
        3.Покупатели оформляют заказы: <span className='text-[#D1BC00]'>Местные розничные покупатели, бизнесы или потребители просматривают и приобретают товары напрямую через платформу.</span><br/>
        4.Доставляйте и получайте прибыль: <span className='text-[#D1BC00]'>Вы упаковываете и доставляете ровно те товары, которые были заказаны, по вашему графику, превращая залежавшиеся запасы в гарантированный денежный поток без отходов.</span>
          </>)
      },
    "Contact":{
        menuItemTakeout:"Контакты",
        textTakeout:"",
        textDeals:""
      }
  },
}

export default function Page() {
  const [lang,setLang]=useState<langType>("arm")
  const [model,setModel]=useState<"takeout"|"deals">("takeout")
  const [menu,setMenu]=useState<menuType>("WhanWeDo")
  let t=menuLang[lang]
  const [title,setTitle]=useState<titleType>("Թեյքաութ մոդել")
  const [preTitle,setPreTitle]=useState<"From Surplus to Profit"|"От излишков к прибыли"|"Ավելցուկից դեպի շահույթ">("От излишков к прибыли")
  useEffect(()=>{
    switch(lang){
      case "eng":
        setTitle("Takeout model")
        setPreTitle("From Surplus to Profit")
      break
      case "arm":
        setTitle("Թեյքաութ մոդել")
        setPreTitle("Ավելցուկից դեպի շահույթ")
      break
      case "ru":
        setTitle("Модель Тейкаут")
        setPreTitle("От излишков к прибыли")
      break
    }
  },[lang])

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
  <>

    <AnimatePresence>
      {loading && (<>
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1]
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#CE0003] to-[#D1BC00]
          flex items-center justify-center"
        >
        </motion.div>

        <motion.div
          key="preloader-logo"
          layoutId="logo"
          transition={{
            layout: {
              delay:1.5,
              duration: 1.5,
              ease: [0.76, 0, 0.24, 1]
            }
          }}
          className="fixed left-1/2 top-1/2 z-[9999]
          -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
        >
          <Image
            src={logo}
            alt="Appsosa logos"
            className="w-[450px] h-[400px] object-fill"
            width={400}
            height={400}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl font-bold text-white text-center"
          >
            {preTitle}
          </motion.h1>
        </motion.div>
      </>)}
    </AnimatePresence>

  <Header lang={lang} setLang={setLang}/>
    <main className="flex-1 flex flex-col">
    <section className="flex-1 grid grid-cols-5">
      <aside className="grid grid-rows-8 mx-auto">
        <div className="row-span-2 flex flex-col justify-center">
          <h3 className="xl:text-xl 2xl:text-3xl font-bold
            bg-gradient-to-br from-[#736942] to-[#D9C57B] bg-clip-text text-transparent
            border-b border-[#CE0003] border-b-5">
              {title}
            </h3>
        </div>
        <ul className="row-span-3 xl:text-xl 2xl:text-3xl font-bold text-[#736942]/41
        [&>li>button:hover]:text-[#736942] [&>li>button]:transition [&>li>button]:duration-300
        space-y-3 mt-4">
          <li><button className={`${menu=="WhanWeDo"&&"text-[#736942]"}`} 
                onClick={()=>setMenu("WhanWeDo")}
                >{model === "deals"?t["WhanWeDo"].menuItemDeals??t["WhanWeDo"].menuItemTakeout:t["WhanWeDo"].menuItemTakeout}
                </button></li>
          <li><button className={`${menu=="WhatWeAre"&&"text-[#736942]"}`}
                onClick={()=>setMenu("WhatWeAre")}
                >{model === "deals"?t["WhatWeAre"].menuItemDeals??t["WhatWeAre"].menuItemTakeout:t["WhatWeAre"].menuItemTakeout}
                </button></li>
          <li><button className={`${menu=="WhatWeWant"&&"text-[#736942]"}`}
                onClick={()=>setMenu("WhatWeWant")}
                >{model === "deals"?t["WhatWeWant"].menuItemDeals??t["WhatWeWant"].menuItemTakeout:t["WhatWeWant"].menuItemTakeout}
                </button></li>
          <li><button className={`${menu=="WhatYouGet"&&"text-[#736942]"}`}
                onClick={()=>setMenu("WhatYouGet")}
                >{model === "deals"?t["WhatYouGet"].menuItemDeals??t["WhatYouGet"].menuItemTakeout:t["WhatYouGet"].menuItemTakeout}
                </button></li>
        </ul>
        <div className="row-span-3 flex flex-col justify-center items-start text-[#CE0003]/41">
          <button className={`xl:text-xl 2xl:text-3xl font-bold hover:text-[#CE0003] transition duration-300
            ${menu=="OneQuestion"&&"text-[#CE0003]"}`}
            onClick={()=>setMenu("OneQuestion")}
            >{model === "deals"?t["OneQuestion"].menuItemDeals??t["OneQuestion"].menuItemTakeout:t["OneQuestion"].menuItemTakeout}
          </button>
        </div>
      </aside>
      <section className="col-span-3 flex justify-center mt-20 text-[#736942]">
        <AnimatePresence mode="wait">
          <motion.p
            key={`${lang}-${menu}-${model}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="xl:text-xl 2xl:text-2xl font-semibold max-w-[800px]"
          >
            {model === "deals"
              ? t[menu].textDeals
              : t[menu].textTakeout}
          </motion.p>
        </AnimatePresence>
      </section>
      <div className="flex flex-col items-end justify-center">
        <div className="flex flex-col items-center space-y-4 w-fit me-5">
          <Image src={comp6} alt="Main Button"/>
          <Image src={comp5} alt="Toogle button"/>
          <div className="rounded-full flex flex-col border border-1 border-[#CE0003]
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
        </div>
      </div>
    </section>
    </main>
  <Footer menu={menu} setMenu={setMenu} t={t} model={model}/>
  </>
  )
}
