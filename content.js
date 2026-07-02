/* ==========================================================================
   SHAMASE STUDIOS — PHOTO PAGE CONTENT
   --------------------------------------------------------------------------
   This is the ONLY file you edit to change titles, wording, order, and which
   photos show on the Photo page. You do NOT touch shm-photo.js.

   HOW PHOTOS WORK:
     - Upload a photo into the "images" folder in this repo, then just write
       its file name here, e.g.  "nolanga-1.jpg"
     - OR paste a full web link, e.g.  "https://.../photo.jpg"
     Both work. (Right now the existing photos use full links.)

   TO ADD A SHOOT:  copy one whole  { ... },  block, paste it below, change words.
   TO REMOVE A SHOOT:  delete its  { ... },  block.
   TO REORDER:  move the blocks up or down.

   RULES TO NOT BREAK IT:
     - Keep the quote marks "  " around every piece of text.
     - Keep the commas between items.
     - After editing, click "Commit changes" (Save). Site updates in ~1 minute.
     - Mistake? Repo > Commits > open it > Revert. Nothing is ever lost.
   ========================================================================== */

window.SHAMASE_CONTENT = {

  /* ---- CONTACT (used by the buttons) ---- */
  whatsapp: "27652898164",
  email:    "hello@shamasestudios.co.za",

  /* ---- THE COVER (very top of the page) ---- */
  cover: {
    kicker:   "Shamase Studios · Johannesburg",
    heading:  "The work speaks in light.",
    subhead:  "Editorial, beauty and portrait photography — created in-studio, made to be seen.",
    image:    "https://images-pw.pixieset.com/elementfield/ankzXzd/2024-09-25-GlamourSummerCupEditorial_SHOT04_05042-c1d747c8-2500.JPG"
  },

  /* ---- THE SHOOTS ----
     Each block is one shoot. It shows as a feature on the page, and clicking
     its name opens its own page with "The Series" and "Behind the Scenes". */
  shoots: [

    {
      title:   "Nolanga · Made",
      kicker:  "Editorial · 2024",
      credit:  "Fashion Editorial · In-studio · Johannesburg",
      story:   "Structured light and a couture silhouette — a full day distilled into a story.",
      spread:  "https://images-pw.pixieset.com/elementfield/OW0qPxD/2024-06-21-Nolanga-Made_SHOT05-0981-37388455-2500.jpg",
      cover:   "https://images-pw.pixieset.com/elementfield/OW0qPxD/2024-06-21-Nolanga-Made_SHOT05-0981-37388455-2500.jpg",
      series:  [
        "https://images-pw.pixieset.com/elementfield/OW0qPxD/2024-06-21-Nolanga-Made_SHOT05-0981-37388455-2500.jpg",
        "https://images-pw.pixieset.com/elementfield/9Jm40pP/2024-06-21-Nolanga-Made_SHOT02-0515-36af82d3-2500.jpg",
        "https://images-pw.pixieset.com/elementfield/zAA7Xp/2024-06-21-Nolanga-Made_SHOT02-0573-77f065e6-1000.jpg",
        "https://images-pw.pixieset.com/elementfield/zAA7Xp/2024-06-21-Nolanga-Made_SHOT02-0611-8547e715-1000.jpg",
        "https://images-pw.pixieset.com/elementfield/zAA7Xp/2024-06-21-Nolanga-Made_SHOT03-0676-9265e36e-1000.jpg",
        "https://images-pw.pixieset.com/elementfield/zAA7Xp/2024-06-21-Nolanga-Made_SHOT03-0723-60d2619d-1000.jpg",
        "https://images-pw.pixieset.com/elementfield/zAA7Xp/2024-06-21-Nolanga-Made_SHOT03-0764-c117278d-1000.jpg",
        "https://images-pw.pixieset.com/elementfield/zAA7Xp/2024-06-21-Nolanga-Made_SHOT04-0884-38dbf705-1000.jpg",
        "https://images-pw.pixieset.com/elementfield/zAA7Xp/2024-06-21-Nolanga-Made_SHOT05-1017-ca6c75f6-1000.jpg",
        "https://images-pw.pixieset.com/elementfield/zAA7Xp/2024-06-21-Nolanga-Made_SHOT06-1093-6ba933e6-1000.jpg",
        "https://images-pw.pixieset.com/elementfield/DGoWQzY/2024-06-21-Nolanga-Made_SHOT06-1115-82bae98a-2500.jpg"
      ],
      videos:  [
        { orientation: "reel", image: "https://images-pw.pixieset.com/elementfield/DGoWQzY/2024-06-21-Nolanga-Made_SHOT06-1115-82bae98a-2500.jpg", link: "" },
        { orientation: "wide", image: "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at17.56.35-6a3ea793-1000.png", link: "" }
      ],
      stills:  [
        "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at17.56.52-da02a840-1000.png",
        "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at17.57.05-28b52ab3-1000.png",
        "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at17.57.25-89706ca3-1000.png",
        "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at18.08.51-90d51dbb-1000.png"
      ]
    },

    {
      title:   "Anelisa Mchunu",
      kicker:  "Portrait · 2024",
      credit:  "Portrait · Natural direction · In-studio",
      story:   "Close, quiet and confident — portraits lit so the room disappears and only the person remains.",
      spread:  "https://images-pw.pixieset.com/elementfield/9Jm4DXG/2024-09-08-Anelisa-Mchunu_SHOT01_0148-9f3429bd-2500.jpg",
      cover:   "https://images-pw.pixieset.com/elementfield/9Jm4DXG/2024-09-08-Anelisa-Mchunu_SHOT01_0148-9f3429bd-2500.jpg",
      series:  [
        "https://images-pw.pixieset.com/elementfield/9Jm4DXG/2024-09-08-Anelisa-Mchunu_SHOT01_0148-9f3429bd-2500.jpg",
        "https://images-pw.pixieset.com/elementfield/8KybDZ1/2024-09-08-Anelisa-Mchunu_SHOT05_0650-fd6052b8-2500.jpg",
        "https://images-pw.pixieset.com/elementfield/yWopGR0/2024-09-08-Anelisa-Mchunu_SHOT05_0749-2a9f015b-2500.jpg"
      ],
      videos:  [
        { orientation: "reel", image: "https://images-pw.pixieset.com/elementfield/8KybDZ1/2024-09-08-Anelisa-Mchunu_SHOT05_0650-fd6052b8-2500.jpg", link: "" }
      ],
      stills:  [
        "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at18.08.43-7bc7ee50-1000.png",
        "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at18.08.36-5e14b301-1000.png",
        "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at18.08.58-62629f48-1000.png"
      ]
    },

    {
      title:   "Tayla Foong",
      kicker:  "Beauty · 2024",
      credit:  "Beauty · Colour story · In-studio",
      story:   "Skin, tone and detail rendered like a cover — beauty work made to hold up at full-page scale.",
      spread:  "https://images-pw.pixieset.com/elementfield/Q03xlXY/2024-05-31--Tayla-Foong_SHOT01_0037-611c235f-2500.jpg",
      cover:   "https://images-pw.pixieset.com/elementfield/Q03xlXY/2024-05-31--Tayla-Foong_SHOT01_0037-611c235f-2500.jpg",
      series:  [
        "https://images-pw.pixieset.com/elementfield/Q03xlXY/2024-05-31--Tayla-Foong_SHOT01_0037-611c235f-2500.jpg",
        "https://images-pw.pixieset.com/elementfield/5Onpxwo/2024-05-31--Tayla-Foong_SHOT02_0127-dbd75129-2500.jpg",
        "https://images-pw.pixieset.com/elementfield/4yGxOPV/2024-05-31--Tayla-Foong_SHOT02_0133-bbb11732-2500.jpg"
      ],
      videos:  [],
      stills:  [
        "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at18.09.06-c3a7d958-1000.png",
        "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at18.09.19-31105bab-1000.png"
      ]
    },

    {
      title:   "Dr Langa",
      kicker:  "Campaign · 2020",
      credit:  "Campaign · Brand · In-studio",
      story:   "From concept to frame — campaign imagery with the polish of an editorial and the clarity of a brand.",
      spread:  "https://images-pw.pixieset.com/elementfield/661135301/2020-11-14-DrLanga_SHOT02_0138-9e4e349b.jpg",
      cover:   "https://images-pw.pixieset.com/elementfield/661135301/2020-11-14-DrLanga_SHOT02_0138-9e4e349b.jpg",
      series:  [
        "https://images-pw.pixieset.com/elementfield/661135301/2020-11-14-DrLanga_SHOT02_0138-9e4e349b.jpg",
        "https://images-pw.pixieset.com/elementfield/016878301/2020-11-14-DrLanga_SHOT02_0115_16_BY_9-bec4cc3b.jpg",
        "https://images-pw.pixieset.com/elementfield/016878301/2020-11-14-DrLanga_SHOT02_0115_16_BY_9-bec4cc3b.jpg"
      ],
      videos:  [],
      stills:  [
        "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at18.09.29-14c306fa-1000.png",
        "https://images-pw.pixieset.com/elementfield/LpMxxXq/Screenshot2024-07-18at18.09.38-e6748409-1000.png"
      ]
    }

  ]
};
