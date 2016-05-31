<?php

/**
* Menu callback provides a simple list of nodes matching the
* search term Example: hitting the URL:
*   http://domain.com/mysearch/example
* will return a list of links to nodes which have the word
* example in them.
*/
function mysearch_searchpage($searchterm) {
  
  $title = t('Search for !term', array('!term' => $searchterm));
  drupal_set_title($title);
  
  $result = search_data($searchterm, 'node', NULL);
  
  $html_list  = '';
  
  if ($result['#results']) {//If we have results, compose list
    $type = 'ul';
    $attributes = array(
      'id' => 'my-custom-search',
    );
    $items = array();
    foreach($result['#results'] as $record) {
      $items[] = array(
        'data' => l(t($record['title']),"node/" . $record['node']->nid, array('attributes' => array('title' => $record['title']))),
        'id' => $record['node']->nid,
      );
    }
    $html_list = theme_item_list(array('items' => $items, 'title' => NULL, 'type' => $type, 'attributes' => $attributes));
  }
  
  return theme('mysearch_layout', array('data' => array('results' => $html_list, 'term' => $searchterm)));

}