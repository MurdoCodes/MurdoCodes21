/**
 * Stub client for a future Payload CMS instance.
 *
 * Once Payload is deployed, set PAYLOAD_URL in .env.local and swap the
 * static imports in data/projects.ts for calls through this client.
 * Example:
 *
 *   const res = await payloadFetch("/api/projects?depth=1");
 *   const { docs } = await res.json();
 */
const PAYLOAD_URL = process.env.PAYLOAD_URL ?? "http://localhost:3001";

export async function payloadFetch(path: string, init?: RequestInit) {
  const res = await fetch(`${PAYLOAD_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
    // Revalidate content periodically instead of on every request
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Payload request failed: ${res.status} ${res.statusText}`);
  }

  return res;
}
