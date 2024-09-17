import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const CreatePost: React.FC = () => {
    const [title, setTitle] = useState('');
    const [keywords, setKeywords] = useState('');
    const [content, setContent] = useState('');
    // const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para enviar os dados para o backend
        console.log({ title, keywords, content });
        // Redirecionar após a criação do post
        // router.push('/admin/posts');
    };

    return (
        <div className="container mx-auto p-4 sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
            {/* Saudação e Título */}
            <h2 className="text-base sm:text-lg md:text-xl font-medium">Olá Prof. Fulanito,</h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black mb-6">
                <span className="font-extrabold">sobre o que falaremos hoje?</span>
            </h1>

            {/* Formulário de criação do post */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-bold text-gray-700">
                        Título
                    </label>
                    <Input
                        id="title"
                        type="text"
                        placeholder="Insira aqui o título do post"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="keywords" className="block text-sm font-bold text-gray-700">
                        Palavras chave
                    </label>
                    <Input
                        id="keywords"
                        type="text"
                        placeholder="Insira aqui palavras chave"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="mt-1 block w-full"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block text-sm font-bold text-gray-700">
                        Conteúdo do post
                    </label>
                    <Textarea
                        id="content"
                        placeholder="O seu post começa aqui..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="mt-1 block w-full"
                        rows={8}
                        required
                    />
                </div>

                {/* Botões Cancelar e Postar */}
                <div className="flex flex-col sm:flex-row sm:justify-between mt-4">
                    <Button
                        type="button"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 w-full sm:w-auto mb-2 sm:mb-0"
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        className="bg-fiap text-white px-4 py-2 rounded hover:bg-fiap-dark w-full sm:w-auto"
                    >
                        Postar
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
