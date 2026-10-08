"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 18;
const CONNECT_DISTANCE = 2.4;
const SPREAD = 3.2;

function readCssColor(variable: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
  return value || fallback;
}

function buildGraph(accentColor: string) {
  const group = new THREE.Group();

  const positions: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i += 1) {
    positions.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * SPREAD * 2,
        (Math.random() - 0.5) * SPREAD * 2,
        (Math.random() - 0.5) * SPREAD,
      ),
    );
  }

  const nodeGeometry = new THREE.IcosahedronGeometry(0.045, 0);
  const nodeMaterial = new THREE.MeshBasicMaterial({ color: accentColor });
  for (const position of positions) {
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
    node.position.copy(position);
    group.add(node);
  }

  const edgePoints: number[] = [];
  for (let i = 0; i < positions.length; i += 1) {
    for (let j = i + 1; j < positions.length; j += 1) {
      if (positions[i].distanceTo(positions[j]) < CONNECT_DISTANCE) {
        edgePoints.push(
          positions[i].x,
          positions[i].y,
          positions[i].z,
          positions[j].x,
          positions[j].y,
          positions[j].z,
        );
      }
    }
  }
  const edgeGeometry = new THREE.BufferGeometry();
  edgeGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(edgePoints, 3),
  );
  const edgeMaterial = new THREE.LineBasicMaterial({
    color: accentColor,
    transparent: true,
    opacity: 0.25,
  });
  group.add(new THREE.LineSegments(edgeGeometry, edgeMaterial));

  return group;
}

export function HeroGraphScene({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const accentColor = readCssColor("--accent", "#b45309");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 20);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const graph = buildGraph(accentColor);
    scene.add(graph);

    const target = { x: 0, y: 0 };
    const pointer = { x: 0, y: 0 };

    function handlePointerMove(event: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    }
    container.addEventListener("pointermove", handlePointerMove);

    function resize() {
      const rect = container!.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
      renderer.setSize(rect.width, rect.height);
    }
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let frameId: number;
    function animate() {
      frameId = requestAnimationFrame(animate);
      graph.rotation.y += 0.0015;
      graph.rotation.x += 0.0004;

      target.x += (pointer.x * 0.4 - target.x) * 0.04;
      target.y += (pointer.y * 0.4 - target.y) * 0.04;
      camera.position.x = target.x;
      camera.position.y = -target.y;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      graph.traverse((child) => {
        if (
          child instanceof THREE.Mesh ||
          child instanceof THREE.LineSegments
        ) {
          child.geometry.dispose();
        }
      });
      nodeMaterialsDispose(graph);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className={className} />;
}

function nodeMaterialsDispose(group: THREE.Group) {
  const seen = new Set<THREE.Material>();
  group.traverse((child) => {
    if (child instanceof THREE.Mesh || child instanceof THREE.LineSegments) {
      const material = child.material as THREE.Material;
      if (!seen.has(material)) {
        seen.add(material);
        material.dispose();
      }
    }
  });
}
