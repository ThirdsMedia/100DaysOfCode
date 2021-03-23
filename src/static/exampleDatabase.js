const exampleDatabase = [
  {
    id: 0,
    name: "South Side",
    date: "02/02/21",
    creator: "Darth Vader",
    location: "Tatooine Bar",
    ingredients: [
      {
        amount: '2',
        name: 'Gin',
        unit: 'oz',
      },
      {
        amount: '3/4', // These should probably be a selector of some kind, instead of user input (for security reasons)
        name: 'Lemon',
        unit: 'oz',
      },
      {
        amount: '3/4',
        name: 'simple syrup',
        unit: 'oz',
      }
    ],
    /* 
     * Once you actually implement the Build form you should have a TextInput at the end which lets you just enter
     * text without selecting a unit. The form will have a description which explains that the user should just enter
     * all their miscellaneous ingredients here such as "5 Mint leaves", or "2 dashes of Angostura bitters", etc. This
     * makes displaying the information easier. Input sanitization will be relevant here
     */
    miscellaneous: [
      "5 mint leaves",
      "2 dashes of Angostura",
    ],
    instructions: "Add the mint and simple syrup into the shaker and muddle lightly until the fragrance is apparent. Add the rest of the ingredients and shake vigorously for ten sheconds. Double strain the ingredients over ice. Garnish with a mint sprig.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 1,
    name: "South Side",
    date: "02/02/21",
    creator: "Darth Vader",
    location: "Tatooine Bar",
    ingredients: [
      {
        amount: '2',
        name: 'Gin',
        unit: 'oz',
      },
      {
        amount: '3/4', // These should probably be a selector of some kind, instead of user input (for security reasons)
        name: 'Lemon',
        unit: 'oz',
      },
      {
        amount: '3/4',
        name: 'simple syrup',
        unit: 'oz',
      }
    ],
    miscellaneous: [
      "5 mint leaves",
      "2 dashes of Angostura",
    ],
    instructions: "Add the mint and simple syrup into the shaker and muddle lightly until the fragrance is apparent. Add the rest of the ingredients and shake vigorously for ten sheconds. Double strain the ingredients over ice. Garnish with a mint sprig.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    name: "South Side",
    date: "02/02/21",
    creator: "Darth Vader",
    location: "Tatooine Bar",
    ingredients: [
      {
        amount: '2',
        name: 'Gin',
        unit: 'oz',
      },
      {
        amount: '3/4', // These should probably be a selector of some kind, instead of user input (for security reasons)
        name: 'Lemon',
        unit: 'oz',
      },
      {
        amount: '3/4',
        name: 'simple syrup',
        unit: 'oz',
      }
    ],
    miscellaneous: [
      "5 mint leaves",
      "2 dashes of Angostura",
    ],
    instructions: "Add the mint and simple syrup into the shaker and muddle lightly until the fragrance is apparent. Add the rest of the ingredients and shake vigorously for ten sheconds. Double strain the ingredients over ice. Garnish with a mint sprig.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    name: "South Side",
    date: "02/02/21",
    creator: "Darth Vader",
    location: "Tatooine Bar",
    ingredients: [
      {
        amount: '2',
        name: 'Gin',
        unit: 'oz',
      },
      {
        amount: '3/4', // These should probably be a selector of some kind, instead of user input (for security reasons)
        name: 'Lemon',
        unit: 'oz',
      },
      {
        amount: '3/4',
        name: 'simple syrup',
        unit: 'oz',
      }
    ],
    miscellaneous: [
      "5 mint leaves",
      "2 dashes of Angostura",
    ],
    instructions: "Add the mint and simple syrup into the shaker and muddle lightly until the fragrance is apparent. Add the rest of the ingredients and shake vigorously for ten sheconds. Double strain the ingredients over ice. Garnish with a mint sprig.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    name: "South Side",
    date: "02/02/21",
    creator: "Darth Vader",
    location: "Tatooine Bar",
    ingredients: [
      {
        amount: '2',
        name: 'Gin',
        unit: 'oz',
      },
      {
        amount: '3/4', // These should probably be a selector of some kind, instead of user input (for security reasons)
        name: 'Lemon',
        unit: 'oz',
      },
      {
        amount: '3/4',
        name: 'simple syrup',
        unit: 'oz',
      }
    ],
    miscellaneous: [
      "5 mint leaves",
      "2 dashes of Angostura",
    ],
    instructions: "Add the mint and simple syrup into the shaker and muddle lightly until the fragrance is apparent. Add the rest of the ingredients and shake vigorously for ten sheconds. Double strain the ingredients over ice. Garnish with a mint sprig.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 5,
    name: "South Side",
    date: "02/02/21",
    creator: "Darth Vader",
    location: "Tatooine Bar",
    ingredients: [
      {
        amount: '2',
        name: 'Gin',
        unit: 'oz',
      },
      {
        amount: '3/4', // These should probably be a selector of some kind, instead of user input (for security reasons)
        name: 'Lemon',
        unit: 'oz',
      },
      {
        amount: '3/4',
        name: 'simple syrup',
        unit: 'oz',
      }
    ],
    miscellaneous: [
      "5 mint leaves",
      "2 dashes of Angostura",
    ],
    instructions: "Add the mint and simple syrup into the shaker and muddle lightly until the fragrance is apparent. Add the rest of the ingredients and shake vigorously for ten sheconds. Double strain the ingredients over ice. Garnish with a mint sprig.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]

export default exampleDatabase;
