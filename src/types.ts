export interface List {
    contents: { data: Array<Movie> };
    id: string;
    name: string;
    short_name: string;
    type: 'lists';
}

export interface Movie {
    duration: number;
    highlighted_score: { amount_of_votes: number; formatted_amount_of_votes: string; score: number };
    id: string;
    images: { artwork: string; snapshot: string };
    label: string;
    rating: { average: number; scale: number };
    title: string;
    type: 'movie';
    year: number;
}
