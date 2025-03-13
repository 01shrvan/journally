import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

export default function CollectionLoading() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-1">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-5 w-full" />
      </div>

      <div className="flex-1 h-10 px-3 rounded-md border border-input bg-background flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground opacity-30" />
        <Skeleton className="h-4 w-full" />
      </div>

      <Skeleton className="h-5 w-32" />

      <div className="space-y-4">
        {[1, 2, 3].map((index) => (
          <Card key={index} className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-8 w-48" />
                </div>
                <Skeleton className="h-4 w-32" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <div className="flex gap-2">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
