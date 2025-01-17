import React from 'react'
import Header from  './components/Header'
import Services from './components/Services'
import Contact from './components/Contact'
//import CourseSignup from './components/Course-signup'
import Image from 'next/image'

import profilePhoto from '../assets/tatiane-bento.jpg'




export default function Home() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
          <Header />   
            <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Dra. Tatiane Bento
                <span className="block text-amber-600 mt-2">Neuropsicóloga</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
              Com mais de 03 anos de experiência, sou especialista em Avaliação e reabilitação neuropsicológica 
                Análise do comportamento aplicada ao autismo e Didática do ensino superior. 
                   Minha missão é ajudar pessoas a compreenderem melhor seu funcionamento cognitivo, melhorar qualidade de vida  e desenvolverem todo seu potencial.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                Avaliação Neuropsicológica
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reabilitação Neuropsicológica
                  </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                      Neurofeedback
                  </li>
                 </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src={profilePhoto} 
                alt="Dra. Tatiane Bento - Neuropsicóloga"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>
          <Services />
          <Contact />
        </main>
    </div>
  )
}



