/**
 * Fetches the Open Graph image or screenshot for a project URL
 */
export async function getProjectImage(url: string): Promise<string | null> {
  try {
    // For App Store links, use App Store's image API
    if (url.includes("apps.apple.com")) {
      // Extract app ID from URL
      const appIdMatch = url.match(/\/id(\d+)/);
      if (appIdMatch) {
        const appId = appIdMatch[1];
        // App Store provides artwork URLs
        return `https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/${appId}/icon.png/512x512bb.jpg`;
      }
    }

    // For web URLs, fetch OG image via API
    if (url.startsWith("http")) {
      const apiUrl = `/api/og-image?url=${encodeURIComponent(url)}`;
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        return data.imageUrl || null;
      }
    }

    return null;
  } catch (error) {
    console.error("Error fetching project image:", error);
    return null;
  }
}

/**
 * Get a screenshot using a screenshot service
 */
export function getScreenshotUrl(url: string): string {
  // Using a free screenshot service (you may want to use your own API key)
  return `https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(url)}&dimension=1024x768&format=png`;
}

