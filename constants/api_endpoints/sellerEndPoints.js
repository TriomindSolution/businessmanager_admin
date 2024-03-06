export const SELLER_END_POINT = {
    create: () => `seller/store`,
    update: (id) => `seller/update/${id}`,
    list: (page, limit) => `/seller-list?limit=${limit}`,
    info: (id) => `seller/${id}`,
    delete:(id) => `seller/delete/${id}`,
}   