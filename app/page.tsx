import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function IndexPage() {
  return (
    <div className="mx-auto mt-8 max-w-xl">
      <Card className="p-4">
        <h1 className="text-lg">Hello World</h1>
      </Card>
    </div>
  )
}
