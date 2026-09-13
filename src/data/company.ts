export interface LocationItem {
  number: string;
  city: string;
  phone: string;
  rawPhone: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  image: string;
  features: string[];
  transitModes: ('Road' | 'Rail' | 'Air')[];
}

export const COMPANY_INFO = {
  name: "SUPER PARCEL LOGISTICS",
  shortName: "SUPER PARCEL LOGISTICS",
  tagline: "Moving Cargo. Keeping Business in Motion.",
  subTagline: "Commercial Freight & Multimodal Transportation Logistics",
  phone: "+91 8217696321",
  rawPhone: "+918217696321",
  whatsappNumber: "918217696321",
  address: {
    building: "Seema Manzil, 26/4",
    street: "3rd Main Rd, 4N Block",
    area: "Ramchandrapuram, Srirampura",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560021",
    full: "Seema Manzil, 26/4, 3rd Main Rd, 4N Block, Ramchandrapuram, Srirampura, Ramachandrapuram, Bengaluru, Karnataka 560021"
  },
  operatingHours: "Monday – Saturday: 09:00 AM – 08:30 PM",
  googleMapsDirectUrl: "https://maps.google.com/?q=Seema+Manzil,+26/4,+3rd+Main+Rd,+4N+Block,+Ramchandrapuram,+Srirampura,+Bengaluru,+Karnataka+560021"
};

// STRICT 6 VERIFIED LOCATIONS (Nothing else)
export const LOCATIONS: LocationItem[] = [
  { number: "01", city: "Bengaluru", phone: "+91 8217696321", rawPhone: "+918217696321" },
  { number: "02", city: "Mumbai",    phone: "+91 7022374036", rawPhone: "+917022374036" },
  { number: "03", city: "Kolkata",   phone: "+91 8217696321", rawPhone: "+918217696321" },
  { number: "04", city: "Pune",      phone: "+91 8217696321", rawPhone: "+918217696321" },
  { number: "05", city: "Jaipur",    phone: "+91 8058304045", rawPhone: "+918058304045" },
  { number: "06", city: "Delhi",     phone: "+91 9187708758", rawPhone: "+919187708758" },
];

// Backward compatibility alias
export const BRANCHES = LOCATIONS;

// OFFICIAL HIGH-RESOLUTION ASSETS (Locally cached from approved Pexels sources)
export const LOGISTICS_IMAGES = {
  // Home
  heroTruck: "/images/logistics/h01_hero_truck.jpg",            // H01 — Hero road freight / truck
  cargoForklift: "/images/logistics/h02_cargo_forklift.jpg",    // H02 — Cargo operations / forklift
  roadFreight: "/images/logistics/h03_road_trucks.jpg",         // H03 — Road freight / trucks on highway
  railFreight: "/images/logistics/h04_rail_freight.jpg",        // H04 — Rail freight / container train
  airFreight: "/images/logistics/h05_air_freight.jpg",          // H05 — Air freight / cargo plane loading
  logisticsCenter: "/images/logistics/h06_logistics_center.jpg",// H06 — Logistics center ecosystem
  
  // Services
  serviceRoad: "/images/logistics/s01_road_transport.jpg",      // S01 — Road transport
  serviceRail: "/images/logistics/s02_rail_transport.jpg",      // S02 — Rail transport
  serviceAir: "/images/logistics/s03_air_cargo.jpg",            // S03 — Air cargo
  serviceHandling: "/images/logistics/s04_cargo_handling.jpg",  // S04 — Cargo handling / warehouse
  servicePickup: "/images/logistics/s05_pickup_collection.jpg", // S05 — Pickup / collection
  serviceDelivery: "/images/logistics/s06_delivery_dock.jpg",   // S06 — Delivery / dispatch dock
  
  // About
  aboutMain: "/images/logistics/a01_about_center.jpg",          // A01 — Main about logistics center
  aboutOperations: "/images/logistics/a02_about_operations.jpg",// A02 — Warehouse forklift pathway
  aboutNetwork: "/images/logistics/a03_about_parking.jpg",      // A03 — Logistics truck facility
  
  // Enquiry
  enquiryYard: "/images/logistics/e01_enquiry_truck.jpg",       // E01 — Truck on industrial yard
  enquiryDock: "/images/logistics/e02_loading_dock_sun.jpg",    // E02 — Industrial loading dock in sunlight
};

export const SERVICES: ServiceItem[] = [
  {
    id: "road-freight",
    number: "01",
    title: "Road Freight",
    badge: "Surface Transportation",
    shortDesc: "Commercial container trucks and heavy linehaul vehicles moving commercial consignments.",
    fullDesc: "Scheduled surface freight linking primary industrial manufacturing centers with regional commercial gateways. We operate containerized trucks, closed-body trailers, and open vehicles tailored for Full Truckload (FTL) and Less than Truckload (LTL) cargo.",
    image: LOGISTICS_IMAGES.serviceRoad,
    features: [
      "Full Truckload (FTL) and Less than Truckload (LTL)",
      "Containerized trailers and heavy surface freight vehicles",
      "Regular scheduled trunk departures between key hubs",
      "Rigorous cargo securing and weather-tight protection"
    ],
    transitModes: ["Road"]
  },
  {
    id: "rail-freight",
    number: "02",
    title: "Rail Freight",
    badge: "Intermodal Container Movement",
    shortDesc: "High-capacity containerized rail transport for bulk commercial goods and heavy freight.",
    fullDesc: "Intermodal container train movements providing reliable, high-volume cargo transit. Rail freight serves as a primary mode for heavy industrial shipments, bulk merchant commodities, and long-distance cargo requiring predictable transit cycles.",
    image: LOGISTICS_IMAGES.serviceRail,
    features: [
      "High-capacity intermodal container transport",
      "Cost-efficient transit for bulk and heavy consignments",
      "Direct terminal-to-terminal railway coordination",
      "Minimized highway congestion and consistent transit timing"
    ],
    transitModes: ["Rail"]
  },
  {
    id: "air-cargo",
    number: "03",
    title: "Air Cargo",
    badge: "Time-Critical Transit",
    shortDesc: "Priority domestic air freight connecting commercial hubs for time-sensitive cargo.",
    fullDesc: "Dedicated airport freight handling for urgent commercial stock, high-value components, and time-critical inventory. Cargo is staged at airport freight terminals with accelerated customs and flight manifest clearance.",
    image: LOGISTICS_IMAGES.serviceAir,
    features: [
      "Priority flight booking on major domestic cargo routes",
      "Airport tarmac and air terminal cargo coordination",
      "Rapid turnaround for time-sensitive industrial consignments",
      "Immediate consignment notification upon arrival"
    ],
    transitModes: ["Air"]
  },
  {
    id: "cargo-handling",
    number: "04",
    title: "Cargo Handling",
    badge: "Warehouse Staging",
    shortDesc: "Disciplined warehouse operations, palletized storage, and careful cargo handling.",
    fullDesc: "Professional cargo management within clean, secure warehouse facilities. Goods are systematically received, weighed, inspected, and consolidated using industrial forklifts, heavy-duty racking, and protective staging protocols.",
    image: LOGISTICS_IMAGES.serviceHandling,
    features: [
      "Palletization, shrink-wrapping, and heavy strapping",
      "Forklift and mechanical loading equipment",
      "Origin inspection and clear consignee labeling",
      "Disciplined weight distribution and load stabilization"
    ],
    transitModes: ["Road", "Rail", "Air"]
  },
  {
    id: "pickup-collection",
    number: "05",
    title: "Pickup & Collection",
    badge: "Origin Sourcing",
    shortDesc: "Scheduled cargo collection directly from manufacturing plants, factories, and warehouses.",
    fullDesc: "Eliminate the logistical friction of transporting commercial cargo to public dispatch counters. Our fleet coordinates scheduled pickups directly at your facility dock with verified loading documentation.",
    image: LOGISTICS_IMAGES.servicePickup,
    features: [
      "Scheduled pickup from commercial warehouses and factories",
      "Consignment verification and booking receipt on-site",
      "Properly sized vehicles matching consignment weight and volume",
      "Direct transit transfer to primary linehaul departures"
    ],
    transitModes: ["Road"]
  },
  {
    id: "delivery-dispatch",
    number: "06",
    title: "Delivery & Dispatch",
    badge: "Terminal Handover",
    shortDesc: "Controlled destination release, terminal dock handover, and doorstep delivery.",
    fullDesc: "Final-leg destination coordination ensuring commercial consignments reach consignee premises or receiving bays without intermediate delays. Handled with signed proof of delivery and manifest sign-off.",
    image: LOGISTICS_IMAGES.serviceDelivery,
    features: [
      "Coordinated unloading at destination industrial docks",
      "Verified handover to designated commercial consignee",
      "Consignment condition check upon final release",
      "Direct status confirmation with dispatch coordination"
    ],
    transitModes: ["Road"]
  }
];

export const VALUE_PROPOSITIONS = [
  {
    number: "01",
    title: "Multimodal Freight Infrastructure",
    desc: "Seamless integration across road trucks, containerized rail wagons, and domestic air cargo to match specific timeline and volume parameters."
  },
  {
    number: "02",
    title: "Disciplined Cargo Handling",
    desc: "Rigorous staging, industrial palletization, and heavy strapping protect every consignment from physical shock, vibration, and shifting."
  },
  {
    number: "03",
    title: "Direct Operations Access",
    desc: "Speak directly with experienced logistics coordinators via phone or WhatsApp. No automated phone trees or ticketing queues."
  },
  {
    number: "04",
    title: "Commercial & B2B Focus",
    desc: "Built specifically for manufacturers, wholesalers, and retail distributors requiring structured commercial cargo movement."
  }
];

export const ENQUIRY_SERVICES = [
  "Road Freight",
  "Rail Freight",
  "Air Cargo",
  "Cargo Pickup",
  "Cargo Delivery",
  "Cargo Handling",
  "Other"
] as const;

export type EnquiryService = typeof ENQUIRY_SERVICES[number];

/**
 * Builds the standard WhatsApp URL with clean URI encoding
 */
export function createWhatsAppEnquiryUrl(details: {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  service: string;
  message?: string;
}): string {
  const cleanMsg = details.message && details.message.trim() ? details.message.trim() : 'N/A';
  
  const text = `Hello Super Parcel Logistics,

I would like to make a cargo enquiry.

Name: ${details.name.trim()}
Phone: ${details.phone.trim()}
Pickup Location: ${details.pickup.trim()}
Destination: ${details.destination.trim()}
Service Required: ${details.service.trim()}
Message: ${cleanMsg}

Thank you.`;

  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
