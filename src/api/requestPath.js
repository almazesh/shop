


export const requestPath = {
  register: "/users/user/",
  login: "/token/",
  user: "/users/user/current_user/",
  products: "/products/product/",
  favorite: `/favorites/`,
  favoriteWithID: (id) => `/favorites/${id}/`,
  baskets: "/baskets/",
  basketsWithID: (id) => `/baskets/${id}/`
}