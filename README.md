
“Mysearch” module code refactoring + SALON repo merge:

- Use definition in hook_menu for arguments
- Define title dynamically in .inc file
- Was added required mysearch.info file with short module description
- callback function was moved to mysearch.inc file. In .module file we place hooks and common logic, other functionality  we move to other internal files
- Remove custom query for search, instead we use certified core search module function 
- Remove html from module function< move it in template file
- Use instead html tags ‘<a>...</a>’, <‘ul><li...</ul>’ predefined drupal theme and constructions l(), theme_item_list(), t()...


