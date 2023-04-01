# Software Saturdays 2023 Final Project

This is the final project for Purdue IEEE Software Saturdays Spring 2023 Final Project

## Requirements
Below is a list of where all the requirements are located in the project.
*Note: there may be more instances of certain requirements but at least the minimum amount is included here.*

### Must Have

1. At least two custom components
    - EmptyTeam.js
    - PokeList.js
    - Pokemon.js
    - Team.js
    - TeamPokemon.js
2. At least one component with state
    - App.js uses useState for count and list
    - PokeList.js uses useState for Pokemon and limit
3. At least one component with props
    - All child components except for EmptyTeam.js uses props
4. At least 1 API call
    - PokeList.js calls the PokiAPI twice (once to get all the pokemons and again to get pokemon info)
5. Include CSS with compoenents
    - Most of the project uses Tailwind CSS
    - There is also some inline CSS in App.js
6. One user interactive element
    - Every pokemon has a button that adds it to the team
    - There is a button to load more pokemon from pokeAPI
    - Every pokemon on the team has a button to remove it from the team
7. Load images of each pokemon
    - Done ✓
    - API call in PokeList.js and images used in Pokemon.js

### Pick 2:
1. Store a team on Firebase
    - Cannot have more than 6 pokemons on a team
    - Cannot have duplicate pokemon on a team
2. Use at least 3 anonymous arrow functions
    - Pokemon.js has 2 arrow functions
    - App.js has 4 arrow functions
