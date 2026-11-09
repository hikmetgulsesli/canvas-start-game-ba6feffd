import { persistHighScore } from "../prod-canvas-start-game/prod-canvas-start-game.repo";
import type { StartGameOutcome } from "../prod-canvas-start-game/prod-canvas-start-game.types";
import type { GameRuntime } from "../../game/game-runtime";

/**
 * ACT_START_GAME
 *
 * trigger: user (rendered control CSLOT_START_GAME_START_BUTTON)
 * navigation: stay (ROUTE_PLAY_ROUTE)
 * state deltas:
 *   STATE_APPLICATION_STATE := "playing"
 *   STATE_HIGH_SCORE := 0
 * persistence:
 *   PERSIST_HIGH_SCORE_LOCAL_STORAGE write ENTITY_GAME_SCORE/highScore
 */
export const START_GAME_APPLICATION_STATE = "playing";

export const START_GAME_HIGH_SCORE = 0;

export function actStartGame(runtime: GameRuntime): StartGameOutcome {
  runtime.setApplicationState(START_GAME_APPLICATION_STATE);
  runtime.setHighScore(START_GAME_HIGH_SCORE);
  const persisted = persistHighScore(START_GAME_HIGH_SCORE);
  return {
    applicationState: START_GAME_APPLICATION_STATE,
    highScore: START_GAME_HIGH_SCORE,
    persisted,
  };
}

export const startGame = actStartGame;
