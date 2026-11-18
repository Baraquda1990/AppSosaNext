import type { Metadata } from "next";
import styles from "./delete-account.module.css";

export const metadata: Metadata = {
  title: "Удаление аккаунта Appsosa | Delete Appsosa account",
  description:
    "Как удалить аккаунт Appsosa и связанные данные в приложении или запросить удаление без доступа к приложению.",
  alternates: { canonical: "https://appsosa.am/delete-account" },
  robots: { index: true, follow: true },
};

const CONTACT = "appsosa.am@gmail.com";
const MAILTO =
  "mailto:appsosa.am@gmail.com?subject=Appsosa%20account%20deletion%20request";

export default function DeleteAccountPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <a className={styles.brand} href="/" aria-label="Appsosa — главная">
            <span className={styles.mark}>A</span>
            <span>Appsosa</span>
          </a>
          <span className={styles.tag}>Управление аккаунтом · Account management</span>
        </header>

        <article className={styles.article}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>Appsosa · Armenia</span>
            <h1>Удаление аккаунта Appsosa</h1>
            <p className={styles.subtitle}>Delete your Appsosa account · Appsosa հաշվի ջնջում</p>
            <p>
              Вы можете запросить удаление аккаунта Appsosa и связанных с ним
              персональных данных, даже если приложение удалено или вы не можете
              в него войти. Для подачи запроса на этом сайте вход не требуется.
            </p>
          </div>

          <section className={styles.card} aria-labelledby="delete-in-app">
            <div className={styles.stepNumber}>01</div>
            <div>
              <h2 id="delete-in-app">Удалить аккаунт в приложении</h2>
              <ol className={styles.steps}>
                <li>Откройте Appsosa и войдите в аккаунт.</li>
                <li>Перейдите в раздел «Профиль».</li>
                <li>Прокрутите страницу вниз и нажмите «Удалить аккаунт».</li>
                <li>Прочитайте предупреждение и подтвердите удаление.</li>
              </ol>
            </div>
          </section>

          <section className={`${styles.card} ${styles.featured}`} aria-labelledby="delete-outside-app">
            <div className={styles.stepNumber}>02</div>
            <div>
              <h2 id="delete-outside-app">Нет доступа к приложению?</h2>
              <p>
                Отправьте письмо в поддержку Appsosa с темой «Удаление аккаунта Appsosa».
                Укажите email или имя пользователя, использованные при регистрации,
                и напишите, что хотите удалить аккаунт и связанные персональные данные.
              </p>
              <a className={styles.cta} href={MAILTO}>Запросить удаление аккаунта</a>
              <p className={styles.contactLine}>
                Если кнопка не открывает почтовое приложение, отправьте письмо вручную:
                {" "}<a href={MAILTO}>{CONTACT}</a>
              </p>
              <p className={styles.tip}>
                Для защиты данных поддержка может запросить подтверждение владения аккаунтом.
                Никогда не отправляйте пароль или коды подтверждения.
              </p>
            </div>
          </section>

          <section className={styles.card} aria-labelledby="what-happens">
            <div className={styles.stepNumber}>03</div>
            <div>
              <h2 id="what-happens">Какие данные удаляются и что сохраняется</h2>
              <p>
                При удалении аккаунта удаляются либо обезличиваются связанные с ним
                персональные данные, включая данные профиля, контактную информацию,
                адреса, аватар, избранное и персональные настройки, с учётом
                обязательств по хранению отдельных записей.
              </p>
              <p>
                Отдельные записи об оплаченных заказах, транзакциях, возвратах,
                спорах и договорных отношениях могут сохраняться в объёме и в течение
                сроков, необходимых по закону, для финансового учёта, безопасности
                и разрешения споров. Такие записи не предназначены для восстановления
                удалённого профиля.
              </p>
              <p>
                Если есть активные заказы, поддержка объяснит, как завершить
                связанные обязательства перед удалением аккаунта.
              </p>
            </div>
          </section>

          <div className={styles.translations}>
            <details>
              <summary>English · Account deletion instructions</summary>
              <div className={styles.translationBody} lang="en">
                <p><strong>Delete in the app:</strong> Sign in to Appsosa, open Profile,
                scroll down, select Delete account, and confirm.</p>
                <p><strong>Request deletion without the app:</strong> Email
                {" "}<a href={MAILTO}>{CONTACT}</a> with subject “Appsosa account deletion request”.
                Include the email address or username associated with your account.
                We may ask you to verify ownership. Never send a password.</p>
                <p>Personal account data will be deleted or anonymized, subject to
                legal retention requirements. Certain transaction, order, dispute, and
                contractual records may be retained when required by law or for
                legitimate financial, security, or dispute-resolution purposes.</p>
              </div>
            </details>
            <details>
              <summary>Հայերեն · Հաշվի ջնջման հրահանգներ</summary>
              <div className={styles.translationBody} lang="hy">
                <p><strong>Հավելվածում՝</strong> մուտք գործեք Appsosa, բացեք «Պրոֆիլ» բաժինը,
                ոլորեք ներքև, ընտրեք «Ջնջել հաշիվը» և հաստատեք։</p>
                <p><strong>Առանց հավելվածի՝</strong> հաշվի և անձնական տվյալների ջնջումը
                խնդրելու համար գրեք {" "}<a href={MAILTO}>{CONTACT}</a> հասցեին։
                Նշեք հաշվին կապված էլ․ փոստը կամ օգտանունը։ Մենք կարող ենք խնդրել
                հաստատել հաշվի պատկանելությունը։ Մի ուղարկեք գաղտնաբառը։</p>
                <p>Անձնական տվյալները կջնջվեն կամ կանանունացվեն՝ հաշվի առնելով
                պահպանման օրինական պարտավորությունները։ Որոշ գործարքային,
                պատվերների և վեճերի տվյալներ կարող են պահպանվել օրենքի պահանջով։</p>
              </div>
            </details>
          </div>

          <footer className={styles.footer}>
            <span>© Appsosa</span>
            <a href="/">Главная</a>
            <a href="/privacy">Конфиденциальность</a>
          </footer>
        </article>
      </div>
    </main>
  );
}
