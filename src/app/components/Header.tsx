import Link from 'next/link'

import { Button } from '../../components/ui/button.tsx'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
    <div className="container mx-auto px--4 py-4 flex justify-between items-center">        
    <Link href="/" className="text-2xl font-bold text-blue-600">Dra. Tatiane Bento - Neuropsicóloga </Link>
   <nav className="flex gap-4">
    <Button asChild>
    <Link href="#services">Serviços</Link>
  </Button>
   <Button  asChild>
    <Link href="#contact">Contato</Link>
  </Button>
    <Button asChild>
    <Link href="#course">Nosso Curso</Link>
  </Button>
</nav>
  </div>
 </header>
  )
}
