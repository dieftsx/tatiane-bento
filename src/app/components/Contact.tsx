
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="my-12 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Entre em Contato</h2>
      <p className="mb-4">Tem alguma dúvida? Fale conosco pelo WhatsApp!</p>
      <Button className="bg-green-500 hover:bg-green-600">
        <a href="https://wa.me/5569993179684" target="_blank" rel="noopener noreferrer">
          Contato via WhatsApp
        </a>
      </Button>
    </section>
  )
}

