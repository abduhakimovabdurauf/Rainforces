// app/stores/services.ts

import { defineStore } from "pinia";

export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  categoryId: number;
}

export const useServicesStore = defineStore("services", {
  state: () => ({
    services: <Service[]>[
      {
        id: 1,
        categoryId: 1,
        name: "Building Restoration",
        description:
          "We provide complete building restoration services designed to bring aged, damaged, or neglected structures back to life while preserving their architectural integrity. Our team handles everything from structural reinforcement and façade renewal to interior reconstruction and protective finishing. Whether it's a residential home, commercial facility, or multi-story building, we assess the full scope of deterioration, identify hidden issues such as moisture intrusion or structural weakening, and apply modern restoration techniques to strengthen the foundation, walls, and overall framework. Our goal is to ensure long-term durability, improved safety, and enhanced appearance. We use high-grade materials, industry-compliant solutions, and skilled craftsmanship to achieve a complete transformation that extends the building's lifespan and value.",
        image: "/images/services/building.jpg",
      },
      {
        id: 2,
        categoryId: 1,
        name: "Concrete Work",
        description:
          "Our professional concrete services cover everything from foundation slabs and structural reinforcements to sidewalks, driveways, stairs, and decorative concrete installations. We provide expert-level solutions for cracks, surface damage, corrosion, and long-term wear by using high-strength mixes and advanced finishing techniques. Whether you need new concrete poured or existing surfaces repaired, we ensure proper leveling, compaction, reinforcement, curing, and long-lasting durability. Every project is handled with precision—from ground preparation and formwork to finishing details like smoothing, stamping, or sealing. Our concrete specialists work with both large-scale commercial projects and residential applications, ensuring structural integrity and aesthetic excellence that meet industry standards. The result is a safe, durable, and visually appealing surface built to withstand extreme conditions.",
        image: "/images/services/concreate.jpg",
      },
      {
        id: 3,
        categoryId: 1,
        name: "Foundation Services",
        description:
          "We provide complete foundation services, including structural repairs, leveling, waterproofing, drainage optimization, and soil stabilization. Foundations are the core of every building, and even small issues can lead to cracks, moisture intrusion, uneven flooring, or long-term structural risks. Our team conducts detailed inspections using modern diagnostic tools to identify root causes such as unstable soil, settlement, water pressure, or aging materials. We offer helical pile installation, underpinning, excavation, grading, and reinforcement solutions tailored to each property's needs. Additionally, our waterproofing systems protect basements and foundations from water damage, mold growth, and erosion. Every service is engineered to enhance building safety, stability, and long-term performance while preventing costly repairs in the future.",
        image: "/images/services/foundation.jpg",
      },
      {
        id: 4,
        categoryId: 1,
        name: "Exterior Finishing",
        description:
          "Our exterior finishing services are designed to protect buildings from environmental elements while enhancing appearance and functionality. We provide siding installation, façade repairs, professional painting, insulation upgrades, stucco application, and decorative trims. High-quality exterior finishing not only improves the visual appeal of your property but also increases energy efficiency, reduces maintenance costs, and extends structural longevity. We work with various materials—including vinyl, fiber cement, wood, brick, and metal—ensuring proper sealing, alignment, and weatherproofing. Every project is handled with careful attention to detail, from surface preparation to the final coat or installation. Whether you're renovating an old building or finishing a new construction, we deliver a polished, durable, and visually appealing exterior that withstands harsh climates.",
        image: "/images/services/exterior.jpg",
      },
      {
        id: 5,
        categoryId: 1,
        name: "Windows & Doors",
        description:
          "We offer high-quality window and door installation services that improve energy efficiency, comfort, and security for residential and commercial properties. Our team installs modern, insulated, and air-tight window systems that reduce heating and cooling costs while maximizing natural light. We also replace old or damaged doors with durable, secure, and stylish options suitable for various architectural styles. Whether you need sliding windows, casement windows, entry doors, patio doors, or custom designs, we ensure precise measurements, proper sealing, and long-lasting performance. Our installation process includes removing old frames, adjusting openings if necessary, insulating gaps, and performing final finishing for a flawless look. We prioritize durability, noise reduction, and weather resistance, ensuring your property stays protected and comfortable all year round.",
        image: "/images/services/windows.jpg",
      },
      {
        id: 6,
        categoryId: 1,
        name: "Roofing Services",
        description:
          "Our roofing services include complete installation, repairs, replacement, inspection, and maintenance for all types of roofs—shingle, metal, flat, tile, or membrane. A reliable roof protects your property from harsh weather, leaks, moisture intrusion, and structural damage. We use premium materials and modern techniques to ensure long-lasting performance and energy efficiency. Our experts inspect ventilation, insulation, drainage, and protective layers to identify issues before they become costly problems. Whether your roof has missing shingles, weakened structures, or needs a full replacement, we provide fast, safe, and professional solutions. We also offer waterproof coatings, flashing repairs, gutter installation, and storm-damage restoration. Every project is completed with precision, ensuring your home or building stays protected and secure for years.",
        image: "/images/services/roofing.jpg",
      },
      {
        id: 7,
        categoryId: 1,
        name: "Waterproofing",
        description:
          "Our waterproofing services safeguard your property from water intrusion, mold growth, structural deterioration, and basement flooding. We use advanced methods such as membrane installation, interior and exterior sealing, drainage systems, sump pumps, vapor barriers, and foundation coatings. Water infiltration can weaken concrete, cause corrosion, and create unhealthy living conditions. That's why we conduct a complete assessment of your building's weak points, including walls, basements, roofs, balconies, foundations, and crawlspaces. Every waterproofing solution is tailored to the building's design, climate conditions, and long-term needs. We focus on preventing future issues rather than applying temporary fixes. Our goal is to maintain a dry, safe, and protected environment, extending your property's lifespan while increasing its value.",
        image: "/images/services/waterproofing.jpg",
      },
      {
        id: 8,
        categoryId: 2,
        name: "Demolition & Excavation",
        description:
          "We offer safe and efficient demolition and excavation services for residential, commercial, and industrial projects. Our team handles everything from small interior removals and partial demolitions to complete building tear-downs. Safety is our top priority—we follow strict procedures, use professional equipment, and manage debris disposal in an eco-friendly manner. Our excavation services include site clearing, land leveling, trench digging, foundation preparation, and grading. We work with general contractors, builders, and property owners to prepare construction sites for new development. Whether you are planning renovations, expansions, or new construction, we ensure precise measurements, proper depth control, and stable ground preparation. Our operations are fast, reliable, and compliant with all safety regulations.",
        image: "/images/services/demolition.jpg",
      },
      {
        id: 9,
        categoryId: 2,
        name: "New Development, Design Build Projects",
        description:
          "We deliver complete building development and design services carefully tailored to match the specific requirements of every client. Our methods combine innovative ideas, precise engineering, and industry-standard practices to produce buildings that are practical, sustainable, and aesthetically impressive. From the earliest concept to the final approval stage, we oversee each step with professionalism and meticulous attention to detail. This ensures smooth project execution and outstanding results for both residential and commercial developments. In addition, we prioritize collaboration and transparent communication throughout every project. By working closely with clients, architects, and industry partners, we ensure that each design choice aligns with long-term goals, budget expectations, and modern construction standards.",
        image: "/images/development-design.jpg",
      },
    ],
  }),
  getters: {
    get: (state) => state.services,
    getById: (state) => {
      return (id: number) =>
        state.services.find((service) => service.id === id);
    },
    getByCategoryId: (state) => {
      return (categoryId: number) =>
        state.services.filter(
          (service) => service.categoryId === categoryId
        );
    }
  },
});
