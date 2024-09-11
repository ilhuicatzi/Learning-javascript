import BoxQuestion from '../components/questions/BoxQuestion'
import { JSQuestions } from '@/utils/JSQuestions'


function TheoryQuestions() {
  return (
    <main className="grid space-y-16 sm:px-20 px-3 w-full max-w-4xl">
         <article className="mt-5">
          <h1 className="text-2xl sm:text-4xl font-semibold">Preguntas Teóricas de <span className="text-yellow-500">JavaScript</span> </h1>
        </article>
        <section className="space-y-7">
        {JSQuestions.map((question) => (
          <BoxQuestion key={question.id}>
            <h3 className="text-lg font-semibold">{question.id} {question.question}</h3>
            <p className="text-muted-foreground">{question.answer}</p>
          </BoxQuestion>
        ))}
      </section>
    </main>

  )
}

export default TheoryQuestions