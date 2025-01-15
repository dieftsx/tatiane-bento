import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const Services = () => {
 const services = [
   {
     title: "Avaliação Neuropsicológica",
     description: "Processo que avalia as funções cognitivas, comportamentais e emocionais através de testes padronizados, fornecendo um perfil detalhado do funcionamento cerebral."
   },
   {
     title: "Reabilitação Neuropsicológica", 
     description: "Intervenção personalizada para recuperar ou compensar funções cognitivas afetadas por lesões ou condições neurológicas, visando maior independência e qualidade de vida."
   },
   {
     title: "Neurofeedback",
     description: "Técnica inovadora que utiliza o monitoramento da atividade cerebral em tempo real para ajudar no tratamento de diversos transtornos neurológicos e psicológicos."
   },
   {
     title: "Cursos e Capacitação",
     description: "Programas educacionais especializados para profissionais e interessados em neuropsicologia, oferecendo conhecimento teórico e prático atualizado."
   }
 ]

 return (
   <section id="services" className="my-12">
     <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Serviços</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       {services.map((service, index) => (
         <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
           <CardHeader>
             <CardTitle className="text-xl text-amber-600">{service.title}</CardTitle>
           </CardHeader>
           <CardContent>
             <p className="text-gray-600">{service.description}</p>
           </CardContent>
         </Card>
       ))}
     </div>
   </section>
 )
}

export default Services;
