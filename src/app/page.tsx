import BgSvg from "@/assets/bg.svg";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-y-4 flex-col">
        <h1 className="text-3xl">Welcome to QuizWhiz</h1>
        <p className="text-gray-400">
          Test your knowledge and learn something new with engaging quizzes on
          various topics.
        </p>
        <Image src={BgSvg} alt="" className="h-72 object-contain" />

        <Link href="/quiz">
          <Button label="Start Quiz" />
        </Link>
      </div>
    </div>
  );
}
