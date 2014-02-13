<h2><?php print t('Search for "!term"', array('!term' => $data['term'])); ?></h2>
<?php if($data['results']):  ?>
  <?php print $data['results']; ?>
<?php else: ?>
  <?php print t('No results! Try another search term, please!'); ?>
<?php endif; ?>
