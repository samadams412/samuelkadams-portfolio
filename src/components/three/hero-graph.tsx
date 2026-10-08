"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

import { HeroGraphStatic } from "./hero-graph-static";

const HeroGraphScene = dynamic(
  () => import("./hero-graph-scene").then((mod) => mod.HeroGraphScene),
  { ssr: false },
);

function isLowPowerDevice() {
  if (typeof navigator === "undefined") return false;

  const deviceMemory = (navigator as Navigator & { deviceMemory?: number })
    .deviceMemory;
  if (typeof deviceMemory === "number" && deviceMemory <= 4) return true;

  const coarsePointer =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;
  const cores = navigator.hardwareConcurrency;
  if (coarsePointer && typeof cores === "number" && cores <= 4) return true;

  return false;
}

function getCanRenderSceneSnapshot() {
  if (typeof window === "undefined") return false;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  return !reducedMotion && !isLowPowerDevice();
}

function getServerSnapshot() {
  return false;
}

function subscribeToReducedMotionChanges(onChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

// Isolated mount point for the hero's 3D moment. Syncs with
// prefers-reduced-motion / device capability to decide whether to render the
// real Three.js scene or fall back to a static SVG — callers never need to
// know which one they got. Swapping the visual later means editing
// hero-graph-scene.tsx; this file's interface stays the same.
export function HeroGraph({ className }: { className?: string }) {
  const renderScene = useSyncExternalStore(
    subscribeToReducedMotionChanges,
    getCanRenderSceneSnapshot,
    getServerSnapshot,
  );

  if (!renderScene) {
    return <HeroGraphStatic className={className} />;
  }

  return <HeroGraphScene className={className} />;
}
