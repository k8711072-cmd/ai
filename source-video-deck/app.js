(() => {
  const slides = [...document.querySelectorAll(".slide")];
  const counter = document.getElementById("counter");
  const bar = document.getElementById("bar");
  const overview = document.getElementById("overview");
  let i = 0;

  const show = (n) => {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
    counter.textContent = `${i + 1} / ${slides.length}`;
    bar.style.width = `${((i + 1) / slides.length) * 100}%`;
    history.replaceState(null, "", `#${i + 1}`);
  };

  const buildOverview = () => {
    overview.innerHTML = "";
    slides.forEach((s, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.innerHTML = `<strong>${idx + 1}</strong>${s.dataset.title || "投影片"}`;
      btn.addEventListener("click", () => {
        overview.hidden = true;
        show(idx);
      });
      overview.appendChild(btn);
    });
  };

  document.getElementById("prev").addEventListener("click", () => show(i - 1));
  document.getElementById("next").addEventListener("click", () => show(i + 1));

  window.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      show(i + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      show(i - 1);
    } else if (e.key === "Home") {
      show(0);
    } else if (e.key === "End") {
      show(slides.length - 1);
    } else if (e.key.toLowerCase() === "f") {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
      else document.exitFullscreen?.();
    } else if (e.key.toLowerCase() === "o") {
      overview.hidden = !overview.hidden;
    } else if (e.key === "Escape") {
      overview.hidden = true;
    }
  });

  let touchX = null;
  window.addEventListener(
    "touchstart",
    (e) => {
      touchX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  window.addEventListener(
    "touchend",
    (e) => {
      if (touchX == null) return;
      const dx = e.changedTouches[0].screenX - touchX;
      if (Math.abs(dx) > 50) show(i + (dx < 0 ? 1 : -1));
      touchX = null;
    },
    { passive: true }
  );

  buildOverview();
  const hash = Number(location.hash.replace("#", ""));
  show(Number.isFinite(hash) && hash >= 1 ? hash - 1 : 0);
})();
