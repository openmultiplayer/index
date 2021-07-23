export interface Status {
  total: number;
  failed: number;
  successful: number;
}

export interface Query {
  query: string;
}

export interface Highlight {
  style?: any;
  fields?: any;
}

export interface Request {
  query: Query;
  size: number;
  from: number;
  highlight: Highlight;
  fields?: any;
  facets?: any;
  explain: boolean;
  sort: string[];
  includeLocations: boolean;
  search_after?: any;
  search_before?: any;
}

export interface Position {
  pos: number;
  start: number;
  end: number;
  array_positions?: any;
}

export interface Description {
  position: Position[];
}

export interface Locations {
  Description: Description;
}

export interface Fragments {
  Description: string[];
}

export interface Hit {
  index: string;
  id: string;
  score: number;
  locations: Locations;
  fragments: Fragments;
  sort: string[];
}

export interface SearchResults {
  status: Status;
  request: Request;
  hits: Hit[];
  total_hits: number;
  max_score: number;
  took: number;
  facets?: any;
}
