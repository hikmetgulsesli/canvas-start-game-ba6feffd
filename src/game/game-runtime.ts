import { readPersistedHighScore } from "../features/prod-canvas-start-game/prod-canvas-start-game.repo";
import type {
  ApplicationState,
  ProductCanvasStartGameState,
} from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

/**
 * Runtime state authority for the canvas game application.
 *
 * STATE_APPLICATION_STATE initial value: "ready"
 * STATE_HIGH_SCORE initial value: null (rehydrated from
 * PERSIST_HIGH_SCORE_LOCAL_STORAGE at initialization, durability: reload).
 */
export class GameRuntime {
  private snapshot: ProductCanvasStartGameState;

  private readonly listeners = new Set<(state: ProductCanvasStartGameState) => void>();

  constructor(initial?: Partial<ProductCanvasStartGameState>) {
    const highScore =
      initial && initial.highScore !== undefined ? initial.highScore : readPersistedHighScore();
    this.snapshot = {
      applicationState: initial?.applicationState ?? "ready",
      highScore,
    };
  }

  getSnapshot(): ProductCanvasStartGameState {
    return this.snapshot;
  }

  subscribe(listener: (state: ProductCanvasStartGameState) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  setApplicationState(applicationState: ApplicationState): void {
    if (this.snapshot.applicationState === applicationState) {
      return;
    }
    this.commit({ ...this.snapshot, applicationState });
  }

  setHighScore(highScore: number | null): void {
    if (this.snapshot.highScore === highScore) {
      return;
    }
    this.commit({ ...this.snapshot, highScore });
  }

  private commit(next: ProductCanvasStartGameState): void {
    this.snapshot = next;
    this.listeners.forEach((listener) => {
      listener(this.snapshot);
    });
  }
}
