export const navigation = [
  {
    type: "dropdown",
    title: "Shop",

    children: [
      {
        title: "Shop Banner",

        children: [
          {
            title: "Shop Banner",
            url: "/shop-banner",
          },

          {
            title: "Shop Banner 2",
            url: "/shop-banner-2",
          },
        ],
      },

      {
        title: "Trending Product",

        children: [
          {
            title: "Trending Product",
            url: "/trending-product",
          },

          {
            title: "Trending Product 2",
            url: "/trending-product-2",
          },
        ],
      },

      {
        title: "Shop Category",
        url: "/shop-category",
      },
    ],
  },

  {
    type: "mega",
    title: "Product",

    columns: [
      {
        title: "Product Swatches",

        links: [
          {
            title: "product Color Swatch",
            url: "/product-color",
          },

          {
            title: "product Image Swatch",
            url: "/product-image",
          },

          {
            title: "product new style",
            url: "/product-style",
            badge: "new",
          },
        ],
      },

      {
        title: "Product Page",

        links: [
          {
            title: "Product thumbnail",
            url: "/product-thumbnail",
            badge: "hot",
          },

          {
            title: "Product slider",
            url: "/product-slider",
          },
        ],
      },
    ],
  },

  {
    type: "mega",
    title: "Features",

    columns: [
      {
        title: "Invoice Template",

        links: [
          {
            title: "Invoice 1",
            url: "/invoice-1",
          },

          {
            title: "Invoice 2",
            url: "/invoice-2",
          },
        ],
      },
    ],
  },

  {
    type: "dropdown",
    title: "Pages",

    children: [
      {
        title: "Authentications",

        children: [
          {
            title: "Login",
            url: "/login",
          },

          {
            title: "Register",
            url: "/register",
          },
        ],
      },

      {
        title: "About Us",
        url: "/about",
      },
    ],
  },
];