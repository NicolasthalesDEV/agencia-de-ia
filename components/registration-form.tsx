"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    whatsapp: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      whatsapp: "",
    }

    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email é inválido"
      isValid = false
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Número de WhatsApp é obrigatório"
      isValid = false
    } else if (!/^\d+$/.test(formData.whatsapp.replace(/\D/g, ""))) {
      newErrors.whatsapp = "Número de WhatsApp deve conter apenas dígitos"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setIsError(false)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      setIsSuccess(true)
      setFormData({ name: "", email: "", whatsapp: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="registration" className="py-20 px-4 bg-gradient-to-b from-purple-900 to-black relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzNFRkYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptLTE3IDM0YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTE3IDE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6TTE5IDM0YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTE3IDE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6TTIgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptLTE3IDM0YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTE3IDE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-700 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>

          <span className="bg-purple-900 text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block shadow-md border border-purple-700">
            <span className="animate-pulse inline-block w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
            Oferta por Tempo Limitada
          </span>

          <h2 className="text-3xl font-extrabold text-white mb-3 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Inscreva-se agora para acesso imediato
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Junte-se às nossas aulas exclusivas de Agência de IA e transforme o futuro do seu negócio
          </p>

          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-purple-700 rounded-lg opacity-30 rotate-12"></div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 border-2 border-purple-500 rounded-lg opacity-30 -rotate-12"></div>

          <Card className="max-w-md mx-auto shadow-xl bg-gray-900 backdrop-blur-sm border border-purple-900 text-white">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="text-white">Registre-se para Acesso Gratuito</CardTitle>
              <CardDescription className="text-gray-400">
                Preencha seus dados para começar com nossas aulas gratuitas de Agência de IA
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {isSuccess && (
                <Alert className="mb-4 bg-green-900 border-green-700 text-green-200">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <AlertDescription className="text-green-200">
                    Registro bem-sucedido! Verifique seu email para detalhes de acesso.
                  </AlertDescription>
                </Alert>
              )}

              {isError && (
                <Alert className="mb-4 bg-red-900 border-red-700 text-red-200">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                  <AlertDescription className="text-red-200">
                    Algo deu errado. Por favor, tente novamente.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">
                    Nome*
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="João Silva"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-gray-800 border-gray-700 text-white ${errors.name ? "border-red-500" : "focus:border-purple-500"}`}
                  />
                  {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email*
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="exemplo@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-gray-800 border-gray-700 text-white ${errors.email ? "border-red-500" : "focus:border-purple-500"}`}
                  />
                  {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-gray-300">
                    WhatsApp com código de área*
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="1234567890"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={`bg-gray-800 border-gray-700 text-white ${errors.whatsapp ? "border-red-500" : "focus:border-purple-500"}`}
                  />
                  {errors.whatsapp && <p className="text-red-400 text-sm">{errors.whatsapp}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Inscreva-se para Acesso Gratuito"}
                </Button>

                <p className="text-xs text-gray-400 mt-4">
                  ◉ Ao se inscrever, você concorda com nossos{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300 hover:underline">
                    Termos de Uso
                  </a>{" "}
                  e{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300 hover:underline">
                    Política de Privacidade
                  </a>
                  .
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
