export interface Author {
  name: string;
  age: number;
}

export interface Post {
  id: string;
  text: string;
  author: Author;
  createdAt: Date;
  updatedAt?: Date;
}
