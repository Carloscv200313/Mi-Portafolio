"use client";
// Adaptado de https://reactbits.dev/components/staggered-menu (MIT) a la paleta
// y tipografía del portafolio. Reemplaza el drawer mobile simple por el efecto
// de paneles escalonados con GSAP.
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useOverlayOpen } from "@/lib/overlay-state";
import "./StaggeredMenu.css";

export interface StaggeredMenuItem {
  label: string;
  link: string;
  ariaLabel?: string;
}

interface StaggeredMenuProps {
  position?: "left" | "right";
  colors?: string[];
  items: StaggeredMenuItem[];
  displayItemNumbering?: boolean;
  accentColor?: string;
  onItemClick?: (item: StaggeredMenuItem) => void;
}

export default function StaggeredMenu({
  position = "right",
  colors = ["#d6ff3f", "#ff8a3d"],
  items,
  displayItemNumbering = true,
  accentColor = "#d6ff3f",
  onItemClick,
}: StaggeredMenuProps) {
  const [open, setOpen] = useState(false);
  const overlayOpen = useOverlayOpen();
  const openRef = useRef(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLDivElement[]>([]);
  const lineTopRef = useRef<HTMLSpanElement | null>(null);
  const lineMidRef = useRef<HTMLSpanElement | null>(null);
  const lineBottomRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const lineTop = lineTopRef.current;
      const lineMid = lineMidRef.current;
      const lineBottom = lineBottomRef.current;
      if (!panel || !lineTop || !lineMid || !lineBottom) return;

      let preLayers: HTMLDivElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll(".sm-prelayer"));
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === "left" ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1 });
      if (preContainer) gsap.set(preContainer, { xPercent: 0, opacity: 1 });
      gsap.set([lineTop, lineMid, lineBottom], { transformOrigin: "50% 50%" });
      gsap.set(lineTop, { y: -6, rotate: 0 });
      gsap.set(lineMid, { opacity: 1, scaleX: 1 });
      gsap.set(lineBottom, { y: 6, rotate: 0 });
    });
    return () => ctx.revert();
  }, [position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }

    const itemEls = Array.from(panel.querySelectorAll<HTMLElement>(".sm-panel-itemLabel"));
    const numberEls = Array.from(
      panel.querySelectorAll<HTMLElement>(".sm-panel-list[data-numbering] .sm-panel-item")
    );

    const offscreen = position === "left" ? -100 : 100;
    const layerStates = layers.map((el) => ({ el, start: offscreen }));
    const panelStart = offscreen;

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { "--sm-num-opacity": 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: "power4.out" }, i * 0.07);
    });
    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;
    tl.fromTo(panel, { xPercent: panelStart }, { xPercent: 0, duration: panelDuration, ease: "power4.out" }, panelInsertTime);

    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15;
      tl.to(
        itemEls,
        { yPercent: 0, rotate: 0, duration: 1, ease: "power4.out", stagger: { each: 0.1, from: "start" } },
        itemsStart
      );
      if (numberEls.length) {
        tl.to(
          numberEls,
          { duration: 0.6, ease: "power2.out", "--sm-num-opacity": 1, stagger: { each: 0.08, from: "start" } },
          itemsStart + 0.1
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback("onComplete", () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();
    const offscreen = position === "left" ? -100 : 100;
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: "power3.in",
      overwrite: "auto",
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll<HTMLElement>(".sm-panel-itemLabel"));
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        const numberEls = Array.from(
          panel.querySelectorAll<HTMLElement>(".sm-panel-list[data-numbering] .sm-panel-item")
        );
        if (numberEls.length) gsap.set(numberEls, { "--sm-num-opacity": 0 });
        busyRef.current = false;
      },
    });
  }, [position]);

  const animateIcon = useCallback((opening: boolean) => {
    const lineTop = lineTopRef.current;
    const lineMid = lineMidRef.current;
    const lineBottom = lineBottomRef.current;
    if (!lineTop || !lineMid || !lineBottom) return;
    spinTweenRef.current?.kill();
    const tween = gsap.timeline({ defaults: { duration: opening ? 0.4 : 0.35, ease: "power3.inOut", overwrite: "auto" } });
    if (opening) {
      tween
        .to(lineMid, { opacity: 0, scaleX: 0 }, 0)
        .to(lineTop, { y: 0, rotate: 45 }, 0)
        .to(lineBottom, { y: 0, rotate: -45 }, 0);
    } else {
      tween
        .to(lineMid, { opacity: 1, scaleX: 1 }, 0)
        .to(lineTop, { y: -6, rotate: 0 }, 0)
        .to(lineBottom, { y: 6, rotate: 0 }, 0);
    }
    spinTweenRef.current = tween;
  }, []);

  const closeMenu = useCallback(() => {
    if (!openRef.current) return;
    openRef.current = false;
    setOpen(false);
    playClose();
    animateIcon(false);
  }, [playClose, animateIcon]);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) playOpen();
    else playClose();
    animateIcon(target);
  }, [playOpen, playClose, animateIcon]);

  // Cerrar al tocar/clickear afuera del panel.
  React.useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open, closeMenu]);

  return (
    <div
      className="staggered-menu-wrapper fixed-wrapper pointer-events-none"
      style={{ ["--sm-accent" as string]: accentColor }}
      data-position={position}
      data-open={open || undefined}
    >
      <div className="sm-backdrop" aria-hidden="true" />

      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {colors.slice(0, 4).map((c, i) => (
          <div key={i} className="sm-prelayer" style={{ background: c }} />
        ))}
      </div>

      <button
        ref={toggleBtnRef}
        className={`sm-toggle-float pointer-events-auto${overlayOpen && !open ? " sm-toggle-hidden" : ""}`}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="staggered-menu-panel"
        aria-hidden={overlayOpen && !open}
        tabIndex={overlayOpen && !open ? -1 : undefined}
        onClick={toggleMenu}
        type="button"
      >
        <span ref={iconRef} className="sm-icon" aria-hidden="true">
          <span ref={lineTopRef} className="sm-icon-line" />
          <span ref={lineMidRef} className="sm-icon-line" />
          <span ref={lineBottomRef} className="sm-icon-line" />
        </span>
      </button>

      <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
        <div className="sm-panel-inner">
          <ul className="sm-panel-list" role="list" data-numbering={displayItemNumbering || undefined}>
            {items.map((it, idx) => (
              <li className="sm-panel-itemWrap" key={it.label + idx}>
                <a
                  className="sm-panel-item"
                  href={it.link}
                  aria-label={it.ariaLabel}
                  data-index={idx + 1}
                  onClick={() => {
                    onItemClick?.(it);
                    closeMenu();
                  }}
                >
                  <span className="sm-panel-itemLabel">{it.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
