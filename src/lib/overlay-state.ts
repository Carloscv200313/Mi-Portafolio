"use client";
// Store global minúsculo: indica si hay un modal/lightbox a pantalla completa abierto
// (proyectos, capturas de AlpaChange, etc). El botón flotante del menú mobile lo usa
// para esconderse mientras algo cubre la pantalla.
import { useSyncExternalStore } from "react";

let openCount = 0;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

/** Marca que un overlay se abrió (true) o cerró (false). Soporta overlays anidados. */
export function setOverlayOpen(open: boolean) {
  openCount = Math.max(0, openCount + (open ? 1 : -1));
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return openCount > 0;
}

function getServerSnapshot() {
  return false;
}

export function useOverlayOpen() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
