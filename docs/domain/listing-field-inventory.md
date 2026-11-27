# Listing Field Inventory

This inventory defines the investor-listing fields for PREIshare. It is based on
the [Investor Listing Domain Brief](./investor-listing-brief.md).

## Shape legend

- **Text**: human-readable or identifier text.
- **Number**: numeric value.
- **Yes/no**: boolean value.
- **Fixed choice**: a value from an explicitly allowed list.
- **Nested object**: a structured object containing related fields.
- **List**: an ordered or unordered array of items.

## Identity

| Field name | Plain-language meaning | Data shape | Required vs optional | Example values |
| --- | --- | --- | --- | --- |
| `id` | Stable, unique identifier for the listing. | Text | Required | `lst_ev_1001` |
| `title` | Short name shown to investors. | Text | Required; must not be empty | `Riverfront Multifamily Offering` |
| `description` | Longer investor-facing summary. | Text | Required for `published`, `under_offer`, and `sold`; optional for `draft` and `archived` | `Value-add asset near transit...` |
| `createdAt` | When the listing record was created. | Text, datetime format | Required | `2026-03-01T10:00:00Z` |
| `updatedAt` | When the listing was last meaningfully edited. | Text, datetime format | Required | `2026-03-15T16:30:00Z` |

## Status

| Field name | Plain-language meaning | Data shape | Required vs optional | Example values |
| --- | --- | --- | --- | --- |
| `status` | Lifecycle state for the listing. | Fixed choice | Required | `draft`, `published`, `under_offer`, `sold`, `archived` |

Allowed `status` values:

- `draft`
- `published`
- `under_offer`
- `sold`
- `archived`

The status field must use only this fixed list.

## Property type

| Field name | Plain-language meaning | Data shape | Required vs optional | Example values |
| --- | --- | --- | --- | --- |
| `propertyType` | Asset class for the property. | Fixed choice | Required | `multifamily`, `office`, `retail`, `industrial`, `mixed_use`, `land` |

Allowed `propertyType` values:

- `multifamily`
- `office`
- `retail`
- `industrial`
- `mixed_use`
- `land`

The property type field must use only this fixed list.

## Address

| Field name | Plain-language meaning | Data shape | Required vs optional | Example values |
| --- | --- | --- | --- | --- |
| `address` | Physical location of the property. | Nested object | Required for `published`, `under_offer`, and `sold`; may be absent or incomplete while drafting | Nested object shown below |
| `address.line1` | Street number and name. | Text | Required | `500 River Rd` |
| `address.line2` | Unit, suite, or other secondary address text. | Text | Optional | `Suite 200` |
| `address.city` | City. | Text | Required | `Austin` |
| `address.region` | State, province, or region. | Text | Required | `TX` |
| `address.postalCode` | Postal or ZIP code. | Text | Required | `78701` |
| `address.country` | Country code or name. | Text | Required | `US` |

Example address object:

```text
{
  line1: "500 River Rd",
  line2: "Suite 200",
  city: "Austin",
  region: "TX",
  postalCode: "78701",
  country: "US"
}
```

## Financial summary

| Field name | Plain-language meaning | Data shape | Required vs optional | Example values |
| --- | --- | --- | --- | --- |
| `financials` | Asking price and investor-facing financial summary. | Nested object | Required for `published`, `under_offer`, and `sold`; may be absent or incomplete while drafting | Nested object shown below |
| `financials.askingPrice` | Listed price amount. | Number | Required | `12500000` |
| `financials.currency` | Currency used for the asking price. | Fixed choice or text code | Required | `USD` |
| `financials.projectedIrrPercent` | Optional projected internal rate of return, in percent. | Number | Optional | `12.5` |
| `financials.capRatePercent` | Optional capitalization rate, in percent. | Number | Optional | `5.8` |

Example financials object:

```text
{
  askingPrice: 12500000,
  currency: "USD",
  projectedIrrPercent: 12.5,
  capRatePercent: 5.8
}
```

The currency code should be a recognizable text code such as `USD`. The domain
brief does not define a closed currency-code list.

## Investor contacts

| Field name | Plain-language meaning | Data shape | Required vs optional | Example values |
| --- | --- | --- | --- | --- |
| `contacts` | People or firms associated with the listing. | List | At least one contact is required for `published`, `under_offer`, and `sold` | List of contact objects shown below |
| `contacts[].name` | Person or firm name. | Text | Required for each contact | `Jordan Lee` |
| `contacts[].role` | Why the contact appears on the listing. | Fixed choice or text | Required for each contact | `broker`, `owner_rep` |
| `contacts[].email` | Email address for the contact. | Text | Required if `phone` is absent; optional otherwise | `jordan@example.com` |
| `contacts[].phone` | Phone number for the contact. | Text | Required if `email` is absent; optional otherwise | `+1-512-555-0142` |

Each contact must provide at least one reachable channel: `email` or `phone`.
The brief gives `broker` and `owner_rep` as examples of contact roles but does
not declare a complete fixed role list.

Example contacts list:

```text
[
  {
    name: "Jordan Lee",
    role: "broker",
    email: "jordan@example.com",
    phone: "+1-512-555-0142"
  }
]
```

## Ownership

| Field name | Plain-language meaning | Data shape | Required vs optional | Example values |
| --- | --- | --- | --- | --- |
| `ownership` | Relationships between contacts and the asset. | List | Required for `published`, `under_offer`, and `sold`; every ownership row must identify a contact and relationship | List of ownership objects shown below |
| `ownership[].contactNameOrId` | Identifies the contact represented by this ownership row. | Text | Required for each ownership row | `Jordan Lee`, `contact_123` |
| `ownership[].relationship` | The contact's relationship to the asset. | Fixed choice | Required for each ownership row | `primary_owner`, `co_owner`, `broker`, `property_manager` |
| `ownership[].sharePercent` | Optional percentage owned or associated with the contact. | Number | Optional | `60` |

Allowed `ownership[].relationship` values:

- `primary_owner`
- `co_owner`
- `broker`
- `property_manager`

The relationship field must use only this fixed list.

Example ownership list:

```text
[
  {
    contactNameOrId: "Jordan Lee",
    relationship: "primary_owner",
    sharePercent: 60
  }
]
```

## Inventory rules

1. The top-level listing groups are identity, status, property type, `address`,
   `financials`, `contacts`, and `ownership`.
2. `id` and `title` must be present and non-empty.
3. `status` and `propertyType` are closed fixed-choice fields.
4. `address` and `financials` are nested objects, not flat fields.
5. `contacts` is a list with at least one entry for a valid published listing.
6. Every contact must have a name and at least one of email or phone.
7. Every ownership relationship is tied to a named or identified contact and
   must use one of the four allowed relationship values.
8. Optional fields may be absent. Required fields must not be missing from
   `published`, `under_offer`, or `sold` listings.