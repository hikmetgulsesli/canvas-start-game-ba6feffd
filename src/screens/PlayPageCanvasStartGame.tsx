// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


import { useCanvasStartGameStore } from "../features/prod-canvas-start-game/prod-canvas-start-game.store";

export type PlayPageCanvasStartGameActionId = "start-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-1"?: () => void;
  };

}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({ actions }: PlayPageCanvasStartGameProps) {
  const { state } = useCanvasStartGameStore();
  const isPlaying = state.applicationState === "playing";
  const gameStatusText = isPlaying ? "Game started" : "Ready to start";
  const highScoreText = state.highScore === null ? "0" : String(state.highScore);
  const highScoreValue = state.highScore === null ? undefined : String(state.highScore);
  return (
    <>
      <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col w-full min-h-screen" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_REMAIN_ON_PLAY_ROUTE">
          {/* Non-actionable header bar */}
          <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <div className="w-3.5 h-3.5 bg-slate-950 rounded-sm rotate-45"></div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">RetroGrid Canvas</span>
            </div>
            <div className="flex items-center gap-6">
              {/* Accessibility status for Game status (OBS_START_GAME_GAME_STARTED_MESSAGE) */}
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-700/50" data-setfarm-element-ref="E000002" role="status" aria-label="Game status" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE">
                <span className="inline-block w-2 h-2 rounded-full bg-slate-500"></span>
                <span>{gameStatusText}</span>
              </div>
              <span className="text-xs font-mono text-slate-500">v1.0.0</span>
            </div>
          </header>
      
          {/* Main play arena container */}
          <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 flex flex-col gap-6">
            {/* Top controls & stats row */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
              {/* Control Action Surface */}
              <div className="lg:col-span-3 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-sm">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-white mb-1">Arcade Play Zone</h1>
                  <p className="text-sm text-slate-400">Initialize the canvas arena to launch session vectors and log your high scores.</p>
                </div>
                {/* Single declared physical actionable element */}
                <button data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="px-7 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-base transition-colors shadow-lg shadow-cyan-400/25 active:scale-95 flex items-center gap-2 shrink-0" data-setfarm-element-ref="E000003" data-observable-refs="OBS_START_GAME_START_BUTTON_REMAINS_AVAILABLE" type="button" data-action-id="start-1" onClick={actions?.["start-1"]}>
                  Start
                </button>
              </div>
      
              {/* Contained High-score Panel Surface (SURF_SCORE_PANEL) */}
              <div data-surface-id="SURF_SCORE_PANEL" className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-3 shadow-xl" data-setfarm-element-ref="E000004">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Record Stats</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">LOCAL SYNC</span>
                </div>
                <div className="pt-1">
                  <span className="text-xs text-slate-400 block mb-1">Current High Score</span>
                  {/* Accessibility status for High score (OBS_START_GAME_PERSISTED_ZERO_HIGH_SCORE) */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-cyan-400 font-mono" data-setfarm-element-ref="E000005" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_PERSISTED_ZERO_HIGH_SCORE" data-value={highScoreValue}>
                      {highScoreText}
                    </span>
                    <span className="text-xs font-normal text-slate-500 font-sans">PTS</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 border-t border-slate-800/60 pt-3">
                  Scores persist across local browser sessions automatically.
                </p>
              </div>
            </div>
      
            {/* Contained Game Canvas Surface (SURF_GAME_CANVAS) */}
            <div data-surface-id="SURF_GAME_CANVAS" className="flex-1 w-full min-h-[520px] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col items-center justify-center p-8 group" data-setfarm-element-ref="E000006" data-observable-refs="OBS_START_GAME_CANVAS_REMAINS_VISIBLE">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
              
              {/* Ambient Radial Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(6,182,212,0.06),transparent)] pointer-events-none"></div>
      
              {/* Canvas simulation viewport */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto">
                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 shadow-inner">
                  <div className="w-8 h-8 border-2 border-dashed border-cyan-400/60 rounded-lg animate-pulse"></div>
                </div>
                <h2 className="text-xl font-bold text-white mb-2 tracking-tight">Canvas Arena Standby</h2>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  The active rendering viewport is armed and ready. Press Start to engage target coordinates and initiate the real-time frame loop.
                </p>
                <div className="inline-flex items-center gap-3 text-xs font-mono text-slate-500 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800/80">
                  <span>RES: 1920 × 1080</span>
                  <span className="text-slate-700">|</span>
                  <span>FPS: 60 CAP</span>
                  <span className="text-slate-700">|</span>
                  <span className="text-cyan-500 font-semibold">STATE: IDLE</span>
                </div>
              </div>
      
              {/* Corner decorative markers */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-slate-700"></div>
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-slate-700"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-slate-700"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-slate-700"></div>
            </div>
          </main>
      
          {/* Footer decorative non-actionable chrome */}
          <footer className="border-t border-slate-900 bg-slate-950/80 px-8 py-4 text-center">
            <p className="text-xs text-slate-600 font-mono">
              RetroGrid Canvas System © 2025. Standard desktop interface.
            </p>
          </footer>
        </div>
    </>
  );
}
