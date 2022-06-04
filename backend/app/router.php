<?php
namespace APP;

/**
 * Class Router
 * @package APP
 */
class Router {
	/**
	 * Application visitor session location
	 * @var string
	 */
	private $location = 'api';

	/**
	 * Parse request method
	 * @param $path
	 * @param array $params
	 * @return array
	 */
	public function parse($path, &$params = []) {
		$method = 'default';
		$parts = explode('.', $path);

		if (count($parts) > 1) $method = array_pop($parts);

		return [
			'class' => implode('', [
				'\\Film\\Controllers\\', implode('\\', $parts), 'Controller'
			]),
			'method' => $method
		];
	}

	/**
	 * Get application visitor session location
	 * @return string
	 */
	public function getSessionLocation() {
		return $this->location;
	}

	/**
	 * Set application visitor session location
	 * @param string $location
	 */
	public function setLocation(string $location) {
		$this->location = $location;
	}
}
