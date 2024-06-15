"use client"
import { useSearchParams } from "next/navigation";
export default function ResultPage() {

  const searchParams = useSearchParams();
  const first = searchParams.get("op1");
  const second = searchParams.get("op2");
  
  const result =  parseInt(first) + parseInt(second)

  const message = 'And the result is.... ' + result

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>{message}</div>
</main>
  )}