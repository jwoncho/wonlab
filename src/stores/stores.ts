// src/stores/stores.ts
import { atom } from 'nanostores';

/**
 * Which desktop panel is currently active / in focus.
 * Used by CameraRig (Phase 4), robot state (Phase 3), and dev room auth gate (Phase 6).
 */
export const activeDesktop = atom<'hero' | 'photography' | 'devroom'>('hero');

/**
 * JWT token string when authenticated, null when unauthenticated.
 * Set by the auth flow (Phase 6), read by any auth-gated component.
 * NOTE: This is the client-side signal only — actual auth is validated server-side via httpOnly cookie.
 */
export const authToken = atom<string | null>(null);

/**
 * ID of the currently selected photo (for map pin → polaroid → modal flow in Phase 5).
 * null means no photo is selected.
 */
export const selectedPhoto = atom<number | null>(null);
