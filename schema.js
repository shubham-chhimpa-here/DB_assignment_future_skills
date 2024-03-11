// Product shcmea 

const productSchema = {
    id: {
        type: 'number',
        required: true
    },
    name: {
        type: 'string',
        required: true
    },
    desc: {
        type: 'string',
        required: true
    },
    SKU: {
        type: 'string',
        required: true
    },
    category_id: {
        type: 'number',
        required: true
    },
    inventory_id: {
        type: 'number',
        required: true
    },
    price: {
        type: 'number',
        required: true
    },
    discount_id: {
        type: 'number',
        required: true
    },
    created_at: {
        type: 'date',
    },
    modified_at: {
        type: 'date',
    },
    deleted_at: {
        type: 'date',
    }
};


// product category schema 

const productCategorySchema = {
    id: {
        type: 'number',
        required: true
    },
    name: {
        type: 'string',
        required: true
    },
    desc: {
        type: 'string',
        required: true
    },
    created_at: {
        type: 'date',
    },
    modified_at: {
        type: 'date',
    },
    deleted_at: {
        type: 'date',
    }
}

// product inventory schema

const productInventorySchema = {
    id: {
        type: 'number',
        required: true
    },
    quantity: {
        type: 'number',
        required: true
    },
    created_at: {
        type: 'date',
    },
    modified_at: {
        type: 'date',
    },
    deleted_at: {
        type: 'date',
    }
}


// discount schema 

const discountSchema = {
    id: {
        type: 'number',
        required: true
    },
    name: {
        type: 'string',
        required: true
    },
    desc: {
        type: 'string',
        required: true
    },
    discount_percent: {
        type: 'number',
        required: true
    },
    active: {
        type: 'boolean',
        required: true
    },
    created_at: {
        type: 'date',
    },
    modified_at: {
        type: 'date',
    },
    deleted_at: {
        type: 'date',
    }

}