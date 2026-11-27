// src/fixtures/invalid-listings.errors.ts
// INTENTIONAL TYPE ERRORS — this file should NOT typecheck cleanly.
// Each export demonstrates a failure mode documented in
// docs/type-safety/expected-type-errors.md

import type { InvestorListing } from "../types";

// Case: status spelled in a way the union does not allow
export const invalidStatusSpelling: InvestorListing = {
  id: "listing-bad-status",
  title: "Downtown duplex offering",
  summary: "A duplex offering in downtown Austin.",
  status: "availble", // should error: not in ListingStatus union
  propertyType: "multi_family",
  address: {
    street: "100 Main St",
    city: "Austin",
    region: "TX",
    postalCode: "78701",
    country: "US",
  },
  financials: {
    askingPrice: 450000,
    noi: 33000,
    capRate: 0.073,
    occupancyRate: 0.95,
  },
  contacts: [
    {
      id: "contact-bad-status",
      fullName: "Alex Rivera",
      email: "alex@example.com",
      role: "primary",
    },
  ],
  primaryContactId: "contact-bad-status",
  ownership: { ownerName: "Rivera Holdings", ownershipPercent: 100 },
  askingPrice: 450000,
  createdAt: "2026-03-01T10:00:00Z",
  updatedAt: "2026-03-01T10:00:00Z",
};

// Case: required nested address field missing
export const missingAddressCity: InvestorListing = {
  id: "listing-missing-city",
  title: "Lakeview fourplex",
  summary: "A fourplex near Lakeview.",
  status: "draft",
  propertyType: "multi_family",
  address: {
    street: "22 Lake Rd",
    // city missing on purpose
    region: "TX",
    postalCode: "78702",
    country: "US",
  },
  financials: {
    askingPrice: 520000,
    noi: 39000,
    capRate: 0.075,
    occupancyRate: 0.9,
  },
  contacts: [
    {
      id: "contact-missing-city",
      fullName: "Sam Lee",
      email: "sam@example.com",
      role: "primary",
    },
  ],
  primaryContactId: "contact-missing-city",
  ownership: { ownerName: "Lee Capital", ownershipPercent: 100 },
  askingPrice: 520000,
  createdAt: "2026-03-02T10:00:00Z",
  updatedAt: "2026-03-02T10:00:00Z",
};

// Case: numeric money field given as a string
export const priceAsString: InvestorListing = {
  id: "listing-price-string",
  title: "Cedar Street portfolio slice",
  summary: "A small multifamily investment opportunity.",
  status: "active",
  propertyType: "single_family",
  address: {
    street: "9 Cedar St",
    city: "Dallas",
    region: "TX",
    postalCode: "75201",
    country: "US",
  },
  financials: {
    askingPrice: "610000", // should error: string is not number
    noi: 45000,
    capRate: 0.074,
    occupancyRate: 0.93,
  },
  contacts: [
    {
      id: "contact-price-string",
      fullName: "Jordan Kim",
      email: "jordan@example.com",
      role: "primary",
    },
  ],
  primaryContactId: "contact-price-string",
  ownership: { ownerName: "Kim Investors", ownershipPercent: 100 },
  askingPrice: 610000,
  createdAt: "2026-03-03T10:00:00Z",
  updatedAt: "2026-03-03T10:00:00Z",
};

// Case: required asking price missing from the financial summary
export const missingFinancialAskingPrice: InvestorListing = {
  id: "listing-missing-financial-price",
  title: "Birch Road Offering",
  summary: "A commercial investment opportunity on Birch Road.",
  status: "active",
  propertyType: "commercial",
  address: {
    street: "200 Birch Rd",
    city: "Houston",
    region: "TX",
    postalCode: "77002",
    country: "US",
  },
  financials: {
    noi: 56000,
    capRate: 0.07,
    occupancyRate: 0.91,
  },
  contacts: [
    {
      id: "contact-missing-financial-price",
      fullName: "Morgan Ellis",
      email: "morgan@example.com",
      role: "listing_agent",
    },
  ],
  primaryContactId: "contact-missing-financial-price",
  ownership: { ownerName: "Birch Road Holdings" },
  askingPrice: 800000,
  createdAt: "2026-03-05T10:00:00Z",
  updatedAt: "2026-03-05T10:00:00Z",
};

// Case: active listings require a financial summary
export const missingActiveFinancials: InvestorListing = {
  id: "listing-missing-financials",
  title: "Pine Street Offering",
  summary: "An active multifamily offering on Pine Street.",
  status: "active",
  propertyType: "multi_family",
  address: {
    street: "75 Pine St",
    city: "Austin",
    region: "TX",
    postalCode: "78702",
    country: "US",
  },
  contacts: [
    {
      id: "contact-missing-financials",
      fullName: "Taylor Morgan",
      email: "taylor@example.com",
      role: "listing_agent",
    },
  ],
  primaryContactId: "contact-missing-financials",
  ownership: { ownerName: "Pine Street Holdings" },
  askingPrice: 720000,
  createdAt: "2026-03-04T10:00:00Z",
  updatedAt: "2026-03-04T10:00:00Z",
};

// Case: active listings require at least one investor contact
export const activeListingWithoutContacts: InvestorListing = {
  id: "listing-no-contacts",
  title: "Maple Avenue Offering",
  summary: "An active commercial property on Maple Avenue.",
  status: "active",
  propertyType: "commercial",
  address: {
    street: "400 Maple Ave",
    city: "Dallas",
    region: "TX",
    postalCode: "75201",
    country: "US",
  },
  financials: {
    askingPrice: 850000,
    noi: 62000,
    capRate: 0.073,
    occupancyRate: 0.9,
  },
  contacts: [],
  primaryContactId: "",
  ownership: { ownerName: "Maple Avenue LLC" },
  askingPrice: 850000,
  createdAt: "2026-03-05T10:00:00Z",
  updatedAt: "2026-03-05T10:00:00Z",
};
