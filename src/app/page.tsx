import React from 'React'
import Header from  './components/Header'
import Services from './components/Services'
import Contact from './components/Contact'
import CourseSignup from './components/Course-signup'





export default function Home() {
  
  return (
    <div className="min-h-screen bg-gradient--to-b fro-blue-50 to-green--50">
       <main className="container mx-auto px-4 py-8">
          <Header />   
       
          <Services />
          <Contact />
          <CourseSignup />
       </main>
    </div>
  )

}
