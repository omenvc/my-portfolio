import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL parameter is required" }, { status: 400 });
  }

  try {
    // Fetch the HTML from the URL
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();

    // Extract Open Graph image
    const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
    if (ogImageMatch && ogImageMatch[1]) {
      return NextResponse.json({ imageUrl: ogImageMatch[1] });
    }

    // Fallback: Extract Twitter card image
    const twitterImageMatch = html.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i);
    if (twitterImageMatch && twitterImageMatch[1]) {
      return NextResponse.json({ imageUrl: twitterImageMatch[1] });
    }

    // Fallback: Use screenshot service for websites
    if (url.startsWith("http")) {
      // Use a free screenshot API service
      const screenshotUrl = `https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(url)}&dimension=1024x768`;
      return NextResponse.json({ imageUrl: screenshotUrl });
    }

    return NextResponse.json({ error: "No image found" }, { status: 404 });
  } catch (error) {
    console.error("Error fetching OG image:", error);
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 }
    );
  }
}

