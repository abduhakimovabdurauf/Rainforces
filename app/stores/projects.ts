import { defineStore } from "pinia";

export interface Project {
  id: number;
  service_id: number;
  title: string;
  images: string[];
}

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: <Project[]>[
      {
        id: 1,
        service_id: 1,
        title: "Building Restoration Project",
        images: [
          "/images/projects/building_restoration/1.jpg",
          "/images/projects/building_restoration/2.jpg",
          "/images/projects/building_restoration/3.jpg",
          "/images/projects/building_restoration/4.jpg",
          "/images/projects/building_restoration/5.jpg",
          "/images/projects/building_restoration/6.jpg",
          "/images/projects/building_restoration/7.jpg",
          "/images/projects/building_restoration/8.jpg",
        ],
      },
      {
        id: 2,
        service_id: 2,
        title: "Concrete Work Project",
        images: [
          "/images/projects/concreate_work/1.jpg",
          "/images/projects/concreate_work/2.jpg",
          "/images/projects/concreate_work/3.jpg",
          "/images/projects/concreate_work/4.jpg",
          "/images/projects/concreate_work/5.jpg",
          "/images/projects/concreate_work/6.jpg",
          "/images/projects/concreate_work/7.jpg",
          "/images/projects/concreate_work/8.jpg",
        ],
      },
      {
        id: 3,
        service_id: 3,
        title: "Foundation Services Project",
        images: [
          "/images/projects/foundation_services/1.jpg",
          "/images/projects/foundation_services/2.jpg",
          "/images/projects/foundation_services/3.jpg",
          "/images/projects/foundation_services/4.jpg",
          "/images/projects/foundation_services/5.jpg",
          "/images/projects/foundation_services/6.jpg",
          "/images/projects/foundation_services/7.jpg",
          "/images/projects/foundation_services/8.jpg",
        ],
      },
      {
        id: 4,
        service_id: 4,
        title: "Exterior Finishing Project",
        images: [
          "/images/projects/exterior_finishing/1.jpg",
          "/images/projects/exterior_finishing/2.jpg",
          "/images/projects/exterior_finishing/3.jpg",
          "/images/projects/exterior_finishing/4.jpg",
          "/images/projects/exterior_finishing/5.jpg",
          "/images/projects/exterior_finishing/6.jpg",
          "/images/projects/exterior_finishing/7.jpg",
          "/images/projects/exterior_finishing/8.jpg",
          "/images/projects/exterior_finishing/9.jpg",
        ],
      },
      {
        id: 5,
        service_id: 5,
        title: "Windows & Doors Project",

        images: [
          "/images/projects/windows_doors/1.jpg",
          "/images/projects/windows_doors/2.jpg",
          "/images/projects/windows_doors/3.jpeg",
          "/images/projects/windows_doors/4.jpeg",
          "/images/projects/windows_doors/5.jpeg",
          "/images/projects/windows_doors/6.jpeg",
          "/images/projects/windows_doors/7.jpeg",
          "/images/projects/windows_doors/8.jpeg",
        ],
      },
      {
        id: 6,
        service_id: 6,
        title: "Roofing Services Project",
        images: [
          "/images/projects/roofing-services/1.jpg",
          "/images/projects/roofing-services/2.jpg",
          "/images/projects/roofing-services/3.jpg",
          "/images/projects/roofing-services/4.jpg",
          "/images/projects/roofing-services/5.jpg",
          "/images/projects/roofing-services/6.jpg",
          "/images/projects/roofing-services/7.jpg",
          "/images/projects/roofing-services/8.jpg",
        ],
      },
      {
        id: 7,
        service_id: 7,
        title: "Waterproofing Project",
        images: [
          "/images/projects/waterproofing/1.jpg",
          "/images/projects/waterproofing/2.jpg",
          "/images/projects/waterproofing/3.jpg",
          "/images/projects/waterproofing/4.jpg",
          "/images/projects/waterproofing/5.jpg",
          "/images/projects/waterproofing/6.jpg",
          "/images/projects/waterproofing/7.jpg",
          "/images/projects/waterproofing/8.jpg",
        ],
      },
      {
        id: 8,
        service_id: 8,
        title: "Demolition & Excavation Project",
        images: [
          "/images/projects/demolition_excavation/1.jpg",
          "/images/projects/demolition_excavation/2.jpg",
          "/images/projects/demolition_excavation/3.jpg",
          "/images/projects/demolition_excavation/4.jpg",
          "/images/projects/demolition_excavation/5.jpg",
          "/images/projects/demolition_excavation/6.jpg",
          "/images/projects/demolition_excavation/7.jpg",
          "/images/projects/demolition_excavation/8.jpg",
          "/images/projects/demolition_excavation/9.jpg",
        ],
      },
      {
        id: 9,
        service_id: 9,
        title: "Tashkent",
        images: [
          "/images/projects/tashkent/1.jpg",
          "/images/projects/tashkent/2.jpg",
          "/images/projects/tashkent/3.jpg",
          "/images/projects/tashkent/4.jpg",
          "/images/projects/tashkent/5.jpg",
          "/images/projects/tashkent/6.jpg",
          "/images/projects/tashkent/7.jpg",
          "/images/projects/tashkent/8.jpg",
          "/images/projects/tashkent/9.jpg",
        ],
      },
      {
        id: 10,
        service_id: 10,
        title: "Bukhara",
        images: [
          "/images/projects/bukhara/1.jpg",
          "/images/projects/bukhara/2.jpg",
          "/images/projects/bukhara/3.jpg",
          "/images/projects/bukhara/4.jpg",
          "/images/projects/bukhara/5.jpg",
          "/images/projects/bukhara/6.jpg",
          "/images/projects/bukhara/7.jpg",
        ],
      },
    ],
  }),
  getters: {
    get: (state) => state.projects,
    getByServiceId: (state) => {
      return (service_id: number) =>
        state.projects.filter((project) => project.service_id === service_id);
    },
  },
});
