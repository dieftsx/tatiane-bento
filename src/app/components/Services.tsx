import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Services() {
  const services = [
    { title: "Avaliação Neuropsicológica", description: "Avaliação completa das funções cognitivas." },
    { title: "Reabilitação Cognitiva", description: "Programas personalizados para melhorar habilidades cognitivas." },
    { title: "Terapia Neuropsicológica", description: "Tratamento para distúrbios neurológicos e psiquiátricos." },
  ]

  return (
    <section id="services" className="my-12">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


