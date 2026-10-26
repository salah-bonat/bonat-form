import Image from "next/image";
import LeadForm from "./LeadForm";

export default function Home() {
  return (
    <div className="wrap">
      <header>
        <Image src="/logo.png" alt="بونات" width={360} height={172} priority />
        <h1>خدمة الشراء المسبق من بونات</h1>
        <p className="sub">الكاش يوصل حسابك اليوم!</p>
      </header>

      <h2>وش اللي عليك؟</h2>
      <div className="box">تستلم فلوسك وتحرص على توافر المخزون</div>

      <h2>وش اللي علينا؟</h2>
      <div className="grid">
        <div className="card"><div className="ic">💰</div><p>ندير البيع بالكامل</p></div>
        <div className="card"><div className="ic">📣</div><p>نروّج للعرض وندخلك حملاتنا</p></div>
        <div className="card"><div className="ic">🤝</div><p>نرجّع لك عملاءك ونجيب لك عملاء جدد</p></div>
        <div className="card"><div className="ic">💵</div><p>قيمة منتجاتك توصلك مباشرة</p></div>
        <div className="card wide"><div className="ic">📊</div><p>تقرير متكامل عن عمليات البيع</p></div>
      </div>

      <div className="tagline">ركّز على المنتج وخلّ البيع علينا..<br />مع بونات مبيعاتك مضمونة</div>

      <h2>آلية العمل</h2>
      <ul className="steps">
        <li><p><b>تحديد المنتجات والكميات</b><br />يتم الاتفاق على المنتجات والكميات المطلوبة للشراء.</p></li>
        <li><p><b>تحديد نسبة الخصم</b><br />يتم الاتفاق على نسبة الخصم المناسبة بناءً على الكمية المطلوبة.</p></li>
        <li><p><b>استلام المبلغ مقدماً</b><br />تدفع بونات قيمة المنتجات المتفق عليها مباشرة قبل بدء عملية البيع.</p></li>
      </ul>

      <div className="cta">
        <LeadForm />
      </div>
    </div>
  );
}
