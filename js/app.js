const sr = ScrollReveal({
  distance: "35px",
  duration: 2400,
  reset: false,
});

sr.reveal(".logo", { delay: 210, origin: "left" });
sr.reveal(".navlist", { delay: 310, origin: "top" });
sr.reveal(".top-btnn", { delay: 410, origin: "right" });

const srs = ScrollReveal({
  distance: "35px",
  duration: 2400,
  reset: true,
});

srs.reveal(".main-content h4", { delay: 210, origin: "top" });
srs.reveal(".main-content h1", { delay: 310, origin: "left" });
srs.reveal(".main-content p", { delay: 410, origin: "right" });
srs.reveal(".social", { delay: 510, origin: "left" });
srs.reveal(".main-btnn", { delay: 610, origin: "top" });

const abt = ScrollReveal({
  distance: "35px",
  duration: 2400,
  reset: true,
});

abt.reveal(".images", { delay: 210, origin: "left" });
abt.reveal("#about p", { delay: 310, origin: "rigt" });
abt.reveal("#about h1", { delay: 410, origin: "top" });
abt.reveal("#about label", { delay: 510, origin: "left" });
abt.reveal("#about button", { delay: 610, origin: "top" });
abt.reveal("#about button", { delay: 610, origin: "top" });
