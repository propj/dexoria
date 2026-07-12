import React, { useState, useEffect, useRef } from "react";
import { 
  MapPin, Home, Compass, Trees, Skull, Crown, Eye, Swords, Shield, 
  Activity, Zap, Gauge, Flame, Layers, RotateCw, Sparkles, Award, Maximize2, Minimize2
} from "lucide-react";
import { REGIONAL_MAPS, MAP_CONNECTIONS, RAILWAY_CONNECTIONS, MapNode } from "../data/landmarks";

interface GraphicalRegionMapProps {
  regionId: string;
  isLightTheme: boolean;
  selectedNodeId?: string;
  onSelectNode?: (nodeId: string) => void;
  currentLocationId?: string;
  destinationLocationId?: string;
  travelProgress?: number;
}

// Detailed custom lore database for proper town/city information
interface TownLore {
  professor?: string;
  professorPhoto?: string;
  badge?: string;
  leader?: string;
  facilities: string[];
  landmarks: string[];
  history: string;
}

const REGION_TOWN_LORE: Record<string, Record<string, TownLore>> = {
  kanto: {
    kanto_start: {
      professor: "Prof. Oak",
      facilities: ["Oak's Research Lab", "Trainer Sanctuary", "Healing Hub"],
      landmarks: ["Red's Childhood House", "Pallet Harbor Pier"],
      history: "A peaceful coastal hamlet known for its fresh breezes. Famous as the origin point of Champions Red and Blue. Professor Oak operates his research laboratory here, guiding new trainers."
    },
    kanto_city: {
      leader: "Lt. Surge / Erika",
      badge: "Thunder Badge / Rainbow Badge",
      facilities: ["Pokémon Gym", "Bicycle Showroom", "Celadon Department Store"],
      landmarks: ["Vermilion Harbor Magnets", "Celadon Game Corner"],
      history: "A bustling metropolis with clean electric train connections. Home to major infrastructure and dense populations, coordinating high-volume regional tournaments and badge challenges."
    }
  },
  johto: {
    johto_start: {
      professor: "Prof. Elm",
      facilities: ["Elm's High-Tech Laboratory", "Wind Turbine Array"],
      landmarks: ["New Bark Coastal Overlook"],
      history: "A modern coastal township where winds of new adventure blow. Prof. Elm conducts evolution and breeding mechanics research here in his state-of-the-art laboratory."
    },
    johto_city: {
      leader: "Whitney / Bugsy",
      badge: "Plain Badge / Hive Badge",
      facilities: ["Goldenrod Gym", "Radio Tower Station", "Magnet Train Station"],
      landmarks: ["Global Trade Station", "Underground Mall"],
      history: "The grandest metropolis of Johto, boasting the Magnet Train terminus that links to Kanto. Features massive shopping blocks and the famous Radio Tower broadcasting across the continent."
    }
  },
  hoenn: {
    hoenn_start: {
      professor: "Prof. Birch",
      facilities: ["Birch's Field Outpost", "Eco Greenhouse"],
      landmarks: ["Littleroot Pond", "Moving Trucks Depot"],
      history: "A rustic, nature-centric village nestled amongst deep forests. Prof. Birch frequently conducts field tests directly in the wild, studying Pokémon habitats in their raw elements."
    },
    hoenn_city: {
      leader: "Wattson",
      badge: "Dynamo Badge",
      facilities: ["Mauville Underground City", "Cycling Road Terminal"],
      landmarks: ["Mauville Food Court", "Rydel's Cycle shop"],
      history: "A highly engineered smart-city built with multi-layered walkways. Powered by advanced clean energy, Mauville coordinates Hoenn's transit grids and holds the regional cycle trials."
    }
  },
  sinnoh: {
    sinnoh_start: {
      professor: "Prof. Rowan",
      facilities: ["Rowan's Evolution Lab", "Marine Reserve Study"],
      landmarks: ["Twinleaf Lake", "Verity Lakefront"],
      history: "A snow-kissed, historic settlement framed by tall pines. Resident Prof. Rowan investigates deep Pokémon origin mysteries and ancient evolutionary lineages."
    },
    sinnoh_city: {
      leader: "Roark / Fantina",
      badge: "Coal Badge / Relic Badge",
      landmarks: ["Jubilife TV Building", "Trainer's School"],
      facilities: ["Jubilife Global Terminal", "Pokétch Company Headquarters"],
      history: "The industrial crown jewel of Sinnoh, Jubilife is famous for creating the modern Pokétch. It hosts massive television broadcasters and global trading centers."
    }
  }
};

export default function GraphicalRegionMap({
  regionId,
  isLightTheme,
  selectedNodeId,
  onSelectNode,
}: GraphicalRegionMapProps) {
  const [mapMode, setMapMode] = useState<"route" | "train">("route");
  const [is3DMode, setIs3DMode] = useState(true);
  const [pitch, setPitch] = useState(30); // rotateX
  const [yaw, setYaw] = useState(-15);  // rotateY
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Get nodes for selected region or generate a standard schematic layout if not explicitly declared
  const rawNodes = REGIONAL_MAPS[regionId] || [
    { id: `${regionId}_start`, name: `${regionId.charAt(0).toUpperCase() + regionId.slice(1)} Town`, type: "town", description: "A picturesque starting point for this region's trainers.", x: 20, y: 70 },
    { id: `${regionId}_wild`, name: "Wild Forest Path", type: "forest", description: "A path through tall grass, home to starter species.", x: 45, y: 50, levelRange: [2, 6] as [number, number], nativePokemonIds: [16, 19] },
    { id: `${regionId}_city`, name: "Central City", type: "town", description: "The central economic city of the region featuring gyms.", x: 70, y: 55, isStation: true, stationName: "Central Terminal", trainLines: ["Express Route"] },
    { id: `${regionId}_league`, name: "Pokémon League Peak", type: "league", description: "The high mountain summit where champions challenge the Elite Four.", x: 80, y: 25 }
  ];

  const nodes = rawNodes;
  const connections = MAP_CONNECTIONS[regionId] || [
    [`${regionId}_start`, `${regionId}_wild`],
    [`${regionId}_wild`, `${regionId}_city`],
    [`${regionId}_city`, `${regionId}_league`]
  ];

  const railConnections = RAILWAY_CONNECTIONS[regionId] || [
    [`${regionId}_city`, `${regionId}_start`]
  ];

  const [activeNode, setActiveNode] = useState<MapNode | null>(null);

  // Set default node on mount or region change
  useEffect(() => {
    if (nodes && nodes.length > 0) {
      setActiveNode(nodes[0]);
    }
  }, [regionId]);

  // Handle selected Node changes from external props
  useEffect(() => {
    if (selectedNodeId) {
      const found = nodes.find(n => n.id === selectedNodeId);
      if (found) {
        setActiveNode(found);
      }
    }
  }, [selectedNodeId, nodes]);

  // Node Altitudes (Elevations) for Holographic 3D Layering
  const getNodeAltitude = (type: string): number => {
    switch (type) {
      case "league": return 65; // High summit
      case "mountain":
      case "cave": return 45;
      case "forest": return 25;
      case "town": return 15;
      default: return 20;
    }
  };

  // Get Node Icon helper
  const getNodeIcon = (type: string) => {
    switch (type) {
      case "town":
        return <Home className="w-4 h-4 text-emerald-400" />;
      case "route":
        return <Compass className="w-4 h-4 text-cyan-400" />;
      case "forest":
        return <Trees className="w-4 h-4 text-teal-400" />;
      case "league":
        return <Crown className="w-4 h-4 text-amber-400" />;
      case "cave":
      case "mountain":
        return <Skull className="w-4 h-4 text-pink-400" />;
      default:
        return <MapPin className="w-4 h-4 text-rose-400" />;
    }
  };

  // Canvas Wave Animation Ref & Implementation for "Live Train Power Grid"
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (mapMode !== "train" || !canvasRef.current) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let offset = 0;
    const renderWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(10, 15, 30, 0.95)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      const centerY = canvas.height / 2;
      const amplitude1 = 18;
      const frequency1 = 0.02;
      const speed1 = 0.04;

      const amplitude2 = 12;
      const frequency2 = 0.045;
      const speed2 = -0.06;

      ctx.beginPath();
      ctx.strokeStyle = "rgba(6, 182, 212, 0.85)";
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "rgba(6, 182, 212, 0.5)";
      ctx.shadowBlur = 8;
      for (let x = 0; x < canvas.width; x++) {
        const y = centerY + Math.sin(x * frequency1 + offset) * amplitude1;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = "rgba(245, 158, 11, 0.75)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "rgba(245, 158, 11, 0.4)";
      ctx.shadowBlur = 6;
      for (let x = 0; x < canvas.width; x++) {
        const y = centerY + Math.cos(x * frequency2 - offset) * amplitude2 + Math.sin(x * 0.01 + offset) * 5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.shadowBlur = 0;
      offset += 0.05;
      animationFrameRef.current = requestAnimationFrame(renderWaves);
    };

    renderWaves();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mapMode]);

  // Lookup custom town lore details
  const getTownLore = (nodeId: string): TownLore | null => {
    const defaultRegionId = regionId.toLowerCase();
    const regionLore = REGION_TOWN_LORE[defaultRegionId];
    if (regionLore && regionLore[nodeId]) {
      return regionLore[nodeId];
    }
    // Dynamic Fallback
    if (nodeId.includes("start")) {
      return {
        professor: `Prof. ${regionId.charAt(0).toUpperCase() + regionId.slice(1)} Resident`,
        facilities: ["Lab Facility", "Standard Healing Station"],
        landmarks: ["Traditional Overlook"],
        history: "A quiet starting point where young trainers receive their first companion before setting out on the regional tour."
      };
    }
    if (nodeId.includes("city")) {
      return {
        leader: "Local Gym Leader",
        badge: "Custom Badge",
        facilities: ["Gym Arena", "Department Store"],
        landmarks: ["Scenic Park", "Transit Station"],
        history: "A central municipal hub packed with trainers, shops, and complex transit connections linking to surrounding towns."
      };
    }
    return null;
  };

  const isTownNode = activeNode?.type === "town";
  const townLore = activeNode ? getTownLore(activeNode.id) : null;

  const mapContent = (
    <div className={`rounded-3xl border overflow-hidden transition-all shadow-xl ${
      isFullscreen ? "h-full flex flex-col" : ""
    } ${
      isLightTheme 
        ? "bg-[#FAF7F0] border-[#E5DDD0] text-slate-800" 
        : "bg-[#0A0A0B] border-white/5 text-slate-100"
    }`}>
      {/* Title Header with Mode Toggles */}
      <div className={`px-6 py-4 border-b flex flex-col sm:flex-row items-center justify-between gap-4 ${
        isLightTheme ? "bg-[#EFEAE2]/35 border-[#E5DDD0]/50" : "bg-[#151516]/40 border-white/5"
      }`}>
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse" />
          <h3 className="font-display font-black text-xs uppercase tracking-[0.15em] flex items-center gap-1.5">
            <span>Hologram Coordinate Projection</span>
            <span className="text-[9px] font-mono font-bold text-cyan-500 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
              SYS-3D
            </span>
          </h3>
        </div>

        {/* 3D and Network Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Fullscreen Map Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer ${
              isFullscreen
                ? "bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20"
                : "bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20"
            }`}
            title={isFullscreen ? "Exit Fullscreen Map" : "Open Fullscreen Map"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>{isFullscreen ? "EXIT FULLSCREEN" : "FULLSCREEN"}</span>
          </button>

          {/* 3D Holo Toggle */}
          <button
            onClick={() => setIs3DMode(!is3DMode)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer ${
              is3DMode
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                : isLightTheme
                ? "bg-slate-100 border-slate-200 text-slate-500"
                : "bg-white/3 border-white/5 text-slate-400"
            }`}
          >
            <RotateCw className={`w-3 h-3 ${is3DMode ? "animate-spin [animation-duration:6s]" : ""}`} />
            <span>3D HOLO {is3DMode ? "ON" : "OFF"}</span>
          </button>

          <div className={`flex p-0.5 rounded-xl border ${
            isLightTheme ? "bg-[#EFEAE2] border-[#E5DDD0]/50" : "bg-white/4 border-white/8"
          }`}>
            <button
              onClick={() => setMapMode("route")}
              className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                mapMode === "route"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ROUTING
            </button>
            <button
              onClick={() => setMapMode("train")}
              className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                mapMode === "train"
                  ? "bg-amber-500 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              TRANSIT
            </button>
          </div>
        </div>
      </div>

      {/* Grid Canvas + Interactive Details */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${isFullscreen ? "flex-1 min-h-0" : ""}`}>
        {/* Map Canvas */}
        <div className={`lg:col-span-7 relative border-r border-white/5 overflow-hidden select-none flex flex-col justify-between ${
          isFullscreen ? "h-full" : "h-80 md:h-[420px]"
        }`}>
          
          {/* 3D Perspective Wrapper Container */}
          <div 
            className="w-full h-full relative transition-all duration-500 ease-out"
            style={
              is3DMode 
                ? { 
                    perspective: "1000px", 
                    transform: `rotateX(${pitch}deg) rotateY(${yaw}deg) scale(0.95)`,
                    transformStyle: "preserve-3d"
                  } 
                : {}
            }
          >
            {/* Holographic matrix grids */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.06),transparent_80%)] pointer-events-none" />

            {/* Schematic SVG Routes drawing */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <linearGradient id="holoGradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.02)" />
                  <stop offset="100%" stopColor="rgba(6,182,212,0.2)" />
                </linearGradient>
              </defs>

              {/* Draw 3D topographic contours */}
              {nodes.map((node) => {
                const alt = getNodeAltitude(node.type);
                return (
                  <g key={`topo-${node.id}`} className="opacity-45">
                    {/* Altitudes guidelines lines */}
                    <line
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${node.x}%`}
                      y2={`calc(${node.y}% - ${alt}px)`}
                      stroke="rgba(6,182,212,0.25)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    {/* Base radar rings representing topographical contour elevations */}
                    <ellipse
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      rx="16"
                      ry="6"
                      fill="none"
                      stroke="rgba(6,182,212,0.08)"
                      strokeWidth="1"
                    />
                    <ellipse
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      rx="26"
                      ry="10"
                      fill="none"
                      stroke="rgba(6,182,212,0.04)"
                      strokeWidth="1"
                    />
                  </g>
                );
              })}

              {/* Connections */}
              {mapMode === "route" ? (
                connections.map(([fromId, toId], i) => {
                  const nodeFrom = nodes.find(n => n.id === fromId);
                  const nodeTo = nodes.find(n => n.id === toId);
                  if (!nodeFrom || !nodeTo) return null;
                  const altFrom = getNodeAltitude(nodeFrom.type);
                  const altTo = getNodeAltitude(nodeTo.type);

                  return (
                    <g key={`route-${fromId}-${toId}-${i}`}>
                      {/* Base ground layout lines shadow */}
                      <line
                        x1={`${nodeFrom.x}%`}
                        y1={`${nodeFrom.y}%`}
                        x2={`${nodeTo.x}%`}
                        y2={`${nodeTo.y}%`}
                        stroke="rgba(255,255,255,0.02)"
                        strokeWidth="1"
                      />
                      {/* Floating actual 3D paths connecting the altitude tops */}
                      <line
                        x1={`${nodeFrom.x}%`}
                        y1={`calc(${nodeFrom.y}% - ${altFrom}px)`}
                        x2={`${nodeTo.x}%`}
                        y2={`calc(${nodeTo.y}% - ${altTo}px)`}
                        stroke="rgba(6,182,212,0.2)"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <line
                        x1={`${nodeFrom.x}%`}
                        y1={`calc(${nodeFrom.y}% - ${altFrom}px)`}
                        x2={`${nodeTo.x}%`}
                        y2={`calc(${nodeTo.y}% - ${altTo}px)`}
                        stroke="#06b6d4"
                        strokeWidth="1.5"
                        strokeDasharray="3,4"
                        strokeLinecap="round"
                      />
                    </g>
                  );
                })
              ) : (
                railConnections.map(([fromId, toId], i) => {
                  const nodeFrom = nodes.find(n => n.id === fromId);
                  const nodeTo = nodes.find(n => n.id === toId);
                  if (!nodeFrom || !nodeTo) return null;
                  const altFrom = getNodeAltitude(nodeFrom.type);
                  const altTo = getNodeAltitude(nodeTo.type);

                  return (
                    <g key={`rail-${fromId}-${toId}-${i}`}>
                      <line
                        x1={`${nodeFrom.x}%`}
                        y1={`calc(${nodeFrom.y}% - ${altFrom}px)`}
                        x2={`${nodeTo.x}%`}
                        y2={`calc(${nodeTo.y}% - ${altTo}px)`}
                        stroke="rgba(245, 158, 11, 0.4)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1={`${nodeFrom.x}%`}
                        y1={`calc(${nodeFrom.y}% - ${altFrom}px)`}
                        x2={`${nodeTo.x}%`}
                        y2={`calc(${nodeTo.y}% - ${altTo}px)`}
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        strokeDasharray="1,5"
                        strokeLinecap="round"
                      />
                    </g>
                  );
                })
              )}
            </svg>

            {/* Render Floating Interactive Map Nodes */}
            {nodes.map((node) => {
              const isDimmed = mapMode === "train" && !node.isStation;
              const isSelected = activeNode?.id === node.id;
              const alt = getNodeAltitude(node.type);

              return (
                <button
                  key={node.id}
                  onClick={() => {
                    setActiveNode(node);
                    if (onSelectNode) onSelectNode(node.id);
                  }}
                  style={{ 
                    left: `${node.x}%`, 
                    top: `calc(${node.y}% - ${alt}px)`,
                    transform: is3DMode ? "translate3d(-50%, -50%, 40px)" : "translate(-50%, -50%)"
                  }}
                  className={`absolute transform cursor-pointer transition-all duration-300 group z-20 ${
                    isDimmed ? "opacity-30 hover:opacity-85" : "opacity-100"
                  }`}
                >
                  {/* Neon laser elevation pillar visualization */}
                  {is3DMode && (
                    <div 
                      style={{ height: `${alt}px` }} 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-t from-cyan-500/0 via-cyan-400/20 to-cyan-400/75 pointer-events-none"
                    />
                  )}

                  {/* Pulsing selector rings */}
                  {isSelected && (
                    <span className={`absolute -inset-3.5 rounded-full animate-ping pointer-events-none ${
                      mapMode === "train" ? "bg-amber-500/20" : "bg-cyan-500/20"
                    }`} />
                  )}

                  {/* High-tech tactile node icon */}
                  <div className={`p-2 rounded-xl border flex items-center justify-center transition-all ${
                    isSelected
                      ? mapMode === "train"
                        ? "bg-amber-500 border-amber-300 text-white scale-115 shadow-lg shadow-amber-500/30"
                        : "bg-cyan-500 border-cyan-300 text-slate-950 scale-115 shadow-lg shadow-cyan-500/30 font-black"
                      : isLightTheme
                      ? "bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-sm"
                      : "bg-[#151516] hover:bg-[#1C1C1E] border-white/5 text-slate-300"
                  }`}>
                    {getNodeIcon(node.type)}
                  </div>

                  {/* Coordinates floating readouts on hover */}
                  <span className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-0.5 rounded text-[8px] font-mono font-bold whitespace-nowrap shadow-md border transition-all pointer-events-none ${
                    isSelected
                      ? mapMode === "train"
                        ? "bg-amber-500 border-amber-400 text-white z-20 block"
                        : "bg-cyan-500 border-cyan-400 text-slate-950 z-20 block"
                      : "bg-slate-900 border-white/5 text-slate-200 group-hover:block hidden"
                  }`}>
                    {node.name} [H:{alt}m]
                  </span>
                </button>
              );
            })}
          </div>

          {/* 3D Perspective Pitch / Yaw rotation sliders (Only visible in 3D Mode) */}
          {is3DMode && (
            <div className={`px-4 py-2 border-t flex flex-wrap items-center justify-between gap-4 text-[9px] font-mono font-bold text-slate-500 ${
              isLightTheme ? "bg-[#EFEAE2]/20 border-[#E5DDD0]/50" : "bg-slate-950/40 border-white/5"
            }`}>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="shrink-0 flex items-center gap-1">
                  <RotateCw className="w-3 h-3 text-cyan-500" />
                  PROJECTION PITCH:
                </span>
                <input 
                  type="range" 
                  min="15" 
                  max="45" 
                  value={pitch} 
                  onChange={(e) => setPitch(Number(e.target.value))} 
                  className="w-20 accent-cyan-500 bg-slate-800 h-1 rounded-full outline-none cursor-ew-resize"
                />
                <span className="text-cyan-500 w-6">{pitch}°</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span>ROTATE YAW:</span>
                <input 
                  type="range" 
                  min="-35" 
                  max="5" 
                  value={yaw} 
                  onChange={(e) => setYaw(Number(e.target.value))} 
                  className="w-20 accent-cyan-500 bg-slate-800 h-1 rounded-full outline-none cursor-ew-resize"
                />
                <span className="text-cyan-500 w-6">{yaw}°</span>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR DETAILS BOX: TAKES 5 COLS */}
        <div className={`lg:col-span-5 p-6 flex flex-col justify-between overflow-y-auto ${
          isFullscreen ? "h-full" : "h-80 md:h-[420px]"
        } ${
          isLightTheme ? "bg-[#FAF7F0]" : "bg-transparent"
        }`}>
          {mapMode === "route" ? (
            activeNode ? (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[9px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                      activeNode.type === "town"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : activeNode.type === "league"
                        ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                        : "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    }`}>
                      {activeNode.type} LANDMARK
                    </span>
                    {activeNode.levelRange && (
                      <span className="text-[10px] font-mono text-slate-400 font-extrabold bg-white/3 border border-white/5 px-2 py-0.5 rounded-full">
                        LVL {activeNode.levelRange[0]}-{activeNode.levelRange[1]}
                      </span>
                    )}
                  </div>

                  <h4 className={`font-display font-black text-xl tracking-tight uppercase mb-2 ${
                    isLightTheme ? "text-slate-900" : "text-white"
                  }`}>
                    {activeNode.name}
                  </h4>

                  <p className={`text-xs leading-relaxed mb-4 ${
                    isLightTheme ? "text-slate-600 font-medium" : "text-slate-300"
                  }`}>
                    {activeNode.description}
                  </p>

                  {/* PROPER DETAILED INFORMATION FOR TOWNS (Professors, Badges, etc.) */}
                  {isTownNode && townLore ? (
                    <div className="mt-4 space-y-4 border-t border-slate-500/10 pt-4">
                      {townLore.professor && (
                        <div className="flex items-start gap-2.5">
                          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-extrabold">Resident Professor</p>
                            <p className={`text-xs font-bold mt-0.5 ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>{townLore.professor}</p>
                          </div>
                        </div>
                      )}

                      {townLore.leader && (
                        <div className="flex items-start gap-2.5">
                          <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                            <Award className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-extrabold">Local Gym Leader & Badge</p>
                            <p className={`text-xs font-bold mt-0.5 ${isLightTheme ? "text-slate-800" : "text-slate-200"}`}>{townLore.leader} ({townLore.badge})</p>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-3.5">
                        <div>
                          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-extrabold mb-1">Local Facilities</p>
                          <ul className="space-y-1">
                            {townLore.facilities.map((fac, i) => (
                              <li key={i} className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full bg-cyan-500" />
                                <span>{fac}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-extrabold mb-1">Key Landmarks</p>
                          <ul className="space-y-1">
                            {townLore.landmarks.map((mark, i) => (
                              <li key={i} className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full bg-amber-500" />
                                <span>{mark}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={`p-3 rounded-xl border text-[10px] leading-relaxed italic ${
                        isLightTheme ? "bg-slate-100 border-slate-200 text-slate-600" : "bg-white/3 border-white/5 text-slate-400"
                      }`}>
                        {townLore.history}
                      </div>
                    </div>
                  ) : (
                    // If not a town but has wild species
                    activeNode.nativePokemonIds && activeNode.nativePokemonIds.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-500/10">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-extrabold block mb-2.5">
                          Spotted Wild Species in Habitat
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeNode.nativePokemonIds.map((id) => (
                            <span
                              key={id}
                              className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
                                isLightTheme ? "bg-white border-slate-200 text-slate-700" : "bg-white/4 border-white/5 text-slate-300"
                              }`}
                            >
                              <Swords className="w-2.5 h-2.5 text-cyan-400" />
                              <span>Wild Pokemon #{id}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Secure Holographic Decrypt Note */}
                <div className="mt-4 text-[9px] font-mono text-slate-500 text-center uppercase tracking-widest border-t border-slate-500/5 pt-3">
                  Geo-coordinate: X-{activeNode.x}019 Y-{activeNode.y}592
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center text-slate-400 py-6">
                <Compass className="w-8 h-8 text-cyan-500 mb-2 animate-pulse" />
                <p className="text-xs font-mono font-black">PROJECT COORDINATES</p>
                <p className="text-[11px] text-slate-500 mt-1.5 max-w-[180px]">
                  Click any floating landmark node on the map to display topographic geo-logs.
                </p>
              </div>
            )
          ) : (
            // Train Transit Network details
            <div className="flex flex-col h-full justify-between gap-4">
              <div>
                <h4 className="font-display font-black text-sm uppercase tracking-widest text-amber-500 mb-2 flex items-center gap-1">
                  <Layers className="w-4 h-4 animate-bounce" />
                  <span>{regionId.toUpperCase()} TRANSIT GRID</span>
                </h4>
                <p className={`text-[11px] leading-relaxed mb-4 ${isLightTheme ? "text-slate-600 font-medium" : "text-slate-400"}`}>
                  The high-speed linear train network connecting critical municipal centers with clean, high-efficiency magnetic levitation tubes.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/3 border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">System Power Grid</span>
                    <span className="text-[9px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">OPERATIONAL</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/3 border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Average Frequency</span>
                    <span className="text-[10px] font-mono font-bold text-slate-300">Every 45 seconds</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/3 border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Transit Stations</span>
                    <span className="text-[10px] font-mono font-bold text-slate-300">Mag-lev terminus</span>
                  </div>
                </div>
              </div>

              {/* LIVE TRAIN POWER GRID */}
              <div className="flex-1 min-h-[110px] rounded-2xl border border-white/5 overflow-hidden relative flex flex-col">
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full absolute inset-0"
                  width={280}
                  height={110}
                />
                
                <div className="relative z-10 p-2.5 flex justify-between items-start pointer-events-none select-none w-full">
                  <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-1 rounded-xl border border-white/10">
                    <Zap className="w-3 h-3 text-yellow-400 animate-pulse" />
                    <span className="text-[8px] font-mono font-bold text-yellow-400">GRID POWER</span>
                  </div>
                  <span className="text-[8px] font-mono font-bold text-blue-400 bg-slate-900/80 px-2 py-1 rounded-xl border border-white/10">
                    60.2 HZ
                  </span>
                </div>

                <div className="relative z-10 mt-auto p-2.5 flex justify-between pointer-events-none select-none w-full bg-gradient-to-t from-slate-950/90 to-transparent">
                  <div className="text-[8px] font-mono text-slate-400">
                    SPEED: <span className="text-white font-bold">240 KM/H</span>
                  </div>
                  <div className="text-[8px] font-mono text-slate-400">
                    DRAW: <span className="text-white font-bold">384 MW</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-7xl h-[85vh] md:h-[90vh]">
          {mapContent}
        </div>
      </div>
    );
  }

  return mapContent;
}
