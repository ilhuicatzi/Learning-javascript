import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <main className="grid space-y-16 px-4 sm:px-20 w-full max-w-4xl">
       <article className="mt-5">
        <h1 className="text-2xl sm:text-4xl font-semibold">Guía de Técnica de <span className="text-yellow-500">JavaScript</span> </h1>
      </article>
      <article className="grid md:grid-cols-2 gap-9">
      <Link to="/theory-questions">
        <Card className="hover:bg-muted">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Preguntas Teóricas</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Preguntas teóricas de JavaScript para prepararte para una entrevista de trabajo.
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link to="/code-questions">
        <Card className="hover:bg-muted">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Preguntas de Código</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Preguntas de código de JavaScript para prepararte para una entrevista de trabajo.
            </p>
          </CardContent>
        </Card>
      </Link>
      </article>
    </main>
  )
}

export default HomePage