export interface Author {
  fullname: string;
  photo: File | null;
  bio: string;
  surname: string;
  books: [];
  nationality: string;
  id: string;
}
