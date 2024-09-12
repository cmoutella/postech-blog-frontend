export interface Teacher {
  id: string;
  username: string;
}

export type SessionTeacher = Teacher | Partial<Teacher> | undefined;

export interface Post {
  id: string;
  text: string;
  teacher: Teacher;
  createdAt: Date;
  updatedAt?: Date;
}

export interface PostInterface {
  id: string;
  title: string;
  author: string;
  date: string;
  text: string;
}
