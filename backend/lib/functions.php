<?php

function dbg($var, $exit = true) {
	echo "<pre>".print_r($var, true)."</pre>";
	if ($exit) exit();
}
