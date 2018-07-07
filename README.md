# [NBA STATS API](https://stats.nba.com/)
WordPress Theme uses [Sage 9](https://roots.io/sage)


## Home Page Table Structure

| No | Player's Full Name |  Pos |  Age | HT | Wt | College Name | Current Salary |
| ------ | ------ | ------ | ------ | ----- |  ------ | ------ |  ------ |
| 13 | Quincy Acy |  F |  28 | 6.7 | 240 | Baylor | $1.79 million |

## WordPress Theme Path
All theme files are under `WP_THEME`
`WP_THEME` = ~/site/web/app/themes/nbastats.com/

### ES6 Components Path

 All Components  can be found under `/WP_THEME`/resources/assets/scripts/components

#### ES6 Template Files

 | All players Template | Single Player Template  |  Single Player Banner Image |
 | ------ | ------ | ----- |
  `/WP_THEME`/resources/assets/scripts/templates/players-template.js |  `/WP_THEME`/resources/assets/scripts/templates/player-template.js | `/WP_THEME`/resources/assets/scripts/player-single.js |

 ### Blade Templates Path

Sage 9 uses Laravel's `Blade` template engine to render views.
All `Blade` templates can be found under : `/WP_THEME`/resources/views/partials/components

## Todos
- Register own google maps api endpoint with WP REST API.
- Restrict Access to the API
- Save NBA json reposnse as a file to the server and set a cron job to refresh the results to avoid making unnecessary calls to the API.
- Use React to handle state
- Refactor Dropdown sort-by