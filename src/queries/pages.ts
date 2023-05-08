export const getPages = () => `
  {
    pages(where: {title: "Home"}) {
      components {
        ... on Grid {
          id
          items {
            ... on Card {
              id
              title
              description
            }
          }
        }
        ... on Stack {
          id
          items {
            ... on Card {
              id
              title
              description
            }
          }
        }
      }
    }
  }`;
