import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceCard from "@/components/dashboard/resource-card";
import ResourceDetail from "@/components/dashboard/resource-detail";
import ResourceDetailsContainer from "@/components/dashboard/resource-details-container";
import type { ResourceType } from "@/types";
import { Button } from "@/components/ui/button";
import { useUserData } from "@/hooks/useUserData";
import { useAllResources } from "@/hooks/useAllResources";
import { useSavedResources } from "@/hooks/useSavedResources";

export default function MyMaterialsPage() {
  const [selectedResource, setSelectedResource] = useState<ResourceType | null>(
    null
  );
  const { data: savedResources = [], isLoading: savedLoading } =
    useSavedResources();
  const { data: user } = useUserData();
  const { resources, isLoading } = useAllResources();

  const borrowed = resources.filter(
    (r) =>
      r.type === "Hardcover" && r.borrowers?.some((b) => b.id === user?.uid)
  );

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
          {isLoading ? (
            <p>Loading...</p>
          ) : borrowed.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {borrowed.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onClick={() => {
                    const enriched: ResourceType = {
                      ...resource,
                    };
                    setSelectedResource(enriched);
                  }}
                />
              ))}
            </div>
          ) : (
            <p>No borrowed materials.</p>
          )}
        </TabsContent>

        <TabsContent value="saved">
          <h2 className="text-lg font-semibold mb-4">Softcopy Materials</h2>
          {savedLoading ? (
            <p>Loading saved resources...</p>
          ) : savedResources.length === 0 ? (
            <p>No saved materials found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {savedResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onClick={() => {
                    const enriched: ResourceType = {
                      ...resource,
                    };
                    setSelectedResource(enriched);
                  }}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
