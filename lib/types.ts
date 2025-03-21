interface Language {
    l: string;  // Language name (e.g., "English")
    s: string;  // Language code (e.g., "eng")
  }
  
  // Episode interface
  interface Episode {
    complate: string;  // Completion status ("0" or "1")
    ep: string;        // Episode code (e.g., "E1")
    id: string;        // Episode ID
    s: string;         // Season code (e.g., "S1")
    t: string;         // Episode title
    time: string;      // Episode duration (e.g., "65m")
  }
  
  // Season interface
  interface Season {
    ep: string;        // Number of episodes
    id: string;        // Season ID
    s: string;         // Season number
    sele?: string;     // Selected status (e.g., " selected")
  }
  
  // Suggestion interface (simple version with just ID)
  interface Suggestion {
    id: string;        // Suggested show ID
  }
  
  // Main Show interface
 export interface ShowDetailsType {
    cast: string;                // Cast members (comma-separated)
    creator: string;             // Creators (comma-separated)
    d_lang: string;              // Default language code
    desc: string;                // Show description
    director: string;            // Directors (comma-separated)
    episodes: Episode[];         // List of episodes
    error: null | string;        // Error message if any
    genre: string;               // Genres (comma-separated)
    hdsd: string;                // Video quality (e.g., "HD")
    lang: Language[];            // Available languages
    last_ep: string;             // Last episode ID
    m_desc: string;              // Maturity rating description
    m_reason: string;            // Maturity reason (e.g., "language")
    match: string;               // Match percentage (e.g., "81% match")
    nextPage: number;            // Next page number
    nextPageSeason: string;      // Next page season ID
    nextPageShow: number;        // Next page show number
    oin: string;                 // Unknown field ("y" or "n")
    resume: string;              // Resume position (empty or timestamp)
    runtime: string;             // Show runtime (e.g., "1 Seasons")
    season: Season[];            // List of seasons
    short_cast: string;          // Short cast list
    status: string;              // Status (e.g., "y")
    suggest: Suggestion[];       // Suggested shows
    thismovieis: string;         // Show characteristics (e.g., "Intimate, Emotional")
    title: string;               // Show title
    type: string;                // Content type (e.g., "t" for TV show)
    ua: string;                  // Content rating (e.g., "U/A 16+")
    writer: string;              // Writers (comma-separated)
    year: string;                // Release year
  }