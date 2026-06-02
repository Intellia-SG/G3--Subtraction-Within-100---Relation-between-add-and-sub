// Story panels for Phase 2 — The Magic Sandwich Shop
// Each panel: { img, nar, dlg, vis }
// `img` is the placeholder label shown in the <ImgPH> component.
// Replace with real <img src="…"> paths once assets are provided.
// `vis` is a JSX element key (resolved in StoryPhase.jsx).

export const PANELS = [
  {
    img: "story/panel-01.jpg",
    imgAlt: "Bright colourful sandwich shop exterior — Lily and Max standing outside smiling proudly",
    nar: "Lily and Max run a sandwich shop. One morning, they baked 63 sandwiches.",
    dlg: null,
    visKey: null,
  },
  {
    img: "story/panel-02.jpg",
    imgAlt: "Lily counting sandwiches neatly arranged on a display shelf",
    nar: "They sold some sandwiches by noon. Now only 27 sandwiches are left on the shelf.",
    dlg: null,
    visKey: null,
  },
  {
    img: "story/panel-03.jpg",
    imgAlt: "Max looking puzzled at a notepad covered in question marks",
    nar: "Max scratched his head.",
    dlg: "How many sandwiches did we sell? I can't figure it out!",
    visKey: null,
  },
  {
    img: "story/panel-04.jpg",
    imgAlt: "Lily drawing a fact family triangle on paper — 63 at top, 27 at bottom-left, ? at bottom-right",
    nar: "Then Lily had an idea! She drew a fact family triangle.",
    dlg: "If 27 + ? = 63… then the triangle will tell us the answer!",
    visKey: "triangle-missing",  // FactFamilyTriangle with missing="part2"
  },
  {
    img: "story/panel-05.jpg",
    imgAlt: "Max and Lily high-fiving — fact family triangle diagram visible on paper behind them",
    nar: "63 − 27 = 36. They sold 36 sandwiches! Max was amazed.",
    dlg: "One addition fact revealed the answer instantly! The inverse works! 🎉",
    visKey: "triangle-complete", // Full FactFamilyTriangle
  },
  {
    img: "story/panel-06.jpg",
    imgAlt: "Chalkboard showing the complete fact family in four chalk lines",
    nar: "Together they wrote the whole fact family on the chalkboard for everyone to see!",
    dlg: "27+36=63  |  36+27=63  |  63−27=36  |  63−36=27",
    visKey: null,
  },
];
