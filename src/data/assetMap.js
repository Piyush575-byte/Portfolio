// Centralized Asset Mapping for Piyush Sharma's Portfolio
// Uses authentic files from public/Videos with clean, URL-safe filenames.
// All files exist physically in public/Videos and public/images.

export const assetMap = {
  // Project 01 — Language Barrier — Women's Day Promotional Reel (Lakshya Jeevan Jagriti)
  lakshyaReel: {
    videoSrc: '/Videos/lakshya-reel.mp4',
    originalSrc: '/Videos/Lakshya Jeevan Jagriti.mp4',
    aspectRatio: '9:16',
    label: "Language Barrier — Women's Day Promotional Reel"
  },

  // Project 02 — OPI Lecture Series (Full selected lecture video)
  opiLecture: {
    videoSrc: '/Videos/opi-video.mp4',
    originalSrc: '/Videos/OPI Video.mp4',
    teaserSrc: '/Videos/opi-teaser.mp4',
    aspectRatio: '16:9',
    label: 'OPI Lecture Series (Vision Divyang Foundation)'
  },

  // Project 03 — ICRA Module Content (Hindi & English versions)
  icraModule: {
    englishVideoSrc: '/Videos/icra-english.mp4',
    originalEnglishSrc: '/Videos/ICra english.mp4',
    hindiVideoSrc: '/Videos/icra-hindi.mp4',
    originalHindiSrc: '/Videos/icra hindi.mp4',
    aspectRatio: '16:9',
    label: 'ICRA Module Content'
  },

  // Project 04 — OPI Course Co-Management
  opiCoManagement: {
    portalImage: '/Videos/opi-course-co-management.png',
    originalPortalImage: '/Videos/OPI Course Co-Management.png',
    aspectRatio: '16:9',
    label: 'OPI Course Co-Management'
  },

  // Recognition 01 — OPI Course Launch / Delhi Event
  delhiEvent: {
    sliderImages: [
      {
        src: '/Videos/awrad-rekha.jpeg',
        originalSrc: '/Videos/awrad rekha.jpeg',
        caption: 'Delhi Government Social Welfare Department memento presented during the "Ek Shaam Divyangon Ke Naam" event ceremony.',
        alt: 'Delhi Government Social Welfare Department Memento'
      },
      {
        src: '/Videos/sign.jpeg',
        caption: 'Event dignitary placard from the course inauguration event.',
        alt: 'Event Placard'
      }
    ],
    eventReelSrc: '/Videos/delhi-stands-with-divyangjan.mp4',
    originalEventReelSrc: '/Videos/Delhi stands with its Divyangjan.#SevaSankalpAbhiyan.mp4',
    label: 'OPI Course Launch & Event Documentation'
  },

  // Recognition 02 — Award Presentation by Dr. Virendra Kumar (Reserved)
  virendraKumarAward: {
    honoree: 'Dr. Virendra Kumar',
    officialTitle: 'Minister for Social Justice & Empowerment',
    // Strictly kept false and hidden until genuine photograph is supplied
    isPublished: false
  },

  // Hackathon Achievement & Leadership — HackIndia
  hackindia: {
    teamPhoto: '/Videos/hackthion.png',
    label: 'HackIndia AI & Web'
  }
};
