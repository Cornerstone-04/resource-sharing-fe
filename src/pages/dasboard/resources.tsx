import { useState } from "react";
import { Filter, Search, ChevronLeft, ChevronRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFilteredResources } from "@/hooks/useFilteredResources";
import ResourceCard from "@/components/dashboard/resource-card";
import ResourceDetail from "@/components/dashboard/resource-detail";
import ResourceDetailsContainer from "@/components/dashboard/resource-details-container";
import type { ResourceType } from "@/types";
import { FaPlus } from "react-icons/fa6";
import { useAppNavigate } from "@/hooks/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const departments = ["CSC", "TCS", "MAC", "IFT", "IS"];
const levels = ["100", "200", "300", "400"];
const formats = ["PDF", "DOCX", "Hardcopy", "PNG", "JPG"];
const types = ["Softcopy", "Hardcover"];

const PAGE_SIZE = 8;

export default function ResourcesPage() {
  const { data = [], isLoading } = useFilteredResources();
  const { goToUploadResource } = useAppNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResource, setSelectedResource] = useState<ResourceType | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    department: "",
    level: "",
    format: "",
    type: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const filtered = data.filter((r) => {
    const matchesQuery =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.courseCode.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment =
      !filters.department || r.department === filters.department;
    const matchesLevel = !filters.level || r.level === filters.level;
    const matchesFormat = !filters.format || r.format === filters.format;
    const matchesType = !filters.type || r.type === filters.type;

    return (
      matchesQuery &&
      matchesDepartment &&
      matchesLevel &&
      matchesFormat &&
      matchesType
    );
  });

  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  if (isLoading) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        Loading resources...
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1>No resources found.</h1>

        <Button
          className="whitespace-nowrap bg-kw-primary text-white"
          onClick={goToUploadResource}
        >
          <FaPlus /> Upload Resource
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Modal */}
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
          <ResourceDetail resource={selectedResource} allResources={data} />
        </ResourceDetailsContainer>
      )}

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search resources..."
            className="pl-10 pr-12 py-3 bg-gray-100 border-0 rounded-full text-base"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <Button
          className="whitespace-nowrap bg-kw-primary text-white"
          onClick={goToUploadResource}
        >
          <FaPlus /> Upload Resource
        </Button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Select
          value={filters.department}
          onValueChange={(value) => handleFilterChange("department", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            {departments.map((d) => (
              <SelectItem key={d} value={d}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.level}
          onValueChange={(value) => handleFilterChange("level", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            {levels.map((l) => (
              <SelectItem key={l} value={l}>
                {l}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.format}
          onValueChange={(value) => handleFilterChange("format", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Format" />
          </SelectTrigger>
          <SelectContent>
            {formats.map((f) => (
              <SelectItem key={f} value={f}>
                {f}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.type}
          onValueChange={(value) => handleFilterChange("type", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            {types.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Pagination */}
      <div className="flex justify-start items-center gap-4 mt-6">
        <Button
          size="sm"
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          size="sm"
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginated.map((resource) => (
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
    </div>
  );
}
