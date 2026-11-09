import { useEffect, useMemo } from "react";

import {
  CanvasStartGameProvider,
  useCanvasStartGameStore,
} from "./features/prod-canvas-start-game/prod-canvas-start-game.store";
import { PlayPageCanvasStartGame } from "./screens/PlayPageCanvasStartGame";
import { createSetfarmTestBridge, installSetfarmTestBridge } from "./test/bridge";

/**
 * ROUTE_PLAY_ROUTE is the entry route of this application. The route is
 * rendered without navigation: ACT_START_GAME performs navigation "stay".
 */
function PlayRoute() {
  const { runtime, startGame, invokeAction } = useCanvasStartGameStore();

  useEffect(() => {
    const bridge = createSetfarmTestBridge(runtime, invokeAction);
    return installSetfarmTestBridge(bridge);
  }, [runtime, invokeAction]);

  const actions = useMemo(() => ({ "start-1": startGame }), [startGame]);

  return <PlayPageCanvasStartGame actions={actions} />;
}

export default function App() {
  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="min-h-screen bg-slate-950 text-slate-100"
    >
      <CanvasStartGameProvider>
        <PlayRoute />
      </CanvasStartGameProvider>
    </div>
  );
}
