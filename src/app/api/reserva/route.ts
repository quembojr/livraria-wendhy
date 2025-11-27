import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    "https://api.jotform.com/form/SEU_FORM_ID/submissions?apiKey=SUA_API_KEY",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        submission: {
          "nome": body.nome,
          "email": body.email,
          "telefone": body.telefone,
          "data": body.data,
        }
      })
    }
  );

  const result = await response.json();
  return NextResponse.json(result);
}
