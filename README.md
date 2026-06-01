# Pokedex-Data

Web application that displays the first 150 Pokémon and their detailed information.

## 📋 Table of Contents
- [Pokedex-Data](#pokedex-data)
  - [📋 Table of Contents](#-table-of-contents)
  - [📝 Description](#-description)
  - [💻 Technologies](#-technologies)
  - [✅ Prerequisites](#-prerequisites)
  - [🚀 Installation](#-installation)
  - [🛠️ Usage](#️-usage)
  - [📂 Project Structure](#-project-structure)
  - [🚧 Challenges Faced](#-challenges-faced)

---

## 📝 Description

**Pokedex-Data** is a web application that displays a paginated table with the first 150 Pokémon, showing 30 items per page. Users can view additional details for each Pokémon, such as:

- Name
- Weight
- Height
- Type(s)
- Ability/Abilities
- Pokémon image

---

## 💻 Technologies

- **Frontend**: Vue 3, Vue Router
- **Additional Libraries**: Axios, Tailwind CSS
- **Tools**: Vite, ESLint

---

## ✅ Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (version >= 16)
- **npm** (version >= 8)

---

## 🚀 Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/SebaVeraniego/Pokedex-Data.git
    cd Pokedex-Data
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the local server:
    ```bash
    npm run dev
    ```

---

## 🛠️ Usage

Once the server is running, open your browser and navigate to `http://localhost:5173` to explore the project's features.

---

## 📂 Project Structure

```plaintext
Pokedex-Data/
├── node_modules/           # Project dependencies
├── public/                 # Static files
│   └── favicon.ico         # Website icon
├── src/                    # Source code
│   ├── assets/             # Static assets (images, styles, etc.)
│   ├── components/         # Reusable Vue components
│   ├── router/             # Route configuration
│   ├── utils/              # Helper functions
│   ├── App.vue             # Root application component
│   └── main.js             # Project entry point
├── .gitignore              # Files ignored by Git
├── index.html              # Main HTML file
├── jsonconfig.json         # Configuration to improve module resolution in editors like VS Code
├── package-lock.json       # Locked dependency versions
├── package.json            # Project dependencies and scripts
├── pnpm-lock.yaml          # Dependency lock file for pnpm
├── postcss.config.js       # PostCSS configuration for Tailwind
├── README.md               # Documentation file that provides an overview of the project, how to install and run the application, and other important notes
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

---

## 🚧 Challenges Faced

* The first challenge was learning a new JavaScript framework. Although there was prior experience with JavaScript and Next.js, and Vue 3 shares some similarities such as component creation with or without props and reactive variable management, Vue 3 introduces differences in how components are structured and how props are created and passed. Additionally, routing management in Vue 3 differs from other frameworks, although it has some similarities to Django’s approach. To overcome these challenges, YouTube tutorials, official documentation, and ChatGPT were used to better understand how Vue 3 works with the Composition API.

* Related to the previous point, there are still some features that are not fully clear regarding their optimal use. It is uncertain whether some functions such as `watch`, `computed`, `onMounted`, `v-model`, and `defineEmits` are being used in the best possible way or according to best practices. To address this uncertainty, more tutorials, documentation, and ChatGPT explanations were consulted to better understand the workflow of these functions. One example was analyzing how `defineEmits(['update:currentPage'])` works to understand which parent component data gets modified.

* The biggest challenge was determining the right components to make the application as modular and independent as possible, improving scalability and maintainability. To solve this, the first step was building the page skeleton and core functionality without components. Development started with `PokemosTable.vue` and all its associated functionality, implementing the flow first without component separation. The same approach was used for `PokemonInfo.vue`.

Once everything was confirmed to work correctly, the functionality was analyzed and divided into smaller components, avoiding unnecessary components while still achieving effective modularization.

* One part of the requirements stated: "When clicking on a Pokémon from the list, show a detail view." It was unclear whether this meant clicking anywhere on a row to access the detail view, or adding a dedicated column with a button for navigation. The first option seemed more visually appealing, but it was unclear how to implement it efficiently. Because of this, a new column called "Action" was created with a button that allows users to access the detailed view. This solution was simpler and also more intuitive for users.

* Another challenge was properly implementing the `CustomPagination.vue` and `SearchInput.vue` components while keeping them as independent as possible from the parent component. These components are responsible for table pagination and Pokémon search functionality. The complexity came from both components using props and updating parent component data, creating a constant flow of information between them. Solving this required a deeper understanding of Vue 3 features. Previous experience building a pagination component in Next.js also helped by providing a clear idea of the programming logic and variables needed.

* Another challenge was properly using the PokeAPI and the functions created inside the `utils` folder. Initially, the idea was to fetch only the 30 Pokémon corresponding to each page, since this would consume fewer resources than fetching all 150 at once. However, after considering the Pokémon search feature, it was concluded that fetching all 150 Pokémon into a single variable and filtering them afterward was more efficient. To create asynchronous functions, research was done on the best implementation approach with Vue 3 and whether a special library existed for that purpose. In the end, Axios was chosen to handle endpoint requests. It was also clear that implementing `try-catch` blocks was necessary due to previous experiences dealing with endpoint errors, ensuring more robust functions.

* The final challenge was styling the page with Tailwind CSS in a way that was simple, visually appealing, and responsive across different screen sizes. Previous experience from another project that also used Tailwind for responsive pages provided a good understanding of responsive design concepts. External websites were also used for inspiration on some styles, such as the loading animation in `Waiting.vue`, along with ChatGPT assistance for more complex functionality.