import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
export default function Dashboard() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
            <CardHeader>
            <CardTitle>Métricas</CardTitle>
            </CardHeader>
            <CardContent>
            <p>Visitantes</p>
            <p>Conversões</p>
            </CardContent>
            </Card>
            
            <Card>
            <CardHeader>
            <CardTitle>Inscrições no Curso</CardTitle>
            </CardHeader>
            </Card>
              
           </div> 
          </div>





  )
}
