import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";

import { GameRuntime } from "../../game/game-runtime";
import { actStartGame } from "../surf-play-page/act_start_game";
import {
  ACT_START_GAME_REF,
  START_GAME_LOCAL_ACTION_ID,
} from "./prod-canvas-start-game.types";
import type { ProductCanvasStartGameState } from "./prod-canvas-start-game.types";

export interface CanvasStartGameStoreValue {
  state: ProductCanvasStartGameState;
  runtime: GameRuntime;
  startGame: () => void;
  invokeAction: (actionRef: string, payload?: unknown) => boolean;
}

const CanvasStartGameStoreContext = createContext<CanvasStartGameStoreValue | null>(null);

export interface CanvasStartGameProviderProps {
  children: ReactNode;
  runtime?: GameRuntime;
}

export function CanvasStartGameProvider({ children, runtime }: CanvasStartGameProviderProps) {
  const runtimeRef = useRef<GameRuntime | null>(null);
  if (runtimeRef.current === null) {
    runtimeRef.current = runtime ?? new GameRuntime();
  }
  const activeRuntime = runtimeRef.current;

  const [state, setState] = useState<ProductCanvasStartGameState>(() =>
    activeRuntime.getSnapshot(),
  );

  useEffect(() => activeRuntime.subscribe(setState), [activeRuntime]);

  const startGame = useCallback(() => {
    actStartGame(activeRuntime);
  }, [activeRuntime]);

  const invokeAction = useCallback(
    (actionRef: string, _payload?: unknown) => {
      if (actionRef === ACT_START_GAME_REF || actionRef === START_GAME_LOCAL_ACTION_ID) {
        actStartGame(activeRuntime);
        return true;
      }
      return false;
    },
    [activeRuntime],
  );

  const value = useMemo<CanvasStartGameStoreValue>(
    () => ({ state, runtime: activeRuntime, startGame, invokeAction }),
    [state, activeRuntime, startGame, invokeAction],
  );

  return (
    <CanvasStartGameStoreContext.Provider value={value}>
      {children}
    </CanvasStartGameStoreContext.Provider>
  );
}

export const ProdCanvasStartGameProvider = CanvasStartGameProvider;

export function useCanvasStartGameStore(): CanvasStartGameStoreValue {
  const store = useContext(CanvasStartGameStoreContext);
  if (store === null) {
    throw new Error("CANVAS_START_GAME_STORE_MISSING");
  }
  return store;
}

export const useProdCanvasStartGameStore = useCanvasStartGameStore;
