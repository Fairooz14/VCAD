"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";

/**
 * Thin wrapper over Embla that exposes the state the homepage carousels need:
 * prev/next handlers, whether we're at an end (for disabling arrows on
 * non-looping carousels), the selected snap index, and a `scrollTo` for dots.
 * Embla gives us pointer drag + touch swipe out of the box; the arrows and dots
 * built on top satisfy the "arrows, drag, or both" requirement.
 */
export function useCarousel(options: EmblaOptionsType = {}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    emblaRef,
    emblaApi,
    canPrev,
    canNext,
    selectedIndex,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
  };
}
