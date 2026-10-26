// Forwards submissions to the Google Form, which writes each response
// as a new row in its linked Google Sheet.
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdlNy0mOWev9dPfbHKDc-fnzWCLWhVwj54RxOgzFhHn_XvXZA/formResponse";

const FIELDS = {
  brand: "entry.193648929",
  name: "entry.1797090130",
  phone: "entry.1990293071",
};

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const params = new URLSearchParams();
  for (const [key, entry] of Object.entries(FIELDS)) {
    const value = typeof body[key] === "string" ? body[key].trim() : "";
    if (!value || value.length > 200) {
      return Response.json({ error: `Invalid field: ${key}` }, { status: 400 });
    }
    params.append(entry, value);
  }

  const res = await fetch(FORM_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  if (!res.ok) {
    console.error("Google Form rejected submission", res.status);
    return Response.json({ error: "Submission failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
