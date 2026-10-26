"use client";

import { useState } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "loading") {
    return <div className="thanks"><p>⏳ جاري إرسال طلبك، لحظات من فضلك...</p></div>;
  }
  if (status === "done") {
    return <div className="thanks"><p>✅ تم استلام طلبك بنجاح، وبنتواصل معك قريباً.</p></div>;
  }

  return (
    <div>
      <p className="cta-label">ارفع طلبك الآن للتقديم أو الاستفسار</p>
      <form className="lead-form" onSubmit={handleSubmit}>
        <input type="text" name="brand" placeholder="اسم العلامة التجارية" required />
        <input type="text" name="name" placeholder="اسم مقدم الطلب" required />
        <input type="tel" name="phone" placeholder="رقم التواصل" required />
        {status === "error" && <p className="error">تعذّر إرسال الطلب، حاول مرة ثانية.</p>}
        <button type="submit" className="btn">إرسال الطلب</button>
      </form>
      <p className="note">ملاحظة: جميع المنتجات يتم عرضها في تطبيق بونات للشراء من قبل العميل، ومن ثم استلامها من الفرع.</p>
    </div>
  );
}
