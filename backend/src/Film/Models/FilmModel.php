<?php

namespace Film\Models;

use Film\Model;

class FilmModel extends Model {
	/**
	 * @throws \Doctrine\DBAL\DBALException
	 */
	public function text() {
		$query = $this->query::getInstance();
		return $query->select('*')->from('sessions')->fetch()->first();
	}
}
