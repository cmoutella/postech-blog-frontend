import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { LogOut, Menu, MoveLeft } from 'lucide-react';
import logodark from '@/assets/logo-dark.png';
import Image from 'next/image';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const MyDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Dropdown Menu: parte da navbar
    <DropdownMenu onOpenChange={handleToggle}>
      <DropdownMenuTrigger>
        <Menu
        size={35}
          strokeWidth={3}
          className={`text-zinc-900 transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'} mr-7`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
        <DropdownMenuItem>Option 3</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut color="#1E1E1E" className="p-1 rounded-full" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

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
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image src={logodark} alt="Logo" className="h-16 w-16" />
        </div>
        <div className="flex items-center">
          <MyDropdownMenu />
        </div>
      </nav>

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
