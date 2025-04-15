"use client"

import { X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-purple-900 text-white py-3 px-4 relative">
      <div className="container mx-auto max-w-5xl flex items-center justify-center md:justify-between">
        <p className="font-bold text-center md:text-left flex-grow">
          Não Perca! Garanta Seu Acesso Gratuito às Nossas Aulas de Agência de IA Agora!
        </p>

        <div className="flex items-center gap-4">
          <Button
            size="sm"
            onClick={() => {
              const element = document.getElementById("registration")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-white text-purple-900 hover:bg-purple-50 whitespace-nowrap hidden md:inline-flex"
          >
            Inscreva-se Já!
          </Button>

          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-purple-200 transition-colors"
            aria-label="Fechar banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
