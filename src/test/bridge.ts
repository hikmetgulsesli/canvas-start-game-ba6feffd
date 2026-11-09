import type { GameRuntime } from "../game/game-runtime";
import {
  STATE_APPLICATION_STATE_REF,
  STATE_HIGH_SCORE_REF,
} from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

/**
 * Browser capture bridge (setfarm.browser-state-capture.v1) and scenario mode
 * (setfarm.browser-scenario-mode.v1) for the runtime evidence contract.
 */
export const SETFARM_TEST_BRIDGE_GLOBAL = "__SETFARM_TEST_BRIDGE__";

export const SETFARM_SCENARIO_MODE_GLOBAL = "__SETFARM_SCENARIO_MODE__";

export const SETFARM_SCENARIO_MODE_VALUE = "manual";

export interface SetfarmTestBridgeState {
  STATE_APPLICATION_STATE: string;
  STATE_HIGH_SCORE: number | null;
}

export interface SetfarmTestBridge {
  readonly states: SetfarmTestBridgeState;
  getState: () => SetfarmTestBridgeState;
  invokeAction: (actionRef: string, payload?: unknown) => boolean;
}

export type SetfarmActionInvoker = (actionRef: string, payload?: unknown) => boolean;

export function createSetfarmTestBridge(
  runtime: GameRuntime,
  invokeAction: SetfarmActionInvoker,
): SetfarmTestBridge {
  const readState = (): SetfarmTestBridgeState => {
    const snapshot = runtime.getSnapshot();
    return {
      [STATE_APPLICATION_STATE_REF]: snapshot.applicationState,
      [STATE_HIGH_SCORE_REF]: snapshot.highScore,
    } as SetfarmTestBridgeState;
  };

  return {
    get states(): SetfarmTestBridgeState {
      return readState();
    },
    getState: readState,
    invokeAction,
  };
}

export function installSetfarmTestBridge(bridge: SetfarmTestBridge): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }
  const scope = window as unknown as Record<string, unknown>;
  scope[SETFARM_TEST_BRIDGE_GLOBAL] = bridge;
  scope[SETFARM_SCENARIO_MODE_GLOBAL] = SETFARM_SCENARIO_MODE_VALUE;
  return () => {
    delete scope[SETFARM_TEST_BRIDGE_GLOBAL];
    delete scope[SETFARM_SCENARIO_MODE_GLOBAL];
  };
}
