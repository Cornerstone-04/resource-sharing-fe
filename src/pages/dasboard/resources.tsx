import { useState } from "react";
import { Filter, Search, ChevronLeft, ChevronRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { allResources } from "@/data/mock-data";
import ResourceCard from "@/components/dashboard/resource-card";
import ResourceDetail from "@/components/dashboard/resource-detail";
import ResourceDetailsContainer from "@/components/dashboard/resource-details-container";
import type { ResourceType } from "@/types";
import { FaPlus } from "react-icons/fa6";
import { useAppNavigate } from "@/hooks/navigation";

const departments = ["CSC", "TCS", "MAC", "IFT", "IS"];
const levels = ["100", "200", "300", "400"];
const formats = ["PDF", "DOCX", "Hardcopy", "PNG", "JPG"];
const types = ["Softcopy", "Hardcover"];

const PAGE_SIZE = 8;

export default function ResourcesPage() {
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

  const filtered = allResources.filter((r) => {
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
          <ResourceDetail resource={selectedResource} />
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
        <select
          className="p-2 rounded-md border"
          value={filters.department}
          onChange={(e) => handleFilterChange("department", e.target.value)}
        >
          <option value="">Department</option>
          {departments.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <select
          className="p-2 rounded-md border"
          value={filters.level}
          onChange={(e) => handleFilterChange("level", e.target.value)}
        >
          <option value="">Level</option>
          {levels.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>

        <select
          className="p-2 rounded-md border"
          value={filters.format}
          onChange={(e) => handleFilterChange("format", e.target.value)}
        >
          <option value="">Format</option>
          {formats.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>

        <select
          className="p-2 rounded-md border"
          value={filters.type}
          onChange={(e) => handleFilterChange("type", e.target.value)}
        >
          <option value="">Type</option>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginated.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onClick={() => {
              const enriched: ResourceType = {
                ...resource,
                description: "Default description",
                owner: "Unknown",
                format: "PDF",
                location: "Library A",
                type: "Softcopy",
                level: "400",
                department: "CSC",
                borrowers: [
                  { name: "User A", avatar: "/placeholder.svg" },
                  { name: "User B", avatar: "/placeholder.svg" },
                ],
              };
              setSelectedResource(enriched);
            }}
          />
        ))}
      </div>
    </div>
  );
}
