<?php

/**
 * @file
 * Provides support for the Views module.
 */
function salon_views_query_alter(&$view, &$query) {
	if ($view->name == "test") {
		foreach ($query->table_queue as $table) {
			if ($table['join']) {
				$table['join']->type = 'INNER';
			}
		}
		$query->distinct = 0;
	}
//	if ($view->name == 'test') {
//		if ($view->current_display == 'page') {
//			if (!user_access('administer site configuration')) {
//				$admins = salon_views_users_by_role('administrator');
//				$query->where[1]['conditions'][] = array(
//					'field' => 'node.uid',
//					'value' => array(array_keys($admins)),
//					'operator' => 'NOT IN',
//				);
//			}
//		}
//	}
}

function salon_views_users_by_role($role_name) {
	$role = user_role_load_by_name($role_name);
	$query = 'SELECT ur.uid
    FROM {users_roles} AS ur
    WHERE ur.rid = :rid';
	$result = db_query($query, array(':rid' => $role->rid));
	$uids = $result->fetchCol();
	return user_load_multiple($uids);
}