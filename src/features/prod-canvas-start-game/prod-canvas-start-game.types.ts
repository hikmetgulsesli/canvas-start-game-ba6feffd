/**
 * Product types for the closed ProductSpecV2 component
 * 13f94d4a531b2ddaabc31d6ff73bf19281a882d4383e55615e6a6a7ed6feea5d
 * (ACT_START_GAME).
 */

export type ApplicationState = "ready" | "playing";

/** PERSIST_HIGH_SCORE_LOCAL_STORAGE */
export const HIGH_SCORE_STORAGE_KEY = "setfarm.canvas_start_game.high_score_local_storage.v1";

/** STATE_APPLICATION_STATE */
export const STATE_APPLICATION_STATE_REF = "STATE_APPLICATION_STATE";

/** STATE_HIGH_SCORE */
export const STATE_HIGH_SCORE_REF = "STATE_HIGH_SCORE";

/** ACT_START_GAME */
export const ACT_START_GAME_REF = "ACT_START_GAME";

/** Generated local control id bound to the start button. */
export const START_GAME_LOCAL_ACTION_ID = "start-1";

export interface ProductCanvasStartGameState {
  applicationState: ApplicationState;
  highScore: number | null;
}

export interface StartGameOutcome {
  applicationState: ApplicationState;
  highScore: number;
  persisted: boolean;
}
