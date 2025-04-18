"use client"

import { ArrowUp } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function BarSh() {
  return (
    <Card className="w-[240px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Subscriptions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+2350</div>
        <p className="text-xs text-muted-foreground flex items-center mt-1">
          <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
          <span className="text-green-500">+180.1%</span> from last month
        </p>
      </CardContent>
    </Card>
  )
}