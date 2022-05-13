import { Amount } from "./common"
import Address from "./Address"
import LineItem from "./LineItem"
import { randomUUID } from "crypto"


type FulfillmentStatus = "PENDING" | "FULFILLED" | "CANCELED"
type PriceTaxInterpretation = "EXCLUSIVE" | "INCLUSIVE"

interface InternalNote {
    content: String
}

interface ShippingLine {
    method: String
    amount: Amount
}

interface DiscountLine {
    description: String
    name: String
    amount: Amount
    promoCode: String
}

interface FormSubmission {
    label: String
    value: String
}

interface Fulfillment {
    shipDate: String
    carrierName: String
    service: String
    trackingNumber: String
    trackingUrl: String
}

export default class WebOrder {

    id: String
    orderNumber: Number
    createdOn: String
    modifiedOn: String
    channel: "web" | "pos"

    customerEmail: String
    billingAddress: Address
    shippingAddress: Address

    fulfillmentStatus: FulfillmentStatus

    lineItems: [LineItem]

    internalNotes: [InternalNote]
    shippingLines: [ShippingLine]
    discountLines: [DiscountLine]
    formSubmission: [FormSubmission]
    fulfillments: [Fulfillment]

    subTotal: Amount
    shippingTotal: Amount
    discountTotal: Amount
    taxTotal: Amount
    refundedTotal: Amount
    grandTotal: Amount

    channelName: String
    externalOrderReference: String
    fulfilledOn: String
    priceTaxInterpretation: PriceTaxInterpretation


    constructor() {

    }

}