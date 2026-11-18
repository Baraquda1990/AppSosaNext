import type { Metadata } from "next";

// Official Appsosa Privacy Policy v1.0, copied from the active Django
// LegalDocument record (RU), effective 2026-09-25. Keep the content in sync
// whenever a new policy version is activated in Django.
// SHA256 (UTF-8): f2befceb6533a50eda4f5c309379c4f13e57f9a1469d073c287bbb30605999de

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Appsosa",
  description: "Официальная политика конфиденциальности Appsosa. Версия 1.0.",
  alternates: { canonical: "https://appsosa.am/privacy" },
};

const privacyContent: string = "Политика конфиденциальности\n\n1. Сбор данных\nМы собираем персональную информацию, необходимую для предоставления сервисов Appsosa, включая имя или логин, адрес электронной почты, номер телефона, адрес профиля или доставки, а также данные о местоположении, если пользователь разрешил доступ к геолокации.\n\n2. Использование данных\nМы используем эти данные для работы аккаунта, оформления и выполнения заказов, показа ближайших предложений, улучшения приложения, поддержки пользователей, предотвращения злоупотреблений и отправки сервисных уведомлений.\n\n3. Данные об использовании сервиса и согласиях\nПри использовании Appsosa также могут обрабатываться история заказов, избранное, отзывы, настройки уведомлений и токены устройств, а также техническая информация, необходимая для работы и безопасности сервиса. При принятии юридического документа Appsosa может сохранять тип и версию документа, язык, хеш содержимого, дату и время принятия, IP-адрес и сведения user-agent в целях аудита.\n\n4. Защита данных\nМы применяем организационные и технические меры, предназначенные для защиты персональной информации от несанкционированного доступа, изменения, раскрытия или утраты.\n\n5. Передача третьим лицам\nМы не продаём персональные данные. Информация может передаваться в объёме, необходимом для оказания сервиса, например продавцу для выполнения заказа или поставщикам инфраструктуры, уведомлений, хранения, аналитики и платежных услуг, действующим от нашего имени.\n\n6. Платёжные данные\nЕсли платежи обрабатывает внешний платежный провайдер, данные карты обрабатываются в соответствии с выбранной интеграцией этого провайдера. Appsosa не должна хранить полный номер карты, если выбранная платежная интеграция передаёт данные карты непосредственно платежному процессору.\n\n7. Обновления\nПолитика конфиденциальности может обновляться при изменении сервиса или требований законодательства. Если новая версия требует повторного согласия, приложение предложит ознакомиться с ней и принять её.\n";

export default function PrivacyPage() {
  const sections = privacyContent.trim().split(/\n\n/);
  return (
    <div style={{ backgroundColor: "#f9f9f7", padding: "48px 16px 90px", minHeight: "100vh" }}>
      <article style={{
        maxWidth: 860,
        margin: "0 auto",
        backgroundColor: "#fff",
        color: "#292929",
        border: "1px solid #e9e8e2",
        borderRadius: 20,
        padding: "clamp(20px, 5vw, 48px)",
        fontFamily: "inherit",
        lineHeight: 1.7,
        overflowWrap: "anywhere",
      }}>
        <p style={{ color: "#857100", fontWeight: 800, marginBottom: 8 }}>Appsosa</p>
        <h1 style={{ fontSize: "clamp(25px, 5vw, 38px)", lineHeight: 1.2, marginBottom: 12 }}>
          {sections[0]}
        </h1>
        <p style={{ color: "#666", fontSize: 14, marginBottom: 28 }}>
          Версия 1.0 · Действует с 25 сентября 2026 года
        </p>
        {sections.slice(1).map((section, index) => {
          const [heading, ...body] = section.split("\n");
          return (
            <section key={index} style={{ marginTop: 26 }}>
              <h2 style={{ fontSize: 20, lineHeight: 1.35, marginBottom: 10 }}>{heading}</h2>
              <p style={{ whiteSpace: "pre-line", margin: 0 }}>{body.join("\n")}</p>
            </section>
          );
        })}
        <aside style={{ marginTop: 36, paddingTop: 22, borderTop: "1px solid #e9e8e2" }}>
          <h2 style={{ fontSize: 18, marginBottom: 8 }}>Управление аккаунтом и данными</h2>
          <p style={{ marginBottom: 10 }}>
            Удалить аккаунт можно в приложении Appsosa через раздел «Профиль»,
            либо запросить удаление через страницу {" "}
            <a href="/delete-account" style={{ color: "#755F00", textDecoration: "underline" }}>
              «Удаление аккаунта»
            </a>.
          </p>
          <p style={{ margin: 0 }}>
            По вопросам конфиденциальности: {" "}
            <a href="mailto:appsosa.am@gmail.com" style={{ color: "#755F00", textDecoration: "underline" }}>
              appsosa.am@gmail.com
            </a>
          </p>
        </aside>
      </article>
    </div>
  );
}
