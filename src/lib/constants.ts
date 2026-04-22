/**
 * Shared game constants (player counts, starter composition, etc.).
 * Import from here instead of scattering magic numbers across data files.
 */

/**
 * Player count baked into print quantities (e.g. one CEO per seat).
 *
 * Design supports up to **4** players at the table; MVP playtests target
 * 2–3 (`docs/plan/MVP_PLAN.md`). Keep this at **3** until you print for a
 * full 4-player box, then set to **4**.
 */
export const MAX_PLAYER_COUNT = 3;

/** Table size the ruleset is built for (long-term); not necessarily current print factor. */
export const SUPPORTED_MAX_PLAYERS = 4;

/** Dev interns per player in the starter (DDR-0012; nine interns + CEO). */
export const STARTER_DEV_INTERNS_PER_PLAYER = 3;

/** HR interns per player in the starter (more early +1 BUDGET for hire flow). */
export const STARTER_HR_INTERNS_PER_PLAYER = 6;
