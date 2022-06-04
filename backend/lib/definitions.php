<?php
/**
 * Class autoload principle
 *
 * @noinspection PhpIncludeInspection
 */
spl_autoload_register(function ($class) {
	$parts = explode('\\', $class);
	$namespace = array_shift($parts);
	switch ($namespace) {
		case 'Film':
			$file = PATH_ROOT."/src/Film/".implode("/", $parts).".php";
			if (is_file($file)) {
				require_once $file;
			}
			break;
		default:
			throw new \Exception('Unknown namespace ' . $class);
	}
});

/**
 * Global exception handler
 */
set_exception_handler('API\Exception::global_handler');
set_error_handler(function () {}); // todo set_error_handler

/**
 * Load configuration
 */
if (is_file(PATH_ROOT."/.env")) {
	$dotenv = Dotenv\Dotenv::createMutable(PATH_ROOT);
	$dotenv->load();

	if (isset($_ENV['APP_ENV'])) {
		$paths = [
			'APITesting' => PATH_INCLUDES,
			'APPTesting' => PATH_ROOT,
		];
		foreach (Dotenv\Dotenv::createArrayBacked($paths[$_ENV['APP_ENV']] . '/tests')->load() as $key => $value) {
			$_ENV[$key] = $value;
		}
	}
}

/**
 * Enable system errors
 */
if (isset($_ENV['SYS_DEBUG']) && $_ENV['SYS_DEBUG'] == 'true') {
	ini_set('display_errors', '1');
	ini_set('display_startup_errors', '1');
	error_reporting(E_ALL);
}
