declare module "vanta/dist/vanta.fog.min" {
  import * as THREE from "three";

  interface VantaFogOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
    zoom?: number;
  }

  function FOG(options: VantaFogOptions): {
    destroy: () => void;
  };

  export default FOG;
}

// Declare other effects if needed
declare module "vanta/dist/vanta.waves.min" {
  import * as THREE from "three";

  interface VantaWavesOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    shininess?: number;
    waveHeight?: number;
    waveSpeed?: number;
    zoom?: number;
  }

  function WAVES(options: VantaWavesOptions): {
    destroy: () => void;
  };

  export default WAVES;
}

// Base Vanta module
declare module "vanta" {
  // Define a more specific type for effects
  interface VantaEffectsMap {
    FOG: (options: object) => { destroy: () => void };
    WAVES: (options: object) => { destroy: () => void };
    BIRDS: (options: object) => { destroy: () => void };
    NET: (options: object) => { destroy: () => void };
    CELLS: (options: object) => { destroy: () => void };
    CLOUDS: (options: object) => { destroy: () => void };
    CLOUDS2: (options: object) => { destroy: () => void };
    DOTS: (options: object) => { destroy: () => void };
    GLOBE: (options: object) => { destroy: () => void };
    HALO: (options: object) => { destroy: () => void };
    RINGS: (options: object) => { destroy: () => void };
    TRUNK: (options: object) => { destroy: () => void };
    TOPOLOGY: (options: object) => { destroy: () => void };
    [key: string]: (options: object) => { destroy: () => void };
  }

  const EFFECTS: VantaEffectsMap;
  export default EFFECTS;
}
