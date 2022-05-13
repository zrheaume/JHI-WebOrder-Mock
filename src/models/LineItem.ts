import { Amount } from "./common"

interface VariantOption {
    value: String
    optionName: String
}

interface Customization {
    label: String
    value: String
}

interface LineItemObject {
    id: String
    variantId?: String
    sku: String

    weight: Number
    width: Number
    length: Number
    height: Number

    productId: String
    productName: String
    quantity: number

    unitPricePaid: Amount

    variantOptions: [VariantOption] | null
    customizations: [Customization] | null

    imageUrl: String
    lineItemType: String
}

interface LineItem extends LineItemObject { }

class LineItem {

    constructor() {
    }
}

export { LineItemObject }

export default LineItem