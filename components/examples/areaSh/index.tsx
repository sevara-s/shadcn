import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowUp } from "lucide-react"

export function AreaSh() {
  return (
    <Card className="w-[240px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Total Revenue
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$15,231.89</div>
        <p className="text-xs text-muted-foreground flex items-center mt-1">
          <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
          <span className="text-green-500">+20.1%</span> from last month
        </p>
      </CardContent>
    </Card>
  )
}