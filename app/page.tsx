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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
export type langType="arm"|"eng"|"ru"
export type menuType="WhanWeDo"|"WhatWeAre"|"WhatWeWant"|"WhatYouGet"|"OneQuestion"|"SurpriseBag"|"Contact"
  |"SideA"|"SideB"
export type TranslationSection = {
  menuItemTakeout: string
  menuItemDeals?: string
  textTakeout: React.ReactNode|string
  textDeals: React.ReactNode|string
}
//type titleType="Թեյքաութ մոդել"|"Takeout model"|"Модель Тейкаут"
export type MenuLangType = Record<langType,Record<menuType, TranslationSection>>
const PaymentCancellationReturnPolicyEN=(
<ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
<h3 className="font-bold">1. Payment Terms</h3>
<ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
    <li><span className="font-semibold">Accepted Payment Methods:</span> All transactions on Appsosa must be completed electronically in Armenian Dram (AMD) 
    via approved digital payment channels integrated into the App (including debit/credit cards,local digital wallets, and mobile payment solutions).</li>

    <li><span className="font-semibold">Pre-authorization & Charging:</span> When you place an order for a Surplus Food Bag or Takeout Item, your payment method is immediately charged 
    upon order confirmation.</li>

    <li><span className="font-semibold">Pricing & Taxes:</span> All prices listed on Appsosa are inclusive of applicable value-added tax (VAT) and state 
    taxes in compliance with State Revenue Committee (SRC) regulations. Prices displayed represent discounted surplus rates provided directly by partner merchants.</li>

    <li><span className="font-semibold">Receipts & Invoicing:</span> Digital receipts for completed transactions are generated within the App and sent to 
    your registered account email. Official fiscal receipts (e-tax cash register receipts) are provided directly by the partner merchant upon physical item pick-up.</li>
</ul>
<h3 className="font-bold">2. Order Cancellation Policy</h3>
<p>Because surplus food inventory is time-sensitive and highly perishable, specific cancellation windows apply:</p>

<b className="mt-5">Customer-Initiated Cancellations</b>
<ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
    <li><span className="font-semibold">Standard Cancellation Window:</span> You may cancel an order free of charge up to 2 hours prior to the start of 
    the Merchant's designated Pick-Up Window through the App interface.</li>
    <li><span className="font-semibold">Standard Cancellation Window:</span> Cancellations requested within 2 hours of the Pick-Up Window (or after 
    the Pick-Up Window has started) are non-refundable, as the Merchant has already prepared and set aside the surplus inventory specifically for you.</li>
</ul>
<b className="mt-5">Merchant or Platform-Initiated Cancellations</b>
<ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
    <li><span className="font-semibold">Insufficient Surplus / Out of Stock:</span> If a Merchant realizes they do not have sufficient surplus items to 
    fulfill your order, they reserve the right to cancel your order prior to the Pick-Up Window.</li>

    <li><span className="font-semibold">Automatic Refund:</span> In the event of a cancellation initiated by the Merchant or Appsosa, you will automatically 
      receive a 100% refund credited back to your original payment method.</li>
</ul>
<h3 className="font-bold">3. Pick-Up Responsibilities & Unclaimed Orders</h3>
<ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
    <li><span className="font-semibold">Pick-Up Window:</span> Customers are required to collect their orders at the designated Merchant venue strictly
     within the agreed Pick-Up Window specified in the order details.</li>

    <li><span className="font-semibold">Late Arrival / No-Show:</span> If you fail to arrive within the designated Pick-Up Window, the Merchant is no 
    longer obligated to hold the food (due to operational hours and food quality standards). Unclaimed orders will be marked as <b>"No-Show"</b> and are <b>non-refundable.</b></li>
</ul>

<h3 className="font-bold">4. Returns, Refunds & Issue Resolution</h3>
<p>Due to the perishable nature of ready-to-eat food and bakery items, traditional physical returns are generally <b>not applicable.</b> However, customer
 protection guidelines apply under the following circumstances:</p>

<b className="mt-5">Eligible Reasons for Refund / Credit</b>
<p>You may be eligible for a full or partial refund/app credit if:</p>
<ul className="[&>li]:ms-6 [&>li]:mb-2 list-decimal">
    <li><span className="font-semibold">Food Quality / Safety Issues:</span> The food items received are spoiled, unsafe for consumption, or expired at the 
    time of pick-up.</li>
    <li><span className="font-semibold">Incorrect / Missing Order:</span> The items provided differ fundamentally from the agreed surplus offer or key 
    dietary tags guaranteed by the listing (e.g., non-vegetarian items provided in an explicitly marked vegetarian bag).</li>
    <li><span className="font-semibold">Merchant Unavailable:</span> The Merchant store was closed during the specified Pick-Up Window, preventing collection.</li>
</ul>
<h3 className="font-bold">Non-Eligible Claims</h3>
<p>Refunds will <b>not</b> be issued for:</p>
<ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
    <li>Personal taste preferences or dissatisfaction with the specific mystery contents of a "Surplus Surprise Bag" (provided the items are safe, 
      fresh, and meet the advertised category).</li>
    <li>Failure to collect the order during the Pick-Up Window</li>
</ul>
<h3 className="font-bold">Refund Claim Procedure</h3>
<ul className="[&>li]:ms-6 [&>li]:mb-2 list-decimal">
    <li><span className="font-semibold">Report Window:</span> You must report any issue within <b>2 hours</b> of picking up the order (or within 2 hours of the 
    missed pick-up window if the venue was closed).</li>

    <li><span className="font-semibold">Required Documentation:</span> Submit a claim through the Appsosa Help Center in-app, attaching clear photo evidence of 
    the item, packaging, and digital receipt.</li>

    <li><span className="font-semibold">Processing Time:</span> Approved refund claims will be credited back to your original payment method or issued as 
    Appsosa wallet credits within 3 to 5 business days, depending on your bank's processing times.</li>
</ul>
</ScrollArea>
)

const PaymentCancellationReturnPolicyHY = (
  <ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
    <h3 className="font-bold">1. Վճարման պայմաններ</h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Ընդունվող վճարման եղանակներ.</span>{" "}
        Appsosa հարթակում բոլոր գործարքները պետք է կատարվեն էլեկտրոնային
        եղանակով՝ ՀՀ դրամով (AMD), հավելվածում ինտեգրված հաստատված թվային
        վճարային համակարգերի միջոցով (ներառյալ դեբետային/կրեդիտային քարտեր,
        տեղական թվային դրամապանակներ և բջջային վճարման լուծումներ):
      </li>

      <li>
        <span className="font-semibold">Նախնական հաստատում և գանձում.</span>{" "}
        Երբ դուք պատվիրում եք Ավելցուկային սննդի փաթեթ («Անակնկալ փաթեթ») կամ
        պատրաստի սնունդ (Takeout), գումարը գանձվում է ձեր վճարման միջոցից
        պատվերի հաստատման պահին:
      </li>

      <li>
        <span className="font-semibold">Գնագոյացում և հարկեր.</span>{" "}
        Appsosa-ում նշված բոլոր գները ներառում են կիրառելի ավելացված արժեքի
        հարկը (ԱԱՀ) և պետական այլ հարկերը՝ ՀՀ պետական եկամուտների կոմիտեի (ՊԵԿ)
        կանոնակարգերին համապատասխան: Ցուցադրված գները ներկայացնում են գործընկեր
        վաճառողների կողմից տրամադրված զեղչված սակագները:
      </li>

      <li>
        <span className="font-semibold">Անդորրագրեր և հաշիվ-ապրանքագրեր.</span>{" "}
        Կատարված գործարքների թվային անդորրագրերը գեներացվում են հավելվածում և
        ուղարկվում ձեր գրանցված էլ. փոստի հասցեին: Պաշտոնական հարկային (ՀԴՄ)
        կտրոնները տրամադրվում են անմիջապես գործընկեր վաճառողի կողմից՝ պատվերը
        ֆիզիկապես ստանալու պահին:
      </li>
    </ul>

    <h3 className="font-bold">2. Պատվերի չեղարկման քաղաքականություն</h3>

    <p>
      Քանի որ ավելցուկային սննդի պաշարները սահմանափակ ժամկետով են և արագ
      փչացող, գործում են չեղարկման հետևյալ ժամկետները:
    </p>

    <b className="mt-5">Հաճախորդի նախաձեռնությամբ չեղարկումներ</b>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">
          Ստանդարտ չեղարկման ժամանակահատված.
        </span>{" "}
        Դուք կարող եք անվճար չեղարկել պատվերը հավելվածի միջոցով՝ մինչև վաճառողի
        կողմից սահմանված Վերցնելու ժամանակահատվածի (Pick-Up Window) մեկնարկից
        <b> 2 ժամ առաջ</b>:
      </li>

      <li>
        <span className="font-semibold">Ուշացած չեղարկումներ.</span>{" "}
        Վերցնելու ժամանակահատվածից <b>2 ժամվա ընթացքում</b> (կամ դրա մեկնարկից
        հետո) ներկայացված չեղարկման հայտերը <b>ենթակա չեն վերադարձման</b>, քանի
        որ վաճառողն արդեն պատրաստել և առանձնացրել է տվյալ պաշարը հատուկ ձեզ
        համար:
      </li>
    </ul>

    <b className="mt-5">
      Վաճառողի կամ հարթակի նախաձեռնությամբ չեղարկումներ
    </b>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Ավելցուկի անբավարարություն.</span>{" "}
        Եթե վաճառողը պարզում է, որ չունի բավարար ավելցուկային ապրանք ձեր պատվերը
        կատարելու համար, նա իրավունք ունի չեղարկել պատվերը մինչև Վերցնելու
        ժամանակահատվածի սկիզբը:
      </li>

      <li>
        <span className="font-semibold">Ավտոմատ վերադարձ.</span>{" "}
        Վաճառողի կամ Appsosa-ի նախաձեռնությամբ չեղարկման դեպքում դուք ավտոմատ
        կերպով կստանաք <b>100% փոխհատուցում</b>՝ ձեր վճարման սկզբնական միջոցին:
      </li>
    </ul>

    <h3 className="font-bold">
      3. Պատվերը վերցնելու պարտավորություններ և չվերցված պատվերներ
    </h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Վերցնելու ժամանակահատված.</span>{" "}
        Հաճախորդները պարտավոր են վերցնել իրենց պատվերները նշված վաճառողի վայրից՝
        խստորեն պատվերի մանրամասներում նշված ժամանակահատվածում:
      </li>

      <li>
        <span className="font-semibold">
          Ուշացում / Չներկայանալ (No-Show).
        </span>{" "}
        Եթե դուք չեք ներկայանում սահմանված ժամանակահատվածում, վաճառողն այլևս
        պարտավոր չէ պահել սնունդը (աշխատանքային ժամերի և սննդի որակի պահպանման
        նկատառումներից ելնելով): Չվերցված պատվերները ստանում են{" "}
        <b>«Չներկայացած» (No-Show)</b> կարգավիճակ, և դրանց գումարը{" "}
        <b>ետ չի վերադարձվում</b>:
      </li>
    </ul>

    <h3 className="font-bold">
      4. Վերադարձ, փոխհատուցում և խնդիրների լուծում
    </h3>

    <p>
      Պատրաստի սննդի և հացաբուլկեղենի արագ փչացող բնույթի պատճառով ապրանքների
      դասական ֆիզիկական վերադարձը <b>չի կիրառվում</b>: Այնուամենայնիվ,
      հաճախորդների իրավունքների պաշտպանության կանոնները գործում են հետևյալ
      դեպքերում:
    </p>

    <b className="mt-5">Փոխհատուցման ենթակա դեպքեր</b>

    <p>Դուք կարող եք հավակնել ամբողջական կամ մասնակի փոխհատուցման, եթե՝</p>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-decimal">
      <li>
        <span className="font-semibold">
          Սննդի որակի կամ անվտանգության խնդիրներ.
        </span>{" "}
        Ստացված սննդամթերքը փչացած է, օգտագործման համար ոչ պիտանի կամ ժամկետանց
        է՝ վերցնելու պահին:
      </li>

      <li>
        <span className="font-semibold">Սխալ կամ թերի պատվեր.</span>{" "}
        Տրամադրված ապրանքները էապես տարբերվում են համաձայնեցված առաջարկից կամ
        նշված սննդակարգային պիտակներից (օրինակ՝ ոչ բուսակերական սնունդ է
        տրամադրվել հստակ «բուսակերական» նշումով փաթեթում):
      </li>

      <li>
        <span className="font-semibold">Վաճառողը փակ է.</span>{" "}
        Նշված Վերցնելու ժամանակահատվածում վաճառողի կետը փակ է եղել, ինչը
        անհնարին է դարձրել պատվերը ստանալը:
      </li>
    </ul>

    <h3 className="font-bold">Փոխհատուցման ոչ ենթակա դեպքեր</h3>

    <p>Գումարի վերադարձ <b>չի իրականացվում</b> հետևյալ դեպքերում.</p>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        Անձնական համային նախասիրություններ կամ դժգոհություն «Անակնկալ փաթեթի»
        կոնկրետ պարունակությունից (պայմանով, որ մթերքները թարմ են, անվտանգ և
        համապատասխանում են հայտարարված կատեգորիային):
      </li>

      <li>Սահմանված ժամանակահատվածում պատվերը չվերցնելը:</li>
    </ul>

    <h3 className="font-bold">Փոխհատուցման հայտի ներկայացման կարգը</h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-decimal">
      <li>
        <span className="font-semibold">Դիմելու ժամկետ.</span>{" "}
        Դուք պետք է տեղեկացնեք խնդրի մասին պատվերը վերցնելուց հետո{" "}
        <b>2 ժամվա ընթացքում</b> (կամ բաց թողնված ժամանակահատվածից հետո 2 ժամվա
        ընթացքում, եթե կետը փակ է եղել):
      </li>

      <li>
        <span className="font-semibold">Անհրաժեշտ փաստաթղթեր.</span>{" "}
        Հայտը ներկայացրեք հավելվածի Օգնության կենտրոնի (Help Center) միջոցով՝
        կցելով ապրանքի, փաթեթավորման և թվային անդորրագրի հստակ լուսանկարները:
      </li>

      <li>
        <span className="font-semibold">Մշակման ժամկետ.</span>{" "}
        Հաստատված հայտերի գումարը կվերադարձվի ձեր վճարման սկզբնական միջոցին կամ
        կփոխանցվի որպես Appsosa դրամապանակի կրեդիտ 3-ից 5 աշխատանքային օրվա
        ընթացքում՝ կախված ձեր բանկի ընթացակարգերից:
      </li>
    </ul>
  </ScrollArea>
)

const PaymentCancellationReturnPolicyRU = (
  <ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
    <h3 className="font-bold">1. Условия оплаты</h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Принимаемые способы оплаты:</span>{" "}
        Все транзакции на платформе Appsosa совершаются в электронном виде в
        армянских драмах (AMD) через интегрированные в приложение платежные
        каналы (включая дебетовые и кредитные карты, локальные электронные
        кошельки и сервисы мобильных платежей).
      </li>

      <li>
        <span className="font-semibold">Списание средств:</span>{" "}
        При оформлении заказа на пакет излишков еды («Сюрприз-пакет») или блюдо
        навынос (Takeout) оплата списывается с вашего платежного средства сразу
        после подтверждения заказа.
      </li>

      <li>
        <span className="font-semibold">Ценообразование и налоги:</span>{" "}
        Все цены, указанные в Appsosa, включают применимый налог на добавленную
        стоимость (НДС) и государственные налоги в соответствии с требованиями
        Комитета государственных доходов (КГД) РА. Отображаемые цены
        представляют собой специальные скидочные тарифы, установленные
        партнерами-продавцами.
      </li>

      <li>
        <span className="font-semibold">Чеки и квитанции:</span>{" "}
        Цифровые квитанции о совершенных операциях формируются в приложении и
        отправляются на ваш зарегистрированный адрес электронной почты.
        Официальные фискальные (кассовые) чеки предоставляются непосредственно
        партнером-продавцом при физической выдаче заказа.
      </li>
    </ul>

    <h3 className="font-bold">2. Политика отмены заказов</h3>

    <p>
      Поскольку излишки продуктов питания имеют ограниченный срок реализации и
      являются скоропортящимися, действуют следующие правила отмены:
    </p>

    <b className="mt-5">Отмена по инициативе покупателя</b>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Стандартное окно отмены:</span>{" "}
        Вы можете бесплатно отменить заказ через интерфейс приложения не
        позднее чем за <b>2 часа до начала</b> установленного продавцом окна
        самовывоза (Pick-Up Window).
      </li>

      <li>
        <span className="font-semibold">Поздняя отмена:</span>{" "}
        Запросы на отмену, поданные <b>менее чем за 2 часа</b> до начала окна
        самовывоза (или после его начала), <b>не подлежат возврату средств</b>,
        так как продавец уже подготовил и зарезервировал продукты специально
        для вас.
      </li>
    </ul>

    <b className="mt-5">
      Отмена по инициативе продавца или платформы
    </b>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Недостаток излишков:</span>{" "}
        Если продавец обнаруживает, что у него недостаточно излишков продукции
        для выполнения заказа, он оставляет за собой право отменить заказ до
        начала окна самовывоза.
      </li>

      <li>
        <span className="font-semibold">Автоматический возврат:</span>{" "}
        В случае отмены заказа со стороны продавца или Appsosa вы автоматически
        получите <b>100% возврат средств</b> на исходный способ оплаты.
      </li>
    </ul>

    <h3 className="font-bold">
      3. Обязательства по самовывозу и невостребованные заказы
    </h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Окно самовывоза:</span>{" "}
        Покупатель обязан забрать заказ в заведении продавца строго в пределах
        временного интервала, указанного в деталях заказа.
      </li>

      <li>
        <span className="font-semibold">Опоздание / Неявка (No-Show):</span>{" "}
        Если вы не забираете заказ в течение указанного времени, продавец больше
        не обязан хранить продукты (в связи с графиком работы заведения и
        требованиями к свежести еды). Невостребованные заказы получают статус{" "}
        <b>«Неявка» (No-Show)</b>, и их стоимость <b>не возмещается</b>.
      </li>
    </ul>

    <h3 className="font-bold">
      4. Возврат, возмещение средств и разрешение споров
    </h3>

    <p>
      Ввиду скоропортящегося характера готовой еды и выпечки стандартный
      физический возврат товара <b>не применяется</b>. Однако защита прав
      покупателей действует в следующих случаях:
    </p>

    <b className="mt-5">Основания для возврата средств / компенсации</b>

    <p>
      Вы можете претендовать на полный или частичный возврат средств (либо
      начисление бонусов в приложении), если:
    </p>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-decimal">
      <li>
        <span className="font-semibold">
          Проблемы с качеством или безопасностью еды:
        </span>{" "}
        Полученные продукты оказались испорченными, просроченными или
        непригодными для употребления на момент выдачи.
      </li>

      <li>
        <span className="font-semibold">Неверный или неполный заказ:</span>{" "}
        Выданные позиции принципиально не соответствуют заявленному предложению
        или указанным диетическим меткам (например, в пакете с пометкой
        «Вегетарианский» оказались мясные продукты).
      </li>

      <li>
        <span className="font-semibold">Заведение закрыто:</span>{" "}
        Точка продавца была закрыта в указанное окно самовывоза, что сделало
        получение заказа невозможным.
      </li>
    </ul>

    <h3 className="font-bold">Случаи, не подлежащие компенсации</h3>

    <p>Возврат средств <b>не производится</b> в следующих ситуациях:</p>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        Субъективные вкусовые предпочтения или недовольство конкретным составом
        «Сюрприз-пакета» (при условии, что продукты свежие, безопасные и
        соответствуют заявленной категории).
      </li>

      <li>
        Несвоевременное прибытие за заказом (пропуск окна самовывоза).
      </li>
    </ul>

    <h3 className="font-bold">Порядок подачи претензии на возврат</h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-decimal">
      <li>
        <span className="font-semibold">Срок обращения:</span>{" "}
        Сообщить о проблеме необходимо в течение <b>2 часов</b> с момента
        получения заказа (или в течение 2 часов после окончания окна
        самовывоза, если заведение было закрыто).
      </li>

      <li>
        <span className="font-semibold">Необходимые подтверждения:</span>{" "}
        Оформите обращение через Службу поддержки (Help Center) в приложении,
        прикрепив четкие фотографии продуктов, упаковки и цифровой квитанции.
      </li>

      <li>
        <span className="font-semibold">Сроки обработки:</span>{" "}
        После одобрения заявки средства будут возвращены на ваш исходный способ
        оплаты или зачислены на внутренний кошелек Appsosa в течение 3–5
        рабочих дней (в зависимости от регламента вашего банка).
      </li>
    </ul>
  </ScrollArea>
)

const MerchantTermsConditionsEN=(
  <ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
    <h3 className="font-bold">
      1. Financial Terms, Payouts & Tax Compliance
    </h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Transaction Processing:</span>{" "}
        Appsosa collects payments electronically from Buyers in Armenian Dram
        (AMD) on behalf of the Merchant at the exact moment a Takeout order is
        confirmed.
      </li>

      <li>
        <span className="font-semibold">Commission & Platform Fees:</span>{" "}
        Appsosa deducts its agreed service commission (and applicable payment
        processing fees) from the gross order value prior to settlement, in
        accordance with your Partner Agreement.
      </li>

      <li>
        <span className="font-semibold">Payout Schedule:</span>{" "}
        Net earnings for completed and undisputed Takeout orders are transferred
        to the Merchant’s registered corporate bank account in Armenia on a
        scheduled settlement cycle (e.g., weekly or bi-weekly), accompanied by a
        downloadable settlement statement inside the Merchant Dashboard.
      </li>

      <li>
        <span className="font-semibold">Fiscal Receipts (ՀԴՄ) & Taxes:</span>{" "}
        The Merchant acts as the direct seller of record to the Buyer. In
        strict compliance with Armenian tax legislation and State Revenue
        Committee (SRC) regulations, the Merchant is solely responsible for
        issuing the official fiscal cash register receipt (ՀԴՄ) directly to the
        Buyer upon physical pick-up and reporting all applicable taxes
        (including VAT or turnover tax).
      </li>

      <li>
        <span className="font-semibold">Commission Invoices:</span>{" "}
        Appsosa issues formal electronic tax invoices (e-invoices via the SRC
        system) to the Merchant for the platform commission and service fees
        charged during each settlement period.
      </li>
    </ul>

    <h3 className="font-bold">
      2. Surplus Listing, Food Safety & Pick-Up Obligations
    </h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">
          Accurate Categorization & Dietary Tags:
        </span>{" "}
        Merchants must accurately list the category of each Surplus Bag (e.g.,
        Bakery, Meals, Groceries) and strictly honor any advertised dietary tags
        (e.g., Vegetarian, Vegan, Halal).
      </li>

      <li>
        <span className="font-semibold">Freshness & Safety Guarantee:</span>{" "}
        While Surplus Bags consist of end-of-day or excess inventory, all food
        items provided must be{" "}
        <b>
          100% fresh, safe for human consumption, properly stored, and unspoiled
        </b>{" "}
        at the time of pick-up.
      </li>

      <li>
        <span className="font-semibold">Pick-Up Window Readiness:</span>{" "}
        Merchants must ensure confirmed orders are packed, clearly labeled with
        the order ID, and ready for immediate handover throughout the entire
        advertised Pick-Up Window.
      </li>

      <li>
        <span className="font-semibold">Store Operating Hours:</span>{" "}
        Merchants must ensure their venue remains open and accessible to Buyers
        during the entire published Pick-Up Window.
      </li>

      <li>
        <span className="font-semibold">
          Late Arrivals & Unclaimed Orders (No-Shows):
        </span>{" "}
        Merchants are only obligated to hold a Takeout order until the end of
        the designated Pick-Up Window. If a Buyer fails to arrive before the
        window closes, the Merchant may mark the order as <b>"No-Show"</b> in
        the Merchant Dashboard and still receive the full net payout for that
        order.
      </li>
    </ul>

    <h3 className="font-bold">
      3. Order Cancellations & Inventory Management
    </h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Real-Time Surplus Management:</span>{" "}
        Merchants must actively update available Surprise Bag quantities in the
        Merchant Dashboard before or during business hours to prevent
        overselling.
      </li>

      <li>
        <span className="font-semibold">
          Merchant-Initiated Cancellations (2-Hour Rule):
        </span>

        <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
          <li>
            If a Merchant sells out through regular walk-in traffic and lacks
            sufficient surplus to fulfill confirmed Appsosa orders, they must
            cancel the affected orders in the app{" "}
            <b>at least 2 hours prior</b> to the start of the Pick-Up Window.
          </li>

          <li>
            When canceled on time, the Buyer is notified automatically and
            receives a 100% refund.
          </li>
        </ul>
      </li>

      <li>
        <span className="font-semibold">
          Last-Minute Cancellations & Store Closures:
        </span>{" "}
        Canceling confirmed orders <b>within 2 hours</b> of the Pick-Up Window,
        or failing to open/be available during the Pick-Up Window, negatively
        impacts customer trust and may result in reduced platform visibility,
        temporary listing suspension, or administrative penalties as outlined
        in the Partner Agreement.
      </li>
    </ul>

    <h3 className="font-bold">
      4. Quality Disputes, Temporary Chats & Liability
    </h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Temporary Resolution Chat:</span>{" "}
        When a Buyer submits a quality or accuracy claim (which must be reported
        within <b>2 hours</b> of pick-up or the missed pick-up window), a{" "}
        <b>temporary in-app chat</b> opens connecting the Merchant and Buyer
        directly.
      </li>

      <li>
        <span className="font-semibold">Merchant Response Obligation:</span>{" "}
        Merchants must review any uploaded photo evidence, answer the Buyer's
        questions, and respond in the temporary chat within <b>24 hours</b> to
        resolve the dispute professionally.
      </li>

      <li>
        <span className="font-semibold">Merchant Liability:</span>{" "}
        The Merchant bears full financial responsibility (forfeiting the payout
        for the disputed order so the Buyer can be refunded) if a claim is
        validated due to:

        <ul className="[&>li]:ms-6 [&>li]:mb-2 list-decimal">
          <li>
            <span className="font-semibold">Food Safety / Spoilage:</span>{" "}
            The food provided was spoiled, moldy, expired, or unsafe to eat at
            pick-up.
          </li>

          <li>
            <span className="font-semibold">
              Violated Dietary Tags / Misrepresentation:
            </span>{" "}
            The contents fundamentally contradicted guaranteed dietary tags
            (e.g., meat items inside a strictly Vegetarian bag) or advertised
            categories.
          </li>

          <li>
            <span className="font-semibold">Inaccessible Venue:</span>{" "}
            The store was closed or staff refused to hand over a valid order
            during the scheduled Pick-Up Window.
          </li>
        </ul>
      </li>

      <li>
        <span className="font-semibold">Non-Valid Buyer Claims:</span>{" "}
        Merchants are <b>not</b> liable for refunds if a Buyer simply dislikes
        the specific assortment of items in a Surprise Bag (provided the items
        are safe, fresh, and match the advertised category) or if the Buyer
        arrived after the Pick-Up Window closed.
      </li>

      <li>
        <span className="font-semibold">Platform Escalation:</span>{" "}
        If the Merchant and Buyer cannot reach a mutual resolution in the
        temporary chat within <b>48 hours</b>, Appsosa Support will review the
        chat history and photo evidence to issue a binding final decision.
      </li>
    </ul>
  </ScrollArea>
)

const MerchantTermsConditionsHY=(
  <ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
    <h3 className="font-bold">
      1. Ֆինանսական պայմաններ, վճարումներ և հարկային համապատասխանություն
    </h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Գործարքների մշակում.</span>{" "}
        Appsosa-ն գնորդներից էլեկտրոնային եղանակով գանձում է վճարումները ՀՀ
        դրամով (AMD)՝ վաճառողի անունից՝ Takeout պատվերի հաստատման պահին:
      </li>

      <li>
        <span className="font-semibold">Միջնորդավճար և հարթակի վճարներ.</span>{" "}
        Նախքան վաճառողին գումարի փոխանցումը, Appsosa-ն գործարքի ընդհանուր
        արժեքից պահում է համաձայնեցված միջնորդավճարը (և վճարային համակարգի
        սպասարկման վճարները)՝ համաձայն Գործընկերային պայմանագրի:
      </li>

      <li>
        <span className="font-semibold">Վճարումների ժամանակացույց.</span>{" "}
        Կատարված և չվիճարկված Takeout պատվերների զուտ հասույթը փոխանցվում է
        վաճառողի գրանցված բանկային հաշվին սահմանված պարբերականությամբ
        (օրինակ՝ շաբաթական կամ երկշաբաթյա)՝ Վաճառողի կառավարման վահանակում
        (Merchant Dashboard) ներբեռնվող հաշվետվության հետ միասին:
      </li>

      <li>
        <span className="font-semibold">ՀԴՄ կտրոններ և հարկեր.</span>{" "}
        Վաճառողը հանդիսանում է ապրանքի անմիջական վաճառողը գնորդի համար: ՀՀ
        հարկային օրենսդրությանը և ՊԵԿ կանոնակարգերին համապատասխան՝ վաճառողը
        կրում է պատվերը հանձնելու պահին գնորդին պաշտոնական ՀԴՄ կտրոն տրամադրելու
        և բոլոր կիրառելի հարկերը (ԱԱՀ կամ շրջանառության հարկ) վճարելու
        բացառիկ պատասխանատվությունը:
      </li>

      <li>
        <span className="font-semibold">Հաշիվ-ապրանքագրեր.</span>{" "}
        Appsosa-ն վաճառողին տրամադրում է էլեկտրոնային հարկային հաշիվներ
        (e-Invoicing համակարգով)՝ հաշվետու ժամանակահատվածում գանձված
        միջնորդավճարների և ծառայությունների դիմաց:
      </li>
    </ul>

    <h3 className="font-bold">
      2. Ավելցուկի ներկայացման, սննդի անվտանգության և հանձնման պարտավորություններ
    </h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Ճշգրիտ կատեգորիաներ և պիտակներ.</span>{" "}
        Վաճառողները պարտավոր են ճշգրիտ նշել յուրաքանչյուր Ավելցուկային փաթեթի
        կատեգորիան (օրինակ՝ Հացաբուլկեղեն, Պատրաստի ուտեստներ, Մթերք) և խստորեն
        պահպանել հայտարարված սննդակարգային պիտակները (օրինակ՝ Բուսակերական,
        Վեգան, Հալալ):
      </li>

      <li>
        <span className="font-semibold">Թարմության և անվտանգության երաշխիք.</span>{" "}
        Թեև Ավելցուկային փաթեթները կազմվում են օրվա վերջում մնացած պաշարներից,
        տրամադրվող բոլոր մթերքները վերցնելու պահին պետք է լինեն{" "}
        <b>
          100% թարմ, սպառման համար անվտանգ, պատշաճ պահպանված և չփչացած
        </b>:
      </li>

      <li>
        <span className="font-semibold">
          Պատրաստվածություն Վերցնելու ժամանակահատվածում.
        </span>{" "}
        Վաճառողը պարտավոր է ապահովել, որ հաստատված պատվերները լինեն փաթեթավորված,
        պատվերի համարով պիտակավորված և պատրաստ անմիջական հանձնման՝ հայտարարված
        ողջ Վերցնելու ժամանակահատվածի (Pick-Up Window) ընթացքում:
      </li>

      <li>
        <span className="font-semibold">Աշխատանքային ժամերի պահպանում.</span>{" "}
        Վաճառողը պարտավոր է ապահովել, որ իր կետը բաց և հասանելի լինի գնորդների
        համար հրապարակված ողջ Վերցնելու ժամանակահատվածում:
      </li>

      <li>
        <span className="font-semibold">
          Ուշացումներ և չվերցված պատվերներ (No-Show).
        </span>{" "}
        Վաճառողը պարտավոր է պահել Takeout պատվերը միայն մինչև սահմանված Վերցնելու
        ժամանակահատվածի ավարտը: Եթե գնորդը չի ներկայանում մինչև ժամկետի
        ավարտը, վաճառողը կարող է կառավարման վահանակում նշել{" "}
        <b>«Չներկայացած» (No-Show)</b> կարգավիճակը և ստանալ տվյալ պատվերի
        ամբողջական զուտ վճարը:
      </li>
    </ul>

    <h3 className="font-bold">
      3. Պատվերների չեղարկում և պաշարների կառավարում
    </h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">
          Ավելցուկի իրական ժամանակում կառավարում.
        </span>{" "}
        Վաճառողները պարտավոր են ժամանակին թարմացնել հասանելի «Անակնկալ
        փաթեթների» քանակը կառավարման վահանակում՝ գերվաճառքից խուսափելու համար:
      </li>

      <li>
        <span className="font-semibold">
          Վաճառողի նախաձեռնությամբ չեղարկումներ (2 ժամվա կանոն).
        </span>

        <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
          <li>
            Եթե սովորական հաճախորդների հոսքի պատճառով վաճառողի մոտ չի մնում
            բավարար ավելցուկ հաստատված Appsosa պատվերները կատարելու համար, նա
            պարտավոր է չեղարկել համապատասխան պատվերները հավելվածում՝ Վերցնելու
            ժամանակահատվածի մեկնարկից <b>առնվազն 2 ժամ առաջ</b>:
          </li>

          <li>
            Ժամանակին չեղարկելու դեպքում գնորդն ավտոմատ ծանուցվում է և ստանում
            100% փոխհատուցում:
          </li>
        </ul>
      </li>

      <li>
        <span className="font-semibold">
          Վերջին պահին չեղարկումներ և փակ կետեր.
        </span>{" "}
        Վերցնելու ժամանակահատվածից <b>2 ժամվա ընթացքում</b> հաստատված պատվերների
        չեղարկումը կամ նշված ժամերին փակ լինելը վնասում է հաճախորդների
        վստահությանը և կարող է հանգեցնել հարթակում տեսանելիության նվազեցման,
        հաշվի ժամանակավոր կասեցման կամ պայմանագրով նախատեսված տույժերի:
      </li>
    </ul>

    <h3 className="font-bold">
      4. Որակի վերաբերյալ վեճեր, ժամանակավոր չաթեր և պատասխանատվություն
    </h3>

    <ul className="[&>li]:ms-6 [&>li]:mb-2 list-disc">
      <li>
        <span className="font-semibold">Ժամանակավոր չաթ (Temporary Chat).</span>{" "}
        Երբ գնորդը ներկայացնում է որակի կամ անհամապատասխանության վերաբերյալ
        բողոք (որը պետք է ներկայացվի պատվերը վերցնելուց կամ բաց թողնված
        ժամանակահատվածից հետո <b>2 ժամվա ընթացքում</b>), հավելվածում բացվում է{" "}
        <b>ժամանակավոր չաթ</b>, որն ուղղակիորեն կապում է Վաճառողին և Գնորդին:
      </li>

      <li>
        <span className="font-semibold">Արձագանքման պարտավորություն.</span>{" "}
        Վաճառողը պարտավոր է ուսումնասիրել գնորդի կցած լուսանկարները, պատասխանել
        հարցերին և արձագանքել ժամանակավոր չաթում <b>24 ժամվա ընթացքում</b>՝
        խնդիրը կառուցողական կարգավորելու նպատակով:
      </li>

      <li>
        <span className="font-semibold">Վաճառողի պատասխանատվությունը.</span>{" "}
        Վաճառողը կրում է լիարժեք ֆինանսական պատասխանատվություն (զրկվելով
        վիճարկվող պատվերի վճարից՝ գնորդին փոխհատուցելու նպատակով), եթե բողոքը
        հիմնավորված է հետևյալ պատճառներով.

        <ul className="[&>li]:ms-6 [&>li]:mb-2 list-decimal">
          <li>
            <span className="font-semibold">
              Սննդի անվտանգություն / փչացած լինել.
            </span>{" "}
            Վերցնելու պահին տրամադրված սնունդը եղել է փչացած, բորբոսնած,
            ժամկետանց կամ սպառման համար վտանգավոր:
          </li>

          <li>
            <span className="font-semibold">
              Սննդակարգային պիտակների խախտում.
            </span>{" "}
            Պարունակությունը էապես հակասել է երաշխավորված սննդակարգային
            պիտակներին (օրինակ՝ մսամթերք՝ «Բուսակերական» փաթեթում) կամ
            հայտարարված կատեգորիային:
          </li>

          <li>
            <span className="font-semibold">Անհասանելի վայր.</span>{" "}
            Սահմանված Վերցնելու ժամանակահատվածում կետը փակ է եղել, կամ
            անձնակազմը հրաժարվել է հանձնել վավեր պատվերը:
          </li>
        </ul>
      </li>

      <li>
        <span className="font-semibold">Անհիմն բողոքներ.</span>{" "}
        Վաճառողը <b>պատասխանատվություն չի կրում</b> փոխհատուցման համար, եթե
        գնորդին պարզապես դուր չի եկել «Անակնկալ փաթեթի» կոնկրետ տեսականին
        (պայմանով, որ մթերքները թարմ են, անվտանգ և համապատասխանում են
        կատեգորիային), կամ եթե գնորդը ներկայացել է Վերցնելու ժամանակահատվածի
        ավարտից հետո:
      </li>

      <li>
        <span className="font-semibold">Հարթակի միջամտություն.</span>{" "}
        Եթե վաճառողն ու գնորդը չեն կարողանում փոխհամաձայնության գալ ժամանակավոր
        չաթում <b>48 ժամվա ընթացքում</b>, Appsosa-ի աջակցման թիմն ուսումնասիրում
        է նամակագրությունն ու լուսանկարները և կայացնում վերջնական պարտադիր
        որոշում:
      </li>
    </ul>
  </ScrollArea>
)

const MerchantTermsConditionsRU=(
  <ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
    <h3 className="font-bold">
      1. Финансовые условия, выплаты и налоговое соответствие
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Обработка платежей:</span> Appsosa
        принимает оплату от Покупателей в электронном виде в армянских драмах
        (AMD) от имени Продавца в момент подтверждения заказа Takeout.
      </li>
      <li>
        <span className="font-semibold">Комиссия и сборы платформы:</span> Перед
        перечислением средств Продавцу Appsosa удерживает согласованную комиссию
        платформы (и применимые комиссии платежных систем) из общей суммы заказа
        в соответствии с Партнерским договором.
      </li>
      <li>
        <span className="font-semibold">График выплат:</span> Чистая выручка по
        выполненным и неоспоренным заказам Takeout перечисляется на
        зарегистрированный расчетный счет Продавца в РА согласно установленному
        графику (например, еженедельно или раз в две недели) с предоставлением
        детализированного отчета в Панели управления продавца (Merchant
        Dashboard).
      </li>
      <li>
        <span className="font-semibold">Фискальные чеки (ККМ / ՀԴՄ) и налоги:</span>{" "}
        Продавец выступает непосредственным продавцом товара для Покупателя. В
        соответствии с налоговым законодательством РА и требованиями КГД
        Продавец несет единоличную ответственность за выдачу официального
        кассового чека (ՀԴՄ) непосредственно Покупателю при физической выдаче
        заказа и уплату всех применимых налогов (включая НДС или налог с
        оборота).
      </li>
      <li>
        <span className="font-semibold">Счета-фактуры на комиссию:</span> Appsosa
        выставляет Продавцу официальные электронные налоговые счета (через
        систему e-Invoicing КГД РА) на сумму удержанной комиссии и сервисных
        услуг за каждый расчетный период.
      </li>
    </ul>

    <h3 className="font-bold">
      2. Требования к размещению излишков, безопасности еды и выдаче заказов
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Точность категорий и меток:</span>{" "}
        Продавец обязан корректно указывать категорию каждого «Сюрприз-пакета»
        (например, Выпечка, Готовые блюда, Продукты) и строго соблюдать
        заявленные диетические метки (например, Вегетарианский, Веганский,
        Халяль).
      </li>
      <li>
        <span className="font-semibold">Гарантия свежести и безопасности:</span>{" "}
        Несмотря на то что «Сюрприз-пакеты» формируются из остатков продукции на
        конец дня, все передаваемые продукты должны быть{" "}
        <b>
          на 100% свежими, безопасными для употребления, правильно хранившимися
          и неиспорченными
        </b>{" "}
        на момент выдачи.
      </li>
      <li>
        <span className="font-semibold">Готовность к окну самовывоза:</span>{" "}
        Подтвержденные заказы должны быть собраны, промаркированы номером заказа
        и готовы к немедленной выдаче в течение всего указанного окна самовывоза
        (Pick-Up Window).
      </li>
      <li>
        <span className="font-semibold">Соблюдение графика работы:</span>{" "}
        Продавец обязан обеспечить, чтобы его заведение было открыто и доступно
        для Покупателей в течение всего опубликованного окна самовывоза.
      </li>
      <li>
        <span className="font-semibold">
          Опоздания и невостребованные заказы (No-Show):
        </span>{" "}
        Продавец обязан хранить заказ Takeout только до окончания установленного
        окна самовывоза. Если Покупатель не явился до закрытия окна, Продавец
        вправе отметить заказ в Панели управления статусом{" "}
        <b>«Неявка» (No-Show)</b> и получить полную чистую выплату за данный
        заказ.
      </li>
    </ul>

    <h3 className="font-bold">
      3. Отмена заказов и управление остатками
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Управление излишками в реальном времени:
        </span>{" "}
        Продавец обязан своевременно обновлять количество доступных
        «Сюрприз-пакетов» в Панели управления, чтобы избежать продаж сверх
        фактического остатка.
      </li>
      <li>
        <span className="font-semibold">
          Отмена по инициативе Продавца (Правило 2 часов):
        </span>
        <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
          <li>
            Если из-за обычного потока посетителей у Продавца не остается
            достаточного количества излишков для выполнения подтвержденных
            заказов Appsosa, он обязан отменить соответствующие заказы в
            приложении <b>не менее чем за 2 часа</b> до начала окна самовывоза.
          </li>
          <li>
            При своевременной отмене Покупатель автоматически получает
            уведомление и 100% возврат средств.
          </li>
        </ul>
      </li>
      <li>
        <span className="font-semibold">
          Отмены в последний момент и закрытые точки:
        </span>{" "}
        Отмена подтвержденных заказов <b>менее чем за 2 часа</b> до окна
        самовывоза или закрытое заведение в указанные часы выдачи подрывают
        доверие пользователей и могут привести к понижению позиций на платформе,
        временной блокировке объявлений или санкциям согласно Партнерскому
        договору.
      </li>
    </ul>

    <h3 className="font-bold">
      4. Споры по качеству, временные чаты и ответственность сторон
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Временный чат (Temporary Chat):</span>{" "}
        При подаче Покупателем претензии по качеству или соответствию заказа
        (которая должна быть оформлена в течение <b>2 часов</b> с момента
        получения заказа или окончания пропущенного окна самовывоза) в
        приложении открывается <b>временный чат</b>, напрямую соединяющий
        Продавца и Покупателя.
      </li>
      <li>
        <span className="font-semibold">Обязанность ответа:</span> Продавец
        обязан изучить прикрепленные Покупателем фотографии, ответить на вопросы
        и отреагировать во временном чате в течение <b>24 часов</b> для
        конструктивного урегулирования спора.
      </li>
      <li>
        <span className="font-semibold">Ответственность Продавца:</span>{" "}
        Продавец несет полную финансовую ответственность (удерживается выплата
        по спорному заказу для возврата средств Покупателю), если претензия
        признана обоснованной по следующим причинам:
        <ol className="list-decimal [&>li]:ms-6 [&>li]:mb-2">
          <li>
            <b>Безопасность / порча продуктов:</b> Выданные продукты оказались
            испорченными, заплесневелыми, просроченными или непригодными для
            употребления на момент выдачи.
          </li>
          <li>
            <b>Нарушение диетических меток / несоответствие:</b> Содержимое
            принципиально противоречило гарантированным диетическим меткам
            (например, мясные продукты в пакете с пометкой «Вегетарианский») или
            заявленной категории.
          </li>
          <li>
            <b>Недоступность заведения:</b> Точка была закрыта, либо персонал
            отказался выдать оплаченный заказ в течение установленного окна
            самовывоза.
          </li>
        </ol>
      </li>
      <li>
        <span className="font-semibold">Необоснованные претензии:</span>{" "}
        Продавец <b>не несет ответственности</b> за возврат средств, если
        Покупателю субъективно не понравился конкретный набор продуктов в
        «Сюрприз-пакете» (при условии, что продукты свежие, безопасные и
        соответствуют заявленной категории) либо если Покупатель прибыл после
        окончания окна самовывоза.
      </li>
      <li>
        <span className="font-semibold">Арбитраж платформы:</span> Если Продавец
        и Покупатель не приходят к взаимному соглашению во временном чате в
        течение <b>48 часов</b>, Служба поддержки Appsosa изучает историю
        переписки и фотодоказательства и выносит окончательное обязательное
        решение.
      </li>
    </ul>
  </ScrollArea>
)

const ScheduledDealsPolicyEN=(
  <ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
    <h3 className="font-bold">1. Payment Terms</h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Accepted Payment Methods:</span> All
        transactions for Scheduled Deals must be completed electronically in
        Armenian Dram (AMD) via approved digital payment channels integrated
        into the App (including debit/credit cards, local digital wallets, and
        mobile payment solutions).
      </li>
      <li>
        <span className="font-semibold">
          Order Authorization &amp; Charging:
        </span>{" "}
        When you place a Scheduled Deal order, the total amount—comprising the
        discounted product price and applicable delivery fee—is charged upon
        order confirmation to reserve your promotional inventory.
      </li>
      <li>
        <span className="font-semibold">Pricing, Delivery Fees &amp; Taxes:</span>{" "}
        All prices and delivery fees listed on Appsosa are inclusive of
        applicable value-added tax (VAT) and state taxes in compliance with
        State Revenue Committee (SRC) regulations.
      </li>
      <li>
        <span className="font-semibold">Receipts &amp; Invoicing:</span> Digital
        payment receipts are generated immediately upon payment and are
        available for viewing and <b>direct download inside the App</b> (under
        your Order History). Official fiscal receipts (e-tax cash register
        receipts) are issued by the Merchant and/or delivery partner upon order
        dispatch or physical handover.
      </li>
    </ul>

    <h3 className="font-bold">2. Order Cancellation Policy</h3>

    <p className="mb-2">
      The expected delivery date or timeframe is determined by the Merchant and
      is <b>clearly displayed to the buyer prior to purchase</b>. Because
      Scheduled Deals involve merchant-scheduled fulfillment windows, the
      following cancellation rules apply:
    </p>

    <h4 className="font-bold">Customer-Initiated Cancellations</h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Free Cancellation Window (Before Dispatch):
        </span>{" "}
        You may cancel your order free of charge through the App at any time{" "}
        <b>
          before the Merchant packs and hands the order over to the
          courier/logistics partner
        </b>{" "}
        (status: <i>"Pending"</i> or <i>"Confirmed"</i>), or within{" "}
        <b>24 hours</b> of placing the order if dispatch has not yet occurred.
      </li>
      <li>
        <span className="font-semibold">After Dispatch / In Transit:</span> Once
        the order status changes to <b>"Dispatched / Out for Delivery"</b>, the
        order can no longer be canceled free of charge. If you refuse delivery
        at the door without a valid defect claim, the{" "}
        <b>delivery fee is non-refundable</b> (and return shipping costs may be
        deducted from the product refund).
      </li>
    </ul>

    <h4 className="font-bold">
      Merchant or Platform-Initiated Cancellations
    </h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Stock Discrepancy / Fulfillment Delay:
        </span>{" "}
        If a Merchant is unable to fulfill or dispatch your order within the{" "}
        <b>delivery date/timeframe displayed at checkout</b>, you will be
        notified in-app and given the option to either accept a revised
        delivery date or cancel for an immediate <b>100% refund</b> (including
        delivery fees) back to your original payment method.
      </li>
    </ul>

    <h3 className="font-bold">
      3. Delivery Scheduling &amp; Failed Deliveries
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Delivery Date &amp; Confirmation:</span>{" "}
        Before completing a purchase, the buyer sees the exact delivery date or
        delivery window set by the Merchant. Prior to arrival, the courier or
        App will notify you via push notification/SMS with the specific time
        slot.
      </li>
      <li>
        <span className="font-semibold">Rescheduling:</span> If you are
        unavailable on the scheduled delivery day, you may request a one-time
        reschedule through the App or with the courier at least{" "}
        <b>4 hours prior</b> to the delivery slot.
      </li>
      <li>
        <span className="font-semibold">
          Courier Waiting Time &amp; Failed Attempts:
        </span>{" "}
        Upon arrival, the courier will wait up to <b>10 minutes</b>. If two
        delivery attempts fail due to an incorrect address or customer
        unavailability without prior rescheduling, the order will be returned
        to the Merchant, and any refund issued will exclude the{" "}
        <b>round-trip delivery costs</b>.
      </li>
    </ul>

    <h3 className="font-bold">
      4. Returns, Refunds &amp; Issue Resolution
    </h3>

    <h4 className="font-bold">
      A. Short-Dated / Best-Before Food &amp; Beverages
    </h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Understanding "Best Before" vs. Safety:
        </span>{" "}
        Appsosa specializes in surplus inventory. Products listed under Deals
        may be <b>short-dated or past their commercial "Best Before" date</b>,
        provided they remain completely{" "}
        <b>safe, unspoiled, and good to use/consume</b> within the timeframe
        indicated in the product listing. Purchasing such items constitutes
        acceptance of their stated shelf-life condition.
      </li>
      <li>
        <span className="font-semibold">No Standard Physical Returns:</span> Due
        to food safety constraints, edible or perishable items cannot be
        physically returned once delivered.
      </li>
      <li>
        <span className="font-semibold">Eligible Refunds:</span> You are
        entitled to a full or partial refund if items arrive{" "}
        <b>
          spoiled, unsafe for consumption, damaged/leaking in transit, or past
          the "Good to Use Until" condition promised in the listing
        </b>
        , provided you report the issue within <b>24 hours</b> of delivery.
      </li>
    </ul>

    <h4 className="font-bold">
      B. Non-Perishable, Sealed &amp; Retail Goods (e.g., Cosmetics, Household,
      Dry Goods)
    </h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">7-Day Return Right:</span> In accordance
        with Armenian distance-selling regulations, you may request a return
        within <b>7 calendar days</b> of receiving non-perishable items,
        provided that:
        <ol className="list-decimal [&>li]:ms-6 [&>li]:mb-2">
          <li>
            The product is{" "}
            <b>
              unused, unopened, and in its original sealed packaging
            </b>{" "}
            (hygiene seals and factory labels must remain intact).
          </li>
          <li>
            You provide the digital receipt downloadable from the App.
          </li>
        </ol>
      </li>
      <li>
        <span className="font-semibold">Return Shipping Costs:</span> If the
        return is due to a <b>Merchant error or a damaged/defective item</b>,{" "}
        <b>the Merchant covers all return logistics costs and issues a 100% refund</b>.
        If you are returning an unopened item due to a personal change of mind,
        you are responsible for the return delivery fee.
      </li>
    </ul>

    <h4 className="font-bold">
      Dispute Resolution &amp; Refund Claim Procedure
    </h4>

    <ol className="list-decimal [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Temporary Resolution Chat:</span> All
        return requests, product questions, and quality disputes are handled
        directly through a{" "}
        <b>temporary in-app chat connecting the Buyer and the Merchant</b>.
      </li>
      <li>
        <span className="font-semibold">Submitting Evidence:</span> Within the
        applicable reporting window (<b>24 hours</b> for food/damage;{" "}
        <b>7 days</b> for unopened retail items), open a dispute on your order
        to launch the temporary chat, where you can{" "}
        <b>upload clear photos of the product</b>, ask questions, and coordinate
        return logistics directly with the Merchant.
      </li>
      <li>
        <span className="font-semibold">Refund Processing:</span> Once the
        Merchant confirms the return or approves the refund claim in the
        resolution chat, the refund will be credited back directly to your{" "}
        <b>original payment method</b> within <b>3 to 5 business days</b>{" "}
        (depending on your bank's processing times).
      </li>
    </ol>
  </ScrollArea>
)

const ScheduledDealsPolicyHY=(
  <ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
    <h3 className="font-bold">1. Վճարման պայմաններ</h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Ընդունվող վճարման եղանակներ.</span>{" "}
        Պլանավորված առաջարկների (Scheduled Deals) բոլոր գործարքները պետք է
        կատարվեն էլեկտրոնային եղանակով՝ ՀՀ դրամով (AMD), հավելվածում ինտեգրված
        վճարային համակարգերի միջոցով (դեբետային/կրեդիտային քարտեր, թվային
        դրամապանակներ և բջջային վճարման լուծումներ):
      </li>
      <li>
        <span className="font-semibold">Գումարի հաստատում և գանձում.</span>{" "}
        Առաքմամբ պատվեր գրանցելիս ընդհանուր գումարը՝ ներառյալ զեղչված ապրանքի
        արժեքը և առաքման վճարը, գանձվում է պատվերի հաստատման պահին՝ ակցիոն
        պաշարը ձեզ համար ամրագրելու նպատակով:
      </li>
      <li>
        <span className="font-semibold">
          Գնագոյացում, առաքման վճարներ և հարկեր.
        </span>{" "}
        Appsosa-ում նշված բոլոր գները ներառում են կիրառելի ԱԱՀ-ն և պետական այլ
        հարկերը՝ ՀՀ ՊԵԿ կանոնակարգերին համապատասխան:
      </li>
      <li>
        <span className="font-semibold">
          Անդորրագրեր և հաշիվ-ապրանքագրեր.
        </span>{" "}
        Թվային անդորրագրերը գեներացվում են վճարումից անմիջապես հետո և հասանելի
        են դիտման ու <b>անմիջական ներբեռնման համար հենց հավելվածում</b>{" "}
        («Պատվերների պատմություն» բաժնում): Պաշտոնական հարկային (ՀԴՄ) կտրոնները
        տրամադրվում են վաճառողի և/կամ առաքման ծառայության կողմից՝ առաքման կամ
        հանձնման պահին:
      </li>
    </ul>

    <h3 className="font-bold">2. Պատվերի չեղարկման քաղաքականություն</h3>

    <p className="mb-2">
      Առաքման ամսաթիվը կամ ժամկետը որոշվում է վաճառողի կողմից և{" "}
      <b>հստակ ցուցադրվում է գնորդին մինչև գնում կատարելը</b>: Գործում են
      չեղարկման հետևյալ կանոնները:
    </p>

    <h4 className="font-bold">Հաճախորդի նախաձեռնությամբ չեղարկումներ</h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Անվճար չեղարկման ժամանակահատված (մինչև առաքիչին հանձնելը).
        </span>{" "}
        Դուք կարող եք անվճար չեղարկել պատվերը հավելվածի միջոցով ցանկացած պահի՝{" "}
        <b>մինչև վաճառողը կփաթեթավորի և պատվերը կհանձնի առաքիչին</b>{" "}
        (կարգավիճակը՝ <i>«Սպասման մեջ»</i> կամ <i>«Հաստատված»</i>), կամ պատվերը
        գրանցելուց հետո <b>24 ժամվա ընթացքում</b>, եթե առաքումը դեռ չի սկսվել:
      </li>
      <li>
        <span className="font-semibold">Առաքման ընթացքում.</span> Երբ պատվերի
        կարգավիճակը դառնում է <b>«Ուղարկված է / Առաքվում է»</b>, պատվերն այլևս
        հնարավոր չէ անվճար չեղարկել: Առանց հիմնավոր թերության պատվերից տեղում
        հրաժարվելու դեպքում <b>առաքման վճարը չի վերադարձվում</b> (իսկ վերադարձի
        առաքման ծախսերը կարող են պահվել ապրանքի գումարից):
      </li>
    </ul>

    <h4 className="font-bold">
      Վաճառողի կամ հարթակի նախաձեռնությամբ չեղարկումներ
    </h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Պաշարի անհամապատասխանություն / ուշացում.
        </span>{" "}
        Եթե վաճառողը չի կարողանում կատարել պատվերը{" "}
        <b>վճարման պահին ցուցադրված առաքման ժամկետում</b>, դուք կստանաք ծանուցում
        հավելվածում և հնարավորություն կունենաք կա՛մ համաձայնել առաքման նոր
        ամսաթվին, կա՛մ չեղարկել պատվերը՝ ստանալով անմիջական{" "}
        <b>100% փոխհատուցում</b> (ներառյալ առաքման վճարը) ձեր վճարման սկզբնական
        միջոցին:
      </li>
    </ul>

    <h3 className="font-bold">
      3. Առաքման ժամանակացույց և չհաջողված առաքումներ
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Առաքման ամսաթիվ և հաստատում.</span>{" "}
        Գնումը կատարելուց առաջ գնորդը տեսնում է վաճառողի կողմից սահմանված
        առաքման կոնկրետ ամսաթիվը կամ ժամանակահատվածը: Մինչև առաքումը առաքիչը կամ
        հավելվածը նախապես կծանուցեն ձեզ ժամային միջակայքի մասին:
      </li>
      <li>
        <span className="font-semibold">Վերապլանավորում.</span> Եթե նշված օրը
        հասանելի չեք, կարող եք մեկ անգամ անվճար փոխել առաքման օրը հավելվածի
        միջոցով՝ առաքման ժամից առնվազն <b>4 ժամ առաջ</b>:
      </li>
      <li>
        <span className="font-semibold">
          Սպասելաժամանակ և չհաջողված փորձեր.
        </span>{" "}
        Հասցե հասնելուց հետո առաքիչը սպասում է մինչև <b>10 րոպե</b>: Եթե սխալ
        հասցեի կամ հաճախորդի անհասանելիության պատճառով առաքման երկու փորձերը
        ձախողվում են, պատվերը վերադարձվում է վաճառողին, իսկ փոխհատուցվող
        գումարից պահվում են <b>երկկողմանի առաքման ծախսերը</b>:
      </li>
    </ul>

    <h3 className="font-bold">
      4. Վերադարձ, փոխհատուցում և խնդիրների լուծում
    </h3>

    <h4 className="font-bold">
      Ա. Կարճ ժամկետով / «Պիտանի է մինչև» նշումով սննդամթերք և ըմպելիքներ
    </h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          «Պիտանի է մինչև» ժամկետի պարզաբանում.
        </span>{" "}
        Appsosa-ն մասնագիտացած է ավելցուկային պաշարների իրացման մեջ: Առաջարկվող
        ապրանքները կարող են ունենալ կարճ պիտանելիության ժամկետ կամ լինել{" "}
        <b>կոմերցիոն ժամկետին մոտ/անցած, սակայն լիովին պիտանի օգտագործման համար</b>{" "}
       ՝ ապրանքի նկարագրության մեջ նշված ժամկետում: Այդպիսի ապրանքների գնումը
        նշանակում է համաձայնություն դրանց նշված պիտանելիության պայմաններին:
      </li>
      <li>
        <span className="font-semibold">Ֆիզիկական վերադարձի բացակայություն.</span>{" "}
        Սննդի անվտանգության նկատառումներից ելնելով՝ սննդամթերքը ստանալուց հետո
        ֆիզիկապես հետ չի ընդունվում:
      </li>
      <li>
        <span className="font-semibold">Փոխհատուցում.</span> Դուք իրավունք ունեք
        ստանալ ամբողջական կամ մասնակի փոխհատուցում, եթե ապրանքը հասել է{" "}
        <b>
          փչացած, օգտագործման համար ոչ պիտանի, տեղափոխման ընթացքում վնասված կամ
          չի համապատասխանում նկարագրության մեջ նշված «Պիտանի է օգտագործման
          մինչև» պայմանին
        </b>
        , եթե դիմեք առաքումից հետո <b>24 ժամվա ընթացքում</b>:
      </li>
    </ul>

    <h4 className="font-bold">
      Բ. Չփչացող, փակ փաթեթավորմամբ և մանրածախ ապրանքներ (կոսմետիկա,
      տնտեսական ապրանքներ և այլն)
    </h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">7-օրյա վերադարձի իրավունք.</span> ՀՀ
        հեռավար առևտրի կանոնակարգերի համաձայն՝ դուք կարող եք վերադարձնել
        չփչացող ապրանքները ստանալուց հետո <b>7 օրացուցային օրվա ընթացքում</b>,
        եթե՝
        <ol className="list-decimal [&>li]:ms-6 [&>li]:mb-2">
          <li>
            Ապրանքը <b>չօգտագործված է, չբացված և գտնվում է գործարանային փակ
            փաթեթավորմամբ</b> (պաշտպանիչ կնիքներն ու պիտակները վնասված չեն):
          </li>
          <li>
            Առկա է հավելվածից ներբեռնվող թվային անդորրագիրը կամ ՀԴՄ կտրոնը:
          </li>
        </ol>
      </li>
      <li>
        <span className="font-semibold">Վերադարձի առաքման ծախսեր.</span> Եթե
        վերադարձը պայմանավորված է <b>վաճառողի սխալով կամ վնասված/թերի ապրանքով</b>,
        <b>
          {" "}վաճառողը հոգում է վերադարձի առաքման բոլոր ծախսերը և վերադարձնում
          գումարի 100%-ը
        </b>
        : Անձնական որոշմամբ չբացված ապրանքը վերադարձնելու դեպքում հետադարձ
        առաքման վճարը հոգում է հաճախորդը:
      </li>
    </ul>

    <h4 className="font-bold">
      Վեճերի կարգավորում և փոխհատուցման կարգը
    </h4>

    <ol className="list-decimal [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Ժամանակավոր չաթ (Temporary Chat).</span>{" "}
        Վերադարձի բոլոր հայտերը, ապրանքի վերաբերյալ հարցերը և որակի հետ կապված
        վեճերը լուծվում են անմիջապես{" "}
        <b>ժամանակավոր ներհավելվածային չաթում, որը կապում է Գնորդին և Վաճառողին</b>:
      </li>
      <li>
        <span className="font-semibold">Ապացույցների ներկայացում.</span>{" "}
        Սահմանված ժամկետում (<b>24 ժամ</b>՝ սննդի/վնասվածքի դեպքում, <b>7 օր</b>՝
        չբացված ապրանքների դեպքում) բացեք վեճ պատվերի էջում՝ ժամանակավոր չաթը
        միացնելու համար, որտեղ կարող եք <b>կցել ապրանքի լուսանկարները</b>, տալ
        հարցեր և վաճառողի հետ քննարկել վերադարձի մանրամասները:
      </li>
      <li>
        <span className="font-semibold">Գումարի վերադարձ.</span> Վաճառողի կողմից
        վերադարձը հաստատելուց հետո գումարը վերադարձվում է անմիջապես ձեր{" "}
        <b>վճարման սկզբնական միջոցին</b> <b>3-ից 5 աշխատանքային օրվա ընթացքում</b>{" "}
        (կախված ձեր բանկի ընթացակարգերից):
      </li>
    </ol>
  </ScrollArea>
)

const ScheduledDealsPolicyRU=(
  <ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
    <h3 className="font-bold">1. Условия оплаты</h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Принимаемые способы оплаты:</span>{" "}
        Все транзакции по плановым предложениям (Scheduled Deals) совершаются
        в электронном виде в армянских драмах (AMD) через интегрированные в
        приложение платежные каналы (дебетовые и кредитные карты, электронные
        кошельки и сервисы мобильных платежей).
      </li>
      <li>
        <span className="font-semibold">Списание средств:</span> При оформлении
        заказа с доставкой общая сумма — включая стоимость товара со скидкой и
        стоимость доставки — списывается при подтверждении заказа для
        резервирования акционного товара за вами.
      </li>
      <li>
        <span className="font-semibold">
          Ценообразование, доставка и налоги:
        </span>{" "}
        Все цены и стоимость доставки в Appsosa включают применимый НДС и
        государственные налоги в соответствии с требованиями КГД РА.
      </li>
      <li>
        <span className="font-semibold">Чеки и квитанции:</span> Цифровые
        квитанции формируются сразу после оплаты и доступны для просмотра и{" "}
        <b>прямого скачивания в приложении</b> (в разделе «История заказов»).
        Официальные фискальные (кассовые) чеки предоставляются продавцом и/или
        службой доставки при передаче заказа.
      </li>
    </ul>

    <h3 className="font-bold">2. Политика отмены заказов</h3>

    <p className="mb-2">
      Дата или сроки доставки определяются продавцом и{" "}
      <b>заранее отображаются покупателю до совершения покупки</b>. В рамках
      плановой доставки действуют следующие правила отмены:
    </p>

    <h4 className="font-bold">Отмена по инициативе покупателя</h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Бесплатная отмена (до передачи курьеру):
        </span>{" "}
        Вы можете бесплатно отменить заказ через приложение в любое время{" "}
        <b>
          до того, как продавец упакует и передаст заказ курьеру / логистической
          службе
        </b>{" "}
        (статус <i>«В ожидании»</i> или <i>«Подтвержден»</i>), либо в течение{" "}
        <b>24 часов</b> с момента оформления заказа, если отправка еще не
        состоялась.
      </li>
      <li>
        <span className="font-semibold">После отправки / в пути:</span> После
        перехода заказа в статус <b>«Отправлен / В пути»</b> бесплатная отмена
        невозможна. При отказе от получения исправного товара при доставке{" "}
        <b>стоимость доставки не возвращается</b> (а расходы на обратную
        логистику могут быть удержаны из суммы возврата).
      </li>
    </ul>

    <h4 className="font-bold">
      Отмена по инициативе продавца или платформы
    </h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Отсутствие товара / задержка:
        </span>{" "}
        Если продавец не может отправить заказ в{" "}
        <b>сроки, указанные при оформлении заказа</b>, вы получите уведомление
        в приложении и сможете либо согласиться на новую дату доставки, либо
        отменить заказ с мгновенным <b>100% возвратом средств</b> (включая
        стоимость доставки) на исходный способ оплаты.
      </li>
    </ul>

    <h3 className="font-bold">
      3. График доставки и неудачные попытки вручения
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Дата доставки и подтверждение:
        </span>{" "}
        Перед оплатой покупатель видит точную дату или интервал доставки,
        установленные продавцом. Перед прибытием курьер или приложение заранее
        уведомят вас о конкретном времени вручения.
      </li>
      <li>
        <span className="font-semibold">Перенос доставки:</span> Если вы не
        сможете принять заказ в назначенный день, вы можете один раз бесплатно
        перенести доставку в приложении не позднее чем за <b>4 часа</b> до
        начала интервала.
      </li>
      <li>
        <span className="font-semibold">
          Время ожидания и неудачная доставка:
        </span>{" "}
        По прибытии курьер ожидает до <b>10 минут</b>. Если две попытки доставки
        не удались из-за неверного адреса или недоступности покупателя без
        предварительного переноса, заказ возвращается продавцу, а из
        возвращаемой суммы удерживается{" "}
        <b>стоимость доставки в обе стороны</b>.
      </li>
    </ul>

    <h3 className="font-bold">
      4. Возврат, возмещение средств и разрешение споров
    </h3>

    <h4 className="font-bold">
      А. Продукты питания и напитки с истекающим сроком / отметкой «Годен до»
    </h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Срок годности и безопасность:</span>{" "}
        Appsosa специализируется на реализации товарных излишков. Товары в
        разделе Deals могут иметь короткий срок годности или{" "}
        <b>
          формально приближаться к коммерческому сроку реализации, оставаясь
          при этом полностью безопасными и пригодными к употреблению
        </b>{" "}
        в пределах периода, указанного в карточке товара. Покупка таких товаров
        означает согласие с их заявленным сроком годности.
      </li>
      <li>
        <span className="font-semibold">
          Отсутствие физического возврата:
        </span>{" "}
        В соответствии с санитарными нормами продукты питания после получения
        физически не возвращаются.
      </li>
      <li>
        <span className="font-semibold">Возмещение средств:</span> Вы имеете
        право на полный или частичный возврат, если товар доставлен{" "}
        <b>
          испорченным, непригодным к употреблению, поврежденным при перевозке
          или не соответствует условию «Годен до», указанному в описании
        </b>
        , при условии обращения в течение <b>24 часов</b> с момента доставки.
      </li>
    </ul>

    <h4 className="font-bold">
      Б. Нескоропортящиеся, запечатанные и розничные товары (косметика, товары
      для дома, бакалея в заводской упаковке и т.д.)
    </h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Право на возврат в течение 7 дней:
        </span>{" "}
        В соответствии с законодательством РА о дистанционной торговле вы
        можете вернуть нескоропортящийся товар в течение{" "}
        <b>7 календарных дней</b> с момента получения при соблюдении следующих
        условий:
        <ol className="list-decimal [&>li]:ms-6 [&>li]:mb-2">
          <li>
            Товар <b>не использовался, не вскрывался и находится в оригинальной
            запечатанной упаковке</b> (защитные пломбы и фабричные ярлыки не
            нарушены).
          </li>
          <li>
            Имеется цифровая квитанция, скачанная из приложения, или кассовый
            чек.
          </li>
        </ol>
      </li>
      <li>
        <span className="font-semibold">
          Расходы на обратную доставку:
        </span>{" "}
        Если возврат вызван <b>ошибкой продавца или браком/повреждением товара</b>
        , <b>продавец оплачивает всю обратную логистику и возвращает 100% стоимости</b>.
        При возврате невскрытого товара по личной инициативе покупателя обратную
        доставку оплачивает покупатель.
      </li>
    </ul>

    <h4 className="font-bold">
      Разрешение споров и порядок возврата средств
    </h4>

    <ol className="list-decimal [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Временный чат (Temporary Chat):</span>{" "}
        Все запросы на возврат, вопросы о товаре и споры по качеству решаются
        напрямую во{" "}
        <b>
          временном чате внутри приложения, который соединяет Покупателя и
          Продавца
        </b>
        .
      </li>
      <li>
        <span className="font-semibold">
          Предоставление доказательств:
        </span>{" "}
        В течение установленного срока (<b>24 часа</b> для продуктов/повреждений;
        <b> 7 дней</b> для невскрытых розничных товаров) откройте спор по заказу,
        чтобы активировать временный чат, где вы сможете{" "}
        <b>загрузить четкие фотографии товара</b>, задать вопросы и обсудить
        детали возврата напрямую с продавцом.
      </li>
      <li>
        <span className="font-semibold">Зачисление возврата:</span> После того
        как продавец подтвердит возврат или одобрит претензию в чате, средства
        перечисляются напрямую на ваш <b>исходный способ оплаты</b> в течение{" "}
        <b>3–5 рабочих дней</b> (в зависимости от регламента вашего банка).
      </li>
    </ol>
  </ScrollArea>
)

const MerchantTermsEN=(
  <ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
    <h3 className="font-bold">
      1. Financial Terms, Payouts & Tax Compliance
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Transaction Processing:</span>{" "}
        Appsosa collects payments electronically from Buyers in Armenian Dram
        (AMD) on behalf of the Merchant at the moment an order is confirmed.
      </li>
      <li>
        <span className="font-semibold">Commission & Platform Fees:</span>{" "}
        Appsosa deducts its agreed service commission (and applicable payment
        gateway processing fees) from the gross transaction value prior to
        settlement, as outlined in your Partner Agreement.
      </li>
      <li>
        <span className="font-semibold">Payout Schedule:</span> Net earnings for
        completed, undisputed orders are transferred to the Merchant’s
        registered corporate bank account in Armenia on a scheduled settlement
        cycle (e.g., weekly or bi-weekly), accompanied by a downloadable
        settlement statement in the Merchant Dashboard.
      </li>
      <li>
        <span className="font-semibold">
          Fiscal Receipts (ՀԴՄ) & Taxes:
        </span>{" "}
        The Merchant acts as the direct seller of record to the Buyer. In full
        compliance with Armenian tax legislation and State Revenue Committee
        (SRC) regulations, the Merchant is solely responsible for issuing the
        official fiscal cash register receipt (ՀԴՄ) for the goods sold and
        reporting all applicable taxes (including VAT or turnover tax).
      </li>
      <li>
        <span className="font-semibold">Commission Invoices:</span> Appsosa
        issues formal electronic tax invoices (e-invoices via the SRC system)
        to the Merchant for the platform commission and service fees charged
        during each settlement period.
      </li>
    </ul>

    <h3 className="font-bold">
      2. Inventory Listing, Quality & Fulfillment Obligations
    </h3>

    <h4 className="font-bold">A. Takeout Model (Surplus Bags)</h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Accurate Descriptions & Dietary Tags:
        </span>{" "}
        Merchants must accurately categorize Surprise Bags and honor strict
        dietary tags (e.g., Vegetarian, Vegan, Halal) if explicitly advertised.
      </li>
      <li>
        <span className="font-semibold">Pick-Up Window Adherence:</span>{" "}
        Merchants must have confirmed orders packed and ready for handover
        throughout the entire advertised Pick-Up Window.
      </li>
      <li>
        <span className="font-semibold">
          Late / Unclaimed Orders (No-Shows):
        </span>{" "}
        Merchants are only required to hold an order until the end of the
        designated Pick-Up Window. If a Buyer fails to arrive on time, the
        Merchant may mark the order as <b>"No-Show"</b> in the app and still
        receive full payout for the order.
      </li>
    </ul>

    <h4 className="font-bold">B. Scheduled Deals Model (Delivery)</h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Delivery Date Commitment:</span>{" "}
        Merchants set their own delivery dates/timeframes per Deal listing.
        Once an order is placed, the Merchant is bound to dispatch or deliver
        the order within that promised window.
      </li>
      <li>
        <span className="font-semibold">
          Shelf-Life & "Good to Use Until" Transparency:
        </span>{" "}
        Merchants may list short-dated items or goods past their commercial
        "Best Before" date, <b>provided they are 100% safe, unspoiled, and
        genuinely consumable/usable</b> through the exact{" "}
        <i>"Good to Use Until"</i> date clearly disclosed in the product
        listing. Listing unsafe, spoiled, or legally expired (unsafe) goods is
        strictly prohibited.
      </li>
      <li>
        <span className="font-semibold">Packaging Standards:</span> Merchants
        must package items securely to prevent leakage, crushing, or
        contamination during transit.
      </li>
    </ul>

    <h3 className="font-bold">3. Order Cancellations & Merchant Penalties</h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Avoiding Stockouts:</span> Merchants
        are expected to keep real-time inventory updated in the Merchant
        Dashboard to prevent post-purchase cancellations.
      </li>
      <li>
        <span className="font-semibold">
          Merchant-Initiated Cancellations:
        </span>
        <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
          <li>
            <i>Takeout:</i> If a Merchant lacks sufficient surplus to fulfill
            confirmed orders, they must cancel the order in the app{" "}
            <b>at least 2 hours prior</b> to the Pick-Up Window so the Buyer is
            notified and automatically refunded.
          </li>
          <li>
            <i>Deals (Delivery):</i> If a Merchant cannot fulfill an order
            within the promised delivery date, they must notify the Buyer
            immediately to propose a new date or cancel for a 100% Buyer refund.
          </li>
        </ul>
      </li>
      <li>
        <span className="font-semibold">Repeated Cancellations:</span> Frequent
        last-minute cancellations or failure to honor confirmed Pick-Up/Delivery
        windows may result in reduced search visibility, temporary listing
        suspension, or account review.
      </li>
    </ul>

    <h3 className="font-bold">
      4. Returns, Temporary Dispute Chats & Liability
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Temporary Resolution Chat:</span> When
        a Buyer opens a return request or quality dispute (within{" "}
        <b>2 hours</b> for Takeout; <b>24 hours</b> for delivered food/damage;
        or <b>7 days</b> for unopened non-perishable retail goods), a{" "}
        <b>temporary in-app chat</b> opens connecting the Merchant and Buyer
        directly.
      </li>
      <li>
        <span className="font-semibold">Merchant Response Obligation:</span>{" "}
        Merchants must review submitted photo evidence, answer Buyer questions,
        and respond within <b>24 hours</b> in the temporary chat to resolve the
        issue professionally.
      </li>
      <li>
        <span className="font-semibold">Liability for Errors & Defects:</span>
        <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
          <li>
            If a claim is valid due to <b>Merchant error</b> (wrong item,
            missing components, violated dietary tag), <b>spoiled/unsafe
            goods</b>, or <b>inadequate packaging causing transit damage</b>,
            the Merchant bears full financial responsibility.
          </li>
          <li>
            For returnable non-perishable Deals items where the error or defect
            lies with the Merchant, <b>the Merchant must cover all return
            logistics costs and authorize a 100% refund</b> to the Buyer.
          </li>
        </ul>
      </li>
      <li>
        <span className="font-semibold">
          Non-Fault Buyer Returns (7-Day Rule):
        </span>{" "}
        For unopened, factory-sealed non-perishable retail items returned
        within 7 days due to a Buyer's change of mind, the Buyer covers return
        shipping. Once the Merchant inspects and confirms the item is intact in
        the temporary chat, the product price is refunded to the Buyer.
      </li>
      <li>
        <span className="font-semibold">Escalation:</span> If the Merchant and
        Buyer cannot reach an agreement in the temporary chat within{" "}
        <b>48 hours</b>, Appsosa Support will review the chat logs and photo
        evidence to issue a binding final decision.
      </li>
    </ul>
  </ScrollArea>
)

const MerchantTermsHY=(
  <ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
    <h3 className="font-bold">
      1. Ֆինանսական պայմաններ, վճարումներ և հարկային համապատասխանություն
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Գործարքների մշակում.</span>{" "}
        Appsosa-ն գնորդներից էլեկտրոնային եղանակով գանձում է վճարումները ՀՀ
        դրամով (AMD)՝ վաճառողի անունից՝ պատվերի հաստատման պահին:
      </li>
      <li>
        <span className="font-semibold">Միջնորդավճար և հարթակի վճարներ.</span>{" "}
        Նախքան վաճառողին գումարի փոխանցումը, Appsosa-ն գործարքի ընդհանուր
        արժեքից պահում է համաձայնեցված միջնորդավճարը (և վճարային համակարգի
        սպասարկման վճարները)՝ համաձայն Գործընկերային պայմանագրի:
      </li>
      <li>
        <span className="font-semibold">Վճարումների ժամանակացույց.</span>{" "}
        Կատարված և չվիճարկված պատվերների զուտ հասույթը փոխանցվում է վաճառողի
        գրանցված բանկային հաշվին սահմանված պարբերականությամբ (օրինակ՝
        շաբաթական կամ երկշաբաթյա)՝ Վաճառողի կառավարման վահանակում (Merchant
        Dashboard) ներբեռնվող հաշվետվության հետ միասին:
      </li>
      <li>
        <span className="font-semibold">ՀԴՄ կտրոններ և հարկեր.</span>{" "}
        Վաճառողը հանդիսանում է ապրանքի անմիջական վաճառողը գնորդի համար: ՀՀ
        հարկային օրենսդրությանը և ՊԵԿ կանոնակարգերին համապատասխան՝ վաճառողը
        կրում է վաճառված ապրանքների համար պաշտոնական ՀԴՄ կտրոն տրամադրելու և
        բոլոր կիրառելի հարկերը (ԱԱՀ կամ շրջանառության հարկ) վճարելու
        բացառիկ պատասխանատվությունը:
      </li>
      <li>
        <span className="font-semibold">Հաշիվ-ապրանքագրեր.</span> Appsosa-ն
        վաճառողին տրամադրում է էլեկտրոնային հարկային հաշիվներ (e-Invoicing
        համակարգով)՝ հաշվետու ժամանակահատվածում գանձված միջնորդավճարների և
        ծառայությունների դիմաց:
      </li>
    </ul>

    <h3 className="font-bold">
      2. Ապրանքների ցուցադրման, որակի և կատարման պարտավորություններ
    </h3>

    <h4 className="font-bold">
      Ա. Takeout մոդել (Ավելցուկային փաթեթներ)
    </h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Ճշգրիտ նկարագրություն և պիտակներ.
        </span>{" "}
        Վաճառողները պարտավոր են ճշգրիտ ներկայացնել «Անակնկալ փաթեթների»
        կատեգորիաները և խստորեն պահպանել նշված սննդակարգային պիտակները
        (օրինակ՝ Բուսակերական, Վեգան, Հալալ):
      </li>
      <li>
        <span className="font-semibold">
          Վերցնելու ժամանակահատվածի պահպանում.
        </span>{" "}
        Վաճառողը պարտավոր է հաստատված պատվերները պատրաստ և փաթեթավորված պահել
        հայտարարված ողջ ժամանակահատվածի ընթացքում:
      </li>
      <li>
        <span className="font-semibold">
          Ուշացած / չվերցված պատվերներ (No-Show).
        </span>{" "}
        Վաճառողը պարտավոր է պահել պատվերը միայն մինչև սահմանված
        ժամանակահատվածի ավարտը: Եթե գնորդը չի ներկայանում, վաճառողը կարող է
        հավելվածում նշել <b>«Չներկայացած» (No-Show)</b> կարգավիճակը և ստանալ
        պատվերի ամբողջական վճարը:
      </li>
    </ul>

    <h4 className="font-bold">
      Բ. Պլանավորված առաջարկների մոդել (Deals / Առաքում)
    </h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Առաքման ամսաթվի պարտավորություն.
        </span>{" "}
        Վաճառողն ինքն է սահմանում առաքման ամսաթիվը կամ ժամկետը յուրաքանչյուր
        առաջարկի համար: Պատվերի գրանցումից հետո վաճառողը պարտավոր է ապահովել
        առաքումը խոստացված ժամկետում:
      </li>
      <li>
        <span className="font-semibold">
          Պիտանելիության ժամկետի թափանցիկություն.
        </span>{" "}
        Վաճառողները կարող են վաճառել կարճ ժամկետով կամ կոմերցիոն ժամկետին
        մոտ/անցած ապրանքներ՝{" "}
        <b>
          պայմանով, որ դրանք 100% անվտանգ են, չփչացած և լիովին պիտանի
          օգտագործման համար
        </b>{" "}
       ՝ ապրանքի նկարագրության մեջ հստակ նշված{" "}
        <i>«Պիտանի է օգտագործման մինչև»</i> ամսաթվի ընթացքում: Անվտանգության
        պահանջներին չհամապատասխանող կամ փչացած ապրանքների վաճառքը խստիվ
        արգելվում է:
      </li>
      <li>
        <span className="font-semibold">Փաթեթավորման ստանդարտներ.</span>{" "}
        Վաճառողները պարտավոր են պատշաճ կերպով փաթեթավորել ապրանքները՝
        տեղափոխման ընթացքում վնասվելուց կամ թափվելուց խուսափելու համար:
      </li>
    </ul>

    <h3 className="font-bold">
      3. Պատվերների չեղարկում և պատասխանատվություն
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Պաշարների վերահսկում.</span>{" "}
        Վաճառողները պարտավոր են ժամանակին թարմացնել ապրանքների քանակը
        կառավարման վահանակում՝ հաստատված պատվերների չեղարկումից խուսափելու
        համար:
      </li>
      <li>
        <span className="font-semibold">
          Վաճառողի նախաձեռնությամբ չեղարկումներ.
        </span>
        <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
          <li>
            <i>Takeout.</i> Եթե վաճառողը չունի բավարար պաշար հաստատված պատվերը
            կատարելու համար, նա պարտավոր է չեղարկել պատվերը հավելվածում՝
            Վերցնելու ժամանակահատվածից{" "}
            <b>առնվազն 2 ժամ առաջ</b>, որպեսզի գնորդը ծանուցվի և ստանա
            ավտոմատ վերադարձ:
          </li>
          <li>
            <i>Deals (Առաքում).</i> Եթե վաճառողը չի կարողանում կատարել պատվերը
            խոստացված առաքման օրը, նա պարտավոր է անմիջապես տեղեկացնել գնորդին՝
            առաջարկելով նոր ամսաթիվ կամ չեղարկելով պատվերը՝ գնորդին 100% գումարի
            վերադարձով:
          </li>
        </ul>
      </li>
      <li>
        <span className="font-semibold">Հաճախակի չեղարկումներ.</span>{" "}
        Վերջին պահին հաճախակի չեղարկումները կամ ժամկետների խախտումները կարող
        են հանգեցնել հարթակում տեսանելիության նվազեցման կամ հաշվի ժամանակավոր
        կասեցման:
      </li>
    </ul>

    <h3 className="font-bold">
      4. Վերադարձ, ժամանակավոր չաթեր և պատասխանատվություն
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Ժամանակավոր չաթ (Temporary Chat).
        </span>{" "}
        Երբ գնորդը բացում է վերադարձի կամ որակի վերաբերյալ հայտ (
        <b>2 ժամվա</b> ընթացքում՝ Takeout-ի համար, <b>24 ժամվա</b> ընթացքում՝
        առաքված սննդի/վնասվածքի համար, կամ <b>7 օրվա</b> ընթացքում՝ չբացված
        մանրածախ ապրանքների համար), հավելվածում բացվում է{" "}
        <b>ժամանակավոր չաթ</b>, որն ուղղակիորեն կապում է Վաճառողին և Գնորդին:
      </li>
      <li>
        <span className="font-semibold">Արձագանքման պարտավորություն.</span>{" "}
        Վաճառողը պարտավոր է ուսումնասիրել գնորդի կցած լուսանկարները, պատասխանել
        հարցերին և արձագանքել ժամանակավոր չաթում{" "}
        <b>24 ժամվա ընթացքում</b>՝ խնդիրը կառուցողական լուծելու նպատակով:
      </li>
      <li>
        <span className="font-semibold">
          Պատասխանատվություն սխալների և թերությունների համար.
        </span>
        <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
          <li>
            Եթե բողոքը հիմնավորված է <b>վաճառողի սխալի</b> (սխալ ապրանք,
            պակաս բաղադրիչներ, սննդակարգային պիտակի խախտում),{" "}
            <b>փչացած/անպիտան ապրանքի</b> կամ{" "}
            <b>ոչ պատշաճ փաթեթավորման</b> պատճառով, վաճառողը կրում է լիարժեք
            ֆինանսական պատասխանատվություն:
          </li>
          <li>
            Վերադարձի ենթակա չփչացող ապրանքների դեպքում, եթե խնդիրն առաջացել է
            վաճառողի մեղքով կամ ապրանքը վնասված է,{" "}
            <b>
              վաճառողը հոգում է վերադարձի առաքման բոլոր ծախսերը և հաստատում
              100% գումարի վերադարձ
            </b>:
          </li>
        </ul>
      </li>
      <li>
        <span className="font-semibold">
          Գնորդի նախաձեռնությամբ վերադարձ (7-օրյա կանոն).
        </span>{" "}
        Առանց թերության, գործարանային փակ փաթեթավորմամբ չփչացող ապրանքները
        7 օրվա ընթացքում վերադարձնելիս հետադարձ առաքման ծախսը հոգում է գնորդը:
        Ապրանքը ստանալուց և անվնաս լինելը ժամանակավոր չաթում հաստատելուց հետո
        ապրանքի արժեքը վերադարձվում է գնորդին:
      </li>
      <li>
        <span className="font-semibold">Հարթակի միջամտություն.</span>{" "}
        Եթե վաճառողն ու գնորդը չեն կարողանում համաձայնության գալ ժամանակավոր
        չաթում <b>48 ժամվա ընթացքում</b>, Appsosa-ի աջակցման թիմն ուսումնասիրում
        է նամակագրությունն ու լուսանկարները և կայացնում վերջնական պարտադիր
        որոշում:
      </li>
    </ul>
  </ScrollArea>
)

const MerchantTermsRU = (
  <ScrollArea className="h-[55dvh] w-[40dvw] rounded-md border p-4 font-normal">
    <h3 className="font-bold">
      1. Финансовые условия, выплаты и налоговое соответствие
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Обработка платежей:</span>{" "}
        Appsosa принимает оплату от Покупателей в электронном виде в армянских
        драмах (AMD) от имени Продавца в момент подтверждения заказа.
      </li>

      <li>
        <span className="font-semibold">
          Комиссия и сборы платформы:
        </span>{" "}
        Перед перечислением средств Продавцу Appsosa удерживает согласованную
        комиссию платформы (и применимые комиссии платежных шлюзов) из общей
        суммы транзакции в соответствии с Партнерским договором.
      </li>

      <li>
        <span className="font-semibold">График выплат:</span>{" "}
        Чистая выручка по выполненным и неоспоренным заказам перечисляется
        на зарегистрированный расчетный счет Продавца в РА согласно
        установленному графику (например, еженедельно или раз в две недели)
        с предоставлением детализированного отчета в Панели управления
        продавца (Merchant Dashboard).
      </li>

      <li>
        <span className="font-semibold">
          Фискальные чеки (ККМ / ՀԴՄ) и налоги:
        </span>{" "}
        Продавец выступает непосредственным продавцом товара для Покупателя.
        В соответствии с налоговым законодательством РА и требованиями КГД
        Продавец несет единоличную ответственность за выдачу официального
        кассового чека (ՀԴՄ) на реализованные товары и уплату всех применимых
        налогов (включая НДС или налог с оборота).
      </li>

      <li>
        <span className="font-semibold">
          Счета-фактуры на комиссию:
        </span>{" "}
        Appsosa выставляет Продавцу официальные электронные налоговые счета
        (через систему e-Invoicing КГД РА) на сумму удержанной комиссии и
        сервисных услуг за каждый расчетный период.
      </li>
    </ul>

    <h3 className="font-bold">
      2. Требования к размещению товаров, качеству и выполнению заказов
    </h3>

    <h4 className="font-bold">А. Модель Takeout (Сюрприз-пакеты)</h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Точность описаний и меток:
        </span>{" "}
        Продавец обязан корректно указывать категорию «Сюрприз-пакетов» и
        строго соблюдать заявленные диетические метки (например,
        Вегетарианский, Веганский, Халяль).
      </li>

      <li>
        <span className="font-semibold">
          Соблюдение окна самовывоза:
        </span>{" "}
        Подтвержденные заказы должны быть собраны и готовы к выдаче в течение
        всего указанного окна самовывоза.
      </li>

      <li>
        <span className="font-semibold">
          Опоздания и невостребованные заказы (No-Show):
        </span>{" "}
        Продавец обязан хранить заказ только до окончания установленного окна
        самовывоза. Если Покупатель не явился вовремя, Продавец вправе
        отметить заказ в приложении статусом <b>«Неявка» (No-Show)</b> и
        получить полную выплату за данный заказ.
      </li>
    </ul>

    <h4 className="font-bold">Б. Модель плановой доставки (Deals)</h4>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Обязательство по дате доставки:
        </span>{" "}
        Продавец самостоятельно устанавливает дату или сроки доставки для
        каждого предложения. После оформления заказа Продавец обязан
        обеспечить отправку или доставку в указанный срок.
      </li>

      <li>
        <span className="font-semibold">
          Прозрачность сроков годности («Годен до»):
        </span>{" "}
        Продавец вправе размещать товары с коротким сроком годности или
        товары, приближающиеся к коммерческому сроку реализации,{" "}
        <b>
          при условии, что они на 100% безопасны, не испорчены и полностью
          пригодны к употреблению/использованию
        </b>{" "}
        до конкретной даты <i>«Годен до»</i>, четко указанной в карточке
        товара. Размещение небезопасных или испорченных товаров строго
        запрещено.
      </li>

      <li>
        <span className="font-semibold">Стандарты упаковки:</span>{" "}
        Продавец обязан надежно упаковывать товары во избежание протекания,
        повреждения или порчи при транспортировке.
      </li>
    </ul>

    <h3 className="font-bold">
      3. Отмена заказов и ответственность Продавца
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">Актуальность остатков:</span>{" "}
        Продавец обязан своевременно обновлять наличие товаров в Панели
        управления во избежание отмены оплаченных заказов.
      </li>

      <li>
        <span className="font-semibold">
          Отмена по инициативе Продавца:
        </span>

        <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
          <li>
            <i>Takeout:</i> При нехватке излишков для выполнения подтвержденных
            заказов Продавец обязан отменить заказ в приложении{" "}
            <b>не менее чем за 2 часа</b> до начала окна самовывоза для
            своевременного уведомления Покупателя и автоматического возврата
            средств.
          </li>

          <li>
            <i>Deals (Доставка):</i> Если Продавец не может выполнить заказ
            в обещанную дату доставки, он обязан незамедлительно уведомить
            Покупателя, предложив новую дату или отменив заказ с 100% возвратом
            средств Покупателю.
          </li>
        </ul>
      </li>

      <li>
        <span className="font-semibold">Систематические отмены:</span>{" "}
        Частые отмены в последний момент или нарушение заявленных сроков
        выдачи/доставки могут привести к понижению позиций в выдаче,
        временной блокировке объявлений или пересмотру условий сотрудничества.
      </li>
    </ul>

    <h3 className="font-bold">
      4. Возвраты, временные чаты споров и ответственность сторон
    </h3>

    <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
      <li>
        <span className="font-semibold">
          Временный чат (Temporary Chat):
        </span>{" "}
        При открытии Покупателем заявки на возврат или претензии по качеству
        (в течение <b>2 часов</b> для Takeout; <b>24 часов</b> для доставленной
        еды/повреждений; <b>7 дней</b> для невскрытых розничных товаров)
        в приложении активируется <b>временный чат</b>, напрямую соединяющий
        Продавца и Покупателя.
      </li>

      <li>
        <span className="font-semibold">Обязанность ответа:</span>{" "}
        Продавец обязан изучить прикрепленные Покупателем фотографии,
        ответить на вопросы и отреагировать во временном чате в течение{" "}
        <b>24 часов</b> для конструктивного урегулирования ситуации.
      </li>

      <li>
        <span className="font-semibold">
          Ответственность за ошибки и брак:
        </span>

        <ul className="list-disc [&>li]:ms-6 [&>li]:mb-2">
          <li>
            Если претензия обоснована <b>ошибкой Продавца</b> (неверный товар,
            неполная комплектация, нарушение диетической метки),{" "}
            <b>испорченным/небезопасным товаром</b> или{" "}
            <b>ненадлежащей упаковкой</b>, Продавец несет полную финансовую
            ответственность.
          </li>

          <li>
            Для подлежащих возврату нескоропортящихся товаров из раздела
            Deals в случае ошибки Продавца или брака/повреждения товара{" "}
            <b>
              Продавец оплачивает всю обратную логистику и подтверждает
              100% возврат средств
            </b>{" "}
            Покупателю.
          </li>
        </ul>
      </li>

      <li>
        <span className="font-semibold">
          Возврат товара надлежащего качества (Правило 7 дней):
        </span>{" "}
        При возврате невскрытого нескоропортящегося товара в заводской
        упаковке в течение 7 дней по личной инициативе Покупателя обратную
        доставку оплачивает Покупатель. После получения товара и подтверждения
        его сохранности во временном чате стоимость товара возвращается
        Покупателю.
      </li>

      <li>
        <span className="font-semibold">Арбитраж платформы:</span>{" "}
        Если Продавец и Покупатель не приходят к соглашению во временном
        чате в течение <b>48 часов</b>, Служба поддержки Appsosa изучает
        переписку и фотодоказательства и выносит окончательное обязательное
        решение.
      </li>
    </ul>
  </ScrollArea>
)

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
        textTakeout:(<>
            <p>Էլ․ փոստ: <a href="mailto:appsosa.am@gmail.com" className="opacity-30 hover:opacity-100 transition-opacity duration-300">appsosa.am@gmail.com</a></p>
          </>),
        textDeals:(<>
            <p>Էլ․ փոստ: <a href="mailto:appsosa.am@gmail.com" className="opacity-30 hover:opacity-100 transition-opacity duration-300">appsosa.am@gmail.com</a></p>
          </>),
      },
    "SideA":{
        menuItemTakeout:"Վճարման, չեղարկման և վերադարձի քաղաքականություն",
        menuItemDeals:"Վճարման, չեղարկման և վերադարձի քաղաքականություն",
        textTakeout:(PaymentCancellationReturnPolicyHY),
        textDeals:(ScheduledDealsPolicyHY)
      },
    "SideB":{
        menuItemTakeout:"Պայմաններ և դրույթներ գործընկեր վաճառողների համար",
        menuItemDeals:"Պայմաններ և դրույթներ գործընկեր վաճառողների համար",
        textTakeout:(MerchantTermsConditionsHY),
        textDeals:(MerchantTermsHY)
      },

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
        textTakeout:(<>
            <p>Email: <a href="mailto:appsosa.am@gmail.com" className="opacity-30 hover:opacity-100 transition-opacity duration-300">appsosa.am@gmail.com</a></p>
          </>),
        textDeals:(<>
            <p>Email: <a href="mailto:appsosa.am@gmail.com" className="opacity-30 hover:opacity-100 transition-opacity duration-300">appsosa.am@gmail.com</a></p>
          </>),
      },
    "SideA":{
        menuItemTakeout:"Payment, Cancellation & Return Policy",
        menuItemDeals:"Payment, Cancellation & Return Policy",
        textTakeout:(PaymentCancellationReturnPolicyEN),
        textDeals:(ScheduledDealsPolicyEN)
      },
    "SideB":{
        menuItemTakeout:"Merchant Terms & Conditions",
        menuItemDeals:"Merchant Terms & Conditions",
        textTakeout:(MerchantTermsConditionsEN),
        textDeals:(MerchantTermsEN)
      },
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
        textTakeout:(<>
            <p>Почта: <a href="mailto:appsosa.am@gmail.com" className="opacity-30 hover:opacity-100 transition-opacity duration-300">appsosa.am@gmail.com</a></p>
          </>),
        textDeals:(<>
            <p>Почта: <a href="mailto:appsosa.am@gmail.com" className="opacity-30 hover:opacity-100 transition-opacity duration-300">appsosa.am@gmail.com</a></p>
          </>),
      },
    "SideA":{
        menuItemTakeout:"Политика оплаты, отмены и возврата",
        menuItemDeals:"Политика оплаты, отмены и возврата",
        textTakeout:(PaymentCancellationReturnPolicyRU),
        textDeals:(ScheduledDealsPolicyRU)
      },
    "SideB":{
        menuItemTakeout:"Условия и положения для партнеров-продавцов",
        menuItemDeals:"Условия и положения для партнеров-продавцов",
        textTakeout:(MerchantTermsConditionsRU),
        textDeals:(MerchantTermsRU)
      },
  },
}

export default function Page() {
  const [lang,setLang]=useState<langType>("arm")
  const [model,setModel]=useState<"takeout"|"deals">("takeout")
  const [menu,setMenu]=useState<menuType>("WhanWeDo")
  let t=menuLang[lang]
  const [title,setTitle]=useState<string>("Թեյքաութ մոդել")
  const [preTitle,setPreTitle]=useState<"From Surplus to Profit"|"От излишков к прибыли"|"Ավելցուկից դեպի շահույթ">("От излишков к прибыли")
  useEffect(()=>{
    if(model=="deals"){
      switch(lang){
        case "eng":
          setTitle("Deals model")
          setPreTitle("From Surplus to Profit")
        break
        case "arm":
          setTitle("Գործարքների մոդել")
          setPreTitle("Ավելցուկից դեպի շահույթ")
        break
        case "ru":
          setTitle("Модель Дилс")
          setPreTitle("От излишков к прибыли")
        break
      }
    }else if(model=="takeout"){
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
    }
  },[lang,model])

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
          <motion.div
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
          </motion.div>
        </AnimatePresence>
      </section>

      <aside className="flex flex-col items-end justify-start">
  
        <ul className="row-span-3 text-xl font-bold text-[#736942]/41
        [&>li>button:hover]:text-[#736942] [&>li>button]:transition [&>li>button]:duration-300
        space-y-3 mt-4 mb-15 me-5">
          <li><button className={`${menu=="SideA"&&"text-[#736942]"}`} 
                onClick={()=>setMenu("SideA")}
                >{model === "deals"?t["SideA"].menuItemDeals??t["SideA"].menuItemTakeout:t["SideA"].menuItemTakeout}
                </button></li>
          <li><button className={`${menu=="SideB"&&"text-[#736942]"}`} 
                onClick={()=>setMenu("SideB")}
                >{model === "deals"?t["SideB"].menuItemDeals??t["SideB"].menuItemTakeout:t["SideB"].menuItemTakeout}
                </button></li>
        </ul>
        
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

      </aside>
    </section>
    </main>
  <Footer menu={menu} setMenu={setMenu} t={t} model={model}/>
  </>
  )
}
