'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleSearch(term: string){
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');

        if (term){
            params.set('query', term);
        } else {
            params.delete('query');
        }
        router.push(`${pathname}?${params.toString()}`);
    }

    return(
        <div className="relative flex items-center">
            <input
                type="text"
                defaultValue={searchParams.get('query')?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
                className="peer block p-2 pl-12 w-full text-forestgreen bg-base rounded-lg border border-forestgreen focus:pl-8"
                placeholder="Pesquisar"
            />
            <div className="absolute top-3 left-3 items-center peer-focus:opacity-0 transition-opacity duration-50">
                <IoIosSearch className="text-forestgreen" size={16} />
            </div>
        </div>
    );
}