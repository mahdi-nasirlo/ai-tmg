import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");

  console.log(path);

  if (!path) {
    return new NextResponse("Missing path", { status: 400 });
  }

  const imageResponse = await fetch(
    `http://localhost:1337/uploads/${path}`, // آدرس داخلی CMS
    {
      cache: "no-store", // یا تنظیم cache دلخواه
    }
  );

  if (!imageResponse.ok) {
    return new NextResponse("Image not found", { status: 404 });
  }

  return new NextResponse(imageResponse.body, {
    headers: {
      "Content-Type": imageResponse.headers.get("content-type") || "image/jpeg",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
