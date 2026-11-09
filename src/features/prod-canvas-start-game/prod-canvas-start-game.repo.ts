import { HIGH_SCORE_STORAGE_KEY } from "./prod-canvas-start-game.types";

/**
 * Browser-origin persistence authority (AUTH_DATA_BROWSER_ORIGIN) for
 * PERSIST_HIGH_SCORE_LOCAL_STORAGE. Durability: reload.
 */

function browserStorage(): Storage | null {
  try {
    if (typeof window === "undefined") {
      return null;
    }
    const store = window.localStorage;
    return store ?? null;
  } catch {
    return null;
  }
}

export function readPersistedHighScore(): number | null {
  const store = browserStorage();
  if (!store) {
    return null;
  }
  let raw: string | null = null;
  try {
    raw = store.getItem(HIGH_SCORE_STORAGE_KEY);
  } catch {
    return null;
  }
  if (raw === null) {
    return null;
  }
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : null;
}

export function persistHighScore(value: number): boolean {
  const store = browserStorage();
  if (!store) {
    return false;
  }
  try {
    store.setItem(HIGH_SCORE_STORAGE_KEY, String(value));
    return true;
  } catch {
    return false;
  }
}

export function clearPersistedHighScore(): void {
  const store = browserStorage();
  if (!store) {
    return;
  }
  try {
    store.removeItem(HIGH_SCORE_STORAGE_KEY);
  } catch {
    /* storage unavailable */
  }
}
