var sampleWebOrder = {
  // Array of Order resources. If the merchant site
  // doesn't have any orders, this array is empty.
  "result": [
    {
      // Unique Order id.
      "id": "585d498fdee9f31a60284a37",
      // Unique, sequential number for the Order.
      "orderNumber": "3",
      // ISO 8601 UTC date and time string; represents the moment when the order was placed.
      "createdOn": "2016-12-23T15:58:07.187Z",
      // ISO 8601 UTC date and time string; represents when the order was last modified.
      "modifiedOn": "2016-12-23T15:58:07.187Z",
      // Where the order originated; possible values are: `web` and `pos`.
      "channel": "web",
      // If `true`, the order is a test order created using a payment method in test mode.
      "testmode": true,
      // Email address provided at checkout or, for recurring subscription
      // orders, the customer's current email address.
      "customerEmail": "foo@example.com",
      // Customer's billing address.
      "billingAddress": {
        "firstName": "Bob",
        "lastName": "Loblaw",
        "address1": "459 Broadway",
        "address2": null,
        "city": "New York",
        "state": "NY",
        "countryCode": "US",
        "postalCode": "10003",
        "phone": "5553334444"
      },
      // Customer's shipping address as provided at checkout or, for recurring
      // subscription orders, the customer's current mailing address.
      "shippingAddress": {
        "firstName": "Bob",
        "lastName": "Loblaw",
        "address1": "459 Broadway",
        "address2": null,
        "city": "New York",
        "state": "NY",
        "countryCode": "US",
        "postalCode": "10003",
        "phone": "5553334444"
      },
      // Current fulfillment status of the order.
      // Value may be: `PENDING`, `FULFILLED`, or `CANCELED`.
      "fulfillmentStatus": "PENDING",
      // Array of purchased line items; line items describe what product
      // or product variant was purchased, how many of that item
      // were purchased, and additional details.
      "lineItems": [
        {
          // Unique line item id.
          "id": "585d4975dee9f31a60284a16",
          // Unique id of the ProductVariant sold.
          // See the Products API for information about ProductVariants.
          // This field is populated when these conditions are true:
          //  * The line item is a physical product variant, a service product variant, or a gift card.
          //  * The Order was created on or after May 28, 2019.
          "variantId": "88c16ee4-547b-445e-a392-bded9991ae30",
          // Stock keeping unit (SKU) code assigned by the Squarespace
          // merchant for a variant; used to identify an exact variant
          // of a product using a naming scheme preferred by the merchant.
          // Field is `null` for digital products.
          "sku": "SQ3381024",
          // Fields weight, width, length, and height represent the shipping measurements of physical product variants.
          // These fields are 0.0 when not specified by a merchant, or when the variant is not a physical product.
          // Units of measurement are indicated by the website’s measurement standard.
          // To retrieve the measurement standard, visit the FAQ and read:
          // "How can I determine the Squarespace site that owns a particular API key or OAuth token?"
          // https://developers.squarespace.com/commerce-apis/faq
          // For websites using the metric standard, these measurements are in kilograms and centimeters.
          // For websites using the imperial standard, these measurements are in pounds and inches.
          "weight": 1.0,
          "width": 2.0,
          "length": 3.0,
          "height": 4.0,
          // Unique product id; unless `null`, every line item with a
          // `variantId` is a variant of a product with `productId`.
          "productId": "565c8f3da7c8a3cf71d5fd0a",
          // Name of the purchased product.
          "productName": "Product",
          // Amount of the item purchased.
          "quantity": 1,
          // Price the customer paid per unit of the item.
          "unitPricePaid": {
            // ISO 4217 currency code string.
            "value": "55.00",
            // Monetary amount with 1,000,000 limit and no markers for the dollar amount.
            // Conforms to the selected ISO currency's precision.
            // (e.g., JPY uses 123, but USD uses 123.00 or 123)
            "currency": "USD"
          },
          // Array of variant options; represents variant choices made by
          // the customer, such as the size and color of a t-shirt.
          // Field is `null` for digital products.
          "variantOptions": [{
            "value": "Large",
            "optionName": "Size"
          }, {
            "value": "Black",
            "optionName": "Color"
          }],
          // Array of form data submitted via a product's custom form
          // prior to being added to the cart.
          "customizations": [{
            "label": "Shirt Emblem Location",
            "value": "Middle Chest"
          }],
          // URL of the primary image for the item.
          "imageUrl": "https://static.squarespace.com/universal/commerce/images/brine-32oz-spring-mix-v2.jpg?format=300w",
          // Product type of the item.
          "lineItemType": "PHYSICAL_PRODUCT"
        }],
      // Array of internal notes added to the order by the merchant.
      "internalNotes": [{
        // Content for the note.
        "content": "First note"
      }, {
        "content": "Second note"
      }],
      // Array of shipping line items; describes the
      // shipping options chosen at checkout.
      "shippingLines": [{
        // Description of the shipping option.
        "method": "Flat Rate",
        // Shipping cost.
        "amount": {
          "value": "1.00",
          "currency": "USD"
        }
      }],
      // Array of discount line items; describes the promotions
      // redeemed during checkout.
      "discountLines": [{
        // Field is deprecated, use `name` instead.
        "description": "Fall Sale",
        // Name of the promotion.
        "name": "Fall Sale",
        // Amount of the promotional discount.
        "amount": {
          "value": "1.00",
          "currency": "USD"
        },
        // The promo code used.
        "promoCode": "FALLSALE"
      }],
      // Array of form data submitted via the checkout page.
      "formSubmission": [{
        "label": "How did you hear about us?",
        "value": "Facebook"
      }],
      // Array of shipping fulfillments;
      // describes shipment information for the order.
      "fulfillments": [
        {
          // ISO 8601 UTC date and time string; represents the moment the fulfillment was shipped.
          "shipDate": "2017-01-28T22:19:26.980Z",
          // Name of the carrier handling the shipment.
          "carrierName": "USPS",
          // Carrier's level of service for shipping.
          "service": "Priority Mail",
          // Carrier's parcel tracking number.
          "trackingNumber": "9400109699939624119857",
          // URL provided by the carrier to track the shipment.
          "trackingUrl": "https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=9400109699939624119857"
        }, {
          "shipDate": "2017-01-29T22:19:26.980Z",
          "carrierName": "FedEx",
          "service": "Same-Day Delivery",
          "trackingNumber": "103932814692659",
          "trackingUrl": "https://www.fedex.com/apps/fedextrack/?tracknumbers=103932814692659"
        }
      ],
      // Totals representing the amount of money spent on their
      // named concerns, such as shipping, taxes, et al.
      "subtotal": {
        "value": "55.00",
        "currency": "USD"
      },
      "shippingTotal": {
        "value": "1.00",
        "currency": "USD"
      },
      "discountTotal": {
        "value": "1.00",
        "currency": "USD"
      },
      "taxTotal": {
        "value": "2.70",
        "currency": "USD"
      },
      "refundedTotal": {
        "value": "0.00",
        "currency": "USD"
      },
      "grandTotal": {
        "value": "57.70",
        "currency": "USD"
      },
      // Name of the third-party sales channel.
      "channelName": "External Channel",
      // Order reference identifier used by the third-party sales channel.
      "externalOrderReference": "TEST-123456",
      // ISO 8601 UTC date and time string; represents the moment the order was fulfilled.
      "fulfilledOn": "2017-01-30T22:18:37.480Z",
      // Indicates whether lineItems.unitPricePaid includes tax.
      // Values may be `EXCLUSIVE` or `INCLUSIVE`.
      "priceTaxInterpretation": "INCLUSIVE"
    }
  ],
  // Provides pagination details for iterating on
  // the orders available from the merchant site.
  "pagination": {
    // Flag; indicates whether another page of data is available.
    "hasNextPage": true,
    // Cursor to use in a subsequent request; retrieves the next page of data.
    "nextPageCursor": "b342f5367c664d3c99aa56f44f95ab0a",
    // A pre-built URL for applications to request the next page of data.
    "nextPageUrl": "https://api.squarespace.com/1.0/commerce/inventory?cursor=b342f5367c664d3c99aa56f44f95ab0a"
  }
}