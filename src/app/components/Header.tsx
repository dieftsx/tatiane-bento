'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Logo from '../../assets/logo.png'



export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image 
              src={Logo}
              alt="Logo Tatiane Bento"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-bold text-amber-600">Tatiane Bento</span>
        </Link>
        <nav className="flex gap-4">
          <Button asChild>
            <Link href="#services">Serviços</Link>
          </Button>
          <Button asChild>
            <Link href="#contact">Contato</Link>
          </Button>
          <Button asChild>
            <Link href="#course">Curso</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

