import Image from "next/image"
import { Award, BookOpen, Users, ExternalLink } from "lucide-react"

export function Founder() {
  return (
    <section className="py-16 px-4 bg-black relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzNFRkYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptLTE3IDM0YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTE3IDE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6TTE5IDM0YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTE3IDE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6TTIgMzRjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMTcgMTdjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0wLTE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptLTE3IDM0YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6bTE3IDE3YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptMC0xN2MwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Quem é Alan Nicolas?</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-purple-700 shadow-lg shadow-purple-900/30">
              <Image src="/images/alan-nicolas.png" alt="Alan Nicolas" fill className="object-cover" />
            </div>

            <div className="mt-4 text-center">
              <a
                href="https://instagram.com/oalanicolas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300"
              >
                @oalanicolas
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:w-2/3 space-y-6 mt-8 md:mt-0">
            <div className="flex items-start gap-4">
              <div className="bg-purple-900 p-2 rounded-full">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Fundador da Academia Lendár[IA]</h3>
                <p className="text-gray-300">
                  Criou uma das principais plataformas de educação e implementação de IA para negócios.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-900 p-2 rounded-full">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Empreendedor e Referência em IA</h3>
                <p className="text-gray-300">
                  Especialista reconhecido na aplicação de inteligência artificial para resolver desafios reais de
                  negócios e criar novas oportunidades.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-900 p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Educador Prático de IA</h3>
                <p className="text-gray-300">
                  Ensina IA de forma acessível, focando em aplicações práticas que geram resultados reais para empresas
                  de todos os tamanhos.
                </p>
              </div>
            </div>

            <p className="font-bold text-purple-400 text-lg">
              Junte-se a milhares de empreendedores que transformaram seus negócios com as estratégias de IA do Alan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
