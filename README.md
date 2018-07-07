# [NBA STATS API](https://stats.nba.com/)

WordPress Theme uses [Sage 9](https://roots.io/sage)

## Home Page Table Structure

| No | Full Name |  Position |  Height | Age | College Name | Current Salary |
| ------ | ------ | ------ | ------ |  ------ | ------ |  ------ |
| 45 | John Doe |  G |  6. 9 | 23 | Baylor | $25,000 |

## WordPress Theme Path
All theme files are under `WP_THEME`

`WP_THEME` = ~/site/web/app/themes/nbastats.com/

### ES6 Components Path

 All Components |
| ----- |
 `/WP_THEME`/resources/assets/scripts/components |

 ### Blade Templates Path

Sage 9 uses Laravel's `Blade` template engine to render views.
All `Blade` templates can be found under : `/WP_THEME`/resources/views/partials/components

### JS Players File Paths

All players are rendered within a table on the home page.

#### ES6 Template Files

` WP_THEME` | All players Template | Single Player Template  |  Single Player Banner Image |
| ----- | ------ | ------ | ----- |
 ~/site/web/app/themes/nbastats.com|  `/WP_THEME`/resources/assets/scripts/templates/players-template.js |  `/WP_THEME`/resources/assets/scripts/templates/player-template.js | `/WP_THEME`/resources/assets/scripts/player-single.js |
