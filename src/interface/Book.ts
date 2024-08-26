import { Author } from "./Author";

export interface Book {
  id: string;
  isbn: string;
  title: string;
  description:string,
  pages: number;
  content: File | null;
  cover:File | null;
  authors: Author[] | string[];
  status: string;
  audio: audioChapter;
  categorgy: string[];
}

interface audioChapter {
  title: string;
  audio: string;
  description: string;
}
