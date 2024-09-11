import CodeJs from "@/components/code/CodeJS";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { codeQuestions } from "@/utils/codeQuestions";

function CodeQuestions() {
  return (
    <main className="flex flex-col space-y-16 md:px-20 px-3 ">
      <article className="mt-5">
        <h1 className="text-2xl sm:text-4xl font-semibold">
          Estudiando Código de{" "}
          <span className="text-yellow-500">JavaScript</span>{" "}
        </h1>
      </article>
      <section className="space-y-4 grid  w-full max-w-60 min-[350px]:max-w-72 min-[450px]:max-w-96 sm:max-w-lg  md:max-w-xl  lg:max-w-2xl">
        {codeQuestions.map((question) => (
          <Card key={question.id} className="hover:bg-muted">
            <CardHeader className="py-4">
              <CardTitle>Pregunta {question.id}</CardTitle>
              <CardDescription>{question.question}</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeJs code={question.code} />
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <p> {question.answer} </p>
              <p className="text-muted-foreground text-sm">
                {" "}
                {question.comment}{" "}
              </p>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}

export default CodeQuestions;
