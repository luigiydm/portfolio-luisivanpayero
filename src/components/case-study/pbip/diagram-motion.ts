/**
 * Plays each `[data-diagram]` once when it enters the viewport.
 *
 * Nothing happens with prefers-reduced-motion or without IntersectionObserver: the
 * diagrams are already in their final state by default (see diagram-motion.css).
 * Safe to call from several components: each diagram is bound only once.
 */
export function initDiagrams(): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  if (!("IntersectionObserver" in window)) return

  const diagrams = Array.from(
    document.querySelectorAll<HTMLElement>("[data-diagram]:not([data-dg-bound])"),
  )
  if (!diagrams.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add("is-playing")
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
  )

  diagrams.forEach((el) => {
    el.dataset.dgBound = "true"
    el.classList.add("is-armed")
    observer.observe(el)
  })
}
