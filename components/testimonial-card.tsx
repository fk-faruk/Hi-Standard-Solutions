"use client"
import { Quote } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

export function TestimonialCard({ quote, author, role, company, image }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-xl h-full bg-white dark:bg-gray-800">
      <CardContent className="p-8 md:p-12">
        <div className="mb-6">
          <Quote className="h-10 w-10 text-blue-500 dark:text-blue-400 opacity-50" />
        </div>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">{quote}</p>
        <div className="flex items-center">
          {image && (
            <div className="mr-4">
              <Image
                src={image || "/placeholder.svg"}
                alt={author}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">{author}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {role}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
