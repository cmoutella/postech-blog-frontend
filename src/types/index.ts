export interface Teacher {
  id: string;
  name: string;
  age: number;
}

export type SessionTeacher = Teacher | undefined;

export interface Post {
  id: string;
  text: string;
  teacher: Teacher;
  createdAt: Date;
  updatedAt?: Date;
}
