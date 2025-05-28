import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceCard from "@/components/dashboard/resource-card";
import ResourceDetail from "@/components/dashboard/resource-detail";
import ResourceDetailsContainer from "@/components/dashboard/resource-details-container";
import type { ResourceType } from "@/types";
import { myResources } from "@/data/mock-data";
import { Button } from "@/components/ui/button";

export default function MyMaterialsPage() {
  const [selectedResource, setSelectedResource] = useState<ResourceType | null>(
    null
  );

  const borrowed = myResources.filter((r) => r.type === "Hardcover");
  const saved = myResources.filter((r) => r.type === "Softcopy");

  return (
    <div className="p-6 space-y-6">
      {selectedResource && (
        <ResourceDetailsContainer>
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4"
            onClick={() => setSelectedResource(null)}
          >
            ✕
          </Button>
          <ResourceDetail resource={selectedResource} />
        </ResourceDetailsContainer>
      )}
      <h1 className="text-2xl font-bold">My Materials</h1>

      <Tabs defaultValue="borrowed" className="w-full">
        <TabsList className="w-full justify-start gap-4">
          <TabsTrigger value="borrowed">Borrowed</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="borrowed">
          <h2 className="text-lg font-semibold mb-4">Hardcover Materials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {borrowed.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onClick={() => setSelectedResource(resource)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <h2 className="text-lg font-semibold mb-4">Softcopy Materials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {saved.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onClick={() => setSelectedResource(resource)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
