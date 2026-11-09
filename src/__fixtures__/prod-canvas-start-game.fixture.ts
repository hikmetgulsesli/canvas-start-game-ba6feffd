import {
  ACT_START_GAME_REF,
  HIGH_SCORE_STORAGE_KEY,
  START_GAME_LOCAL_ACTION_ID,
} from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

/**
 * Deterministic fixture for the ACT_START_GAME product component.
 */
export const prodCanvasStartGameFixture = {
  storyId: "US-001",
  actionRef: ACT_START_GAME_REF,
  generatedLocalActionId: START_GAME_LOCAL_ACTION_ID,
  controlSlotRef: "CSLOT_START_GAME_START_BUTTON",
  routePath: "/play",
  storageKey: HIGH_SCORE_STORAGE_KEY,
  initialApplicationState: "ready",
  initialHighScore: null,
  startedApplicationState: "playing",
  startedHighScore: 0,
  gameStatusText: {
    ready: "Ready to start",
    playing: "Game started",
  },
  startButtonText: "Start",
  highScoreDisplayText: "0",
} as const;

export type ProdCanvasStartGameFixture = typeof prodCanvasStartGameFixture;

export const fixture = prodCanvasStartGameFixture;

export default prodCanvasStartGameFixture;
