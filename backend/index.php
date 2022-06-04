<?php
require 'bootstrap.php';
error_reporting(0);
use API\App;
$app = App::getInstance();
$app->init()->execute();

