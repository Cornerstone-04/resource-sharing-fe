import { useState } from "react";
import { MdWavingHand } from "react-icons/md";
import {
  BookOpenCheck,
  BookCopy,
  FileText,
  Upload,
  Search,
  Filter,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StatCard from "@/components/dashboard/stat-card";
import ResourceCard from "@/components/dashboard/resource-card";
import MyResourcesTable from "@/components/dashboard/my-resources-table";
import ResourceDetail from "@/components/dashboard/resource-detail";
import ResourceDetailsContainer from "@/components/dashboard/resource-details-container";
import { useAppNavigate } from "@/hooks/navigation";
import { useUserData } from "@/hooks/useUserData";
import { useDashboardStats } from "@/hooks/useDashboardStats";

import type { ResourceType } from "@/types";

import { FaPlus } from "react-icons/fa6";
import { useAllResources } from "@/hooks/useAllResources";

export default function DashboardHome() {
  const { uploaded, borrowed, saved } = useDashboardStats();
  const { goToUploadResource, goToResources } = useAppNavigate();
  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = useUserData();
  const { resources: allResources, isLoading: loadingResources } =
    useAllResources();

  const [selectedResource, setSelectedResource] = useState<ResourceType | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");

  if (userLoading || loadingResources) return <p>Loading...</p>;
  if (userError) return <p>Error: {(userError as Error).message}</p>;

  const filteredResources = allResources.filter(
    (r) =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.courseCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 relative">
      {/* Detail Modal */}
      {selectedResource && (
        <ResourceDetailsContainer>
          <Button
            onClick={() => setSelectedResource(null)}
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4"
          >
            <X className="w-5 h-5" />
          </Button>
          <ResourceDetail
            resource={selectedResource}
            allResources={allResources}
          />
        </ResourceDetailsContainer>
      )}

      {/* Welcome Section */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold flex gap-2 items-center">
          Welcome {userData?.firstName || "Student"}!
          <MdWavingHand className="text-kw-primary" />
        </h1>
        <p className="text-muted-foreground">
          Here’s a quick overview of your resource activity.
        </p>
      </div>

      {/* Action Button */}
      <div className="flex flex-wrap gap-4 mt-6">
        <Button
          size="lg"
          className="bg-kw-primary text-white dark:text-white dark:bg-kw-primary"
          onClick={goToUploadResource}
        >
          <FaPlus /> Upload a Resource
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<BookOpenCheck className="w-5 h-5" />}
          label="Uploaded"
          value={uploaded}
        />
        <StatCard
          icon={<BookCopy className="w-5 h-5" />}
          label="Borrowed"
          value={borrowed}
        />
        <StatCard
          icon={<FileText className="w-5 h-5" />}
          label="Saved"
          value={saved}
        />
        <StatCard
          icon={<Upload className="w-5 h-5" />}
          label="Pending Approvals"
          value={0}
        />
      </div>

      {/* Search Input */}
      <div className="relative mt-10">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          placeholder="Search resources, items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-12 py-3 bg-gray-100 border-0 rounded-full text-base"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <Filter className="h-5 w-5" />
        </Button>
      </div>

      {/* Resources Grid */}
      <div className="mt-8 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Resources</h2>
          <Button
            size="lg"
            variant="outline"
            className="border-kw-primary dark:border-white text-kw-primary dark:text-white"
            onClick={goToResources}
          >
            Browse All Resources
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredResources.slice(0, 4).map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onClick={() => setSelectedResource(resource)}
            />
          ))}
        </div>
      </div>

      {/* My Resources Table */}
      <div className="mt-10 space-y-4">
        <h2 className="text-lg font-semibold">My Resources</h2>
        <MyResourcesTable
          data={allResources.filter((r) => r.owner === userData?.email)}
        />
      </div>
    </div>
  );
}
