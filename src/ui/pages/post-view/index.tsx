import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { LogOut, Menu, MoveLeft } from 'lucide-react';

const post = {
  id: 1,
  title: 'Condicional em tudo é mesmo o caminho certo?',
  author: 'Prof. John Doe',
  date: '22 de maio de 2024',
  content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
};

const PostView = () => {
    //linha abaixo comentada para fazer testes sem precisar acessar os dados do banco
  // const router = useRouter();

  return (
    <div className="flex flex-col h-screen bg-[#F4F4F4]">

      {/* Post Content */}
      <div className="container w-3/4 mx-auto p-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <p className="text-zinc-600 text-xl font-medium">{post.author}</p>
          <p className="text-zinc-600 text-xs font-semibold">{post.date}</p>
        </div>
        <h1 className="text-5xl font-semibold text-gray-800 mb-4">{post.title}</h1>
        <div className="text-zinc-900 text-lg leading-relaxed">
          {post.content}
        </div>
      </div>
      {/* Return btn */}
      <div className="w-full flex justify-start p-4 flex-row">
        <a href="#" className="flex items-center text-zinc-900 text-sm font-semibold">
          <MoveLeft size={65} strokeWidth={1} className="ml-4" />
        </a>
      </div>
    </div>
  );
};

export default PostView;
