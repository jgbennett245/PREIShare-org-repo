// Field names and union members match the types defined in src/types.

import type { InvestorListing } from "../types";

/** Active multifamily listing with full nested shapes. */
export const sampleActiveListing: InvestorListing = {
  id: "listing-001",
  title: "Riverfront Multifamily — 24 Units",
  summary: "A stabilized 24-unit multifamily property near the riverfront.",
  status: "active",
  propertyType: "multi_family",
  address: {
    street: "1200 River Rd, Suite 100",
    city: "Austin",
    region: "TX",
    postalCode: "78701",
    country: "US",
  },
  financials: {
    askingPrice: 4250000,
    noi: 312000,
    capRate: 0.073,
    occupancyRate: 0.95,
  },
  contacts: [
    {
      id: "contact-001",
      fullName: "Jordan Lee",
      email: "jordan.lee@example.com",
      phone: "+1-512-555-0142",
      role: "listing_agent",
    },
  ],
  primaryContactId: "contact-001",
  ownership: {
    ownerName: "PREI Riverfront Holdings LLC",
    ownershipPercent: 100,
  },
  askingPrice: 4250000,
  createdAt: "2026-03-01T10:00:00Z",
  updatedAt: "2026-03-15T16:30:00Z",
};

/** Draft listing — still being prepared. */
export const sampleDraftListing: InvestorListing = {
  id: "listing-002",
  title: "Draft — Oak Street Retail Pad",
  summary: "A draft listing for a retail property on Oak Street.",
  status: "draft",
  propertyType: "commercial",
  address: {
    street: "88 Oak St",
    city: "Dallas",
    region: "TX",
    postalCode: "75201",
    country: "US",
  },
  financials: {
    askingPrice: 980000,
    noi: 0,
    capRate: 0,
    occupancyRate: 0,
  },
  contacts: [],
  primaryContactId: "",
  ownership: {
    ownerName: "PREI Draft Vehicles LLC",
    ownershipPercent: 100,
  },
  askingPrice: 980000,
  createdAt: "2026-03-02T10:00:00Z",
  updatedAt: "2026-03-02T10:00:00Z",
};

/** Under-contract listing — exercises the under-contract status branch. */
export const sampleUnderContractListing: InvestorListing = {
  id: "listing-003",
  title: "Cedar Industrial — Under Contract",
  summary: "An industrial property under contract in Houston.",
  status: "under_contract",
  propertyType: "commercial",
  address: {
    street: "4500 Cedar Blvd",
    city: "Houston",
    region: "TX",
    postalCode: "77002",
    country: "US",
  },
  financials: {
    askingPrice: 6100000,
    noi: 455000,
    capRate: 0.075,
    occupancyRate: 0.92,
  },
  contacts: [
    {
      id: "contact-002",
      fullName: "Sam Rivera",
      email: "sam.rivera@example.com",
      role: "buyer_rep",
    },
  ],
  primaryContactId: "contact-002",
  ownership: {
    ownerName: "PREI Cedar JV",
    ownershipPercent: 60,
  },
  askingPrice: 6100000,
  createdAt: "2026-03-03T10:00:00Z",
  updatedAt: "2026-03-15T16:30:00Z",
};

/** Closed listing — historical record with its required closing date. */
export const sampleClosedListing: InvestorListing = {
  id: "listing-004",
  title: "Summit Office — Closed",
  summary: "An office property in San Antonio with a completed sale.",
  status: "closed",
  closedAt: "2026-03-20T10:00:00Z",
  propertyType: "commercial",
  address: {
    street: "1 Summit Plaza",
    city: "San Antonio",
    region: "TX",
    postalCode: "78205",
    country: "US",
  },
  financials: {
    askingPrice: 2750000,
    noi: 198000,
    capRate: 0.072,
    occupancyRate: 0.98,
  },
  contacts: [
    {
      id: "contact-003",
      fullName: "Alex Chen",
      email: "alex.chen@example.com",
      role: "seller_rep",
    },
  ],
  primaryContactId: "contact-003",
  ownership: {
    ownerName: "PREI Summit LLC",
    ownershipPercent: 100,
  },
  askingPrice: 2750000,
  createdAt: "2026-03-04T10:00:00Z",
  updatedAt: "2026-03-20T10:00:00Z",
};

/** All valid samples — useful for later UI mocks and typecheck scripts. */
export const sampleInvestorListings: InvestorListing[] = [
  sampleActiveListing,
  sampleDraftListing,
  sampleUnderContractListing,
  sampleClosedListing,
];
