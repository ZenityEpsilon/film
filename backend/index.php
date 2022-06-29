<?php
require 'bootstrap.php';
error_reporting(1);
use API\App;
$app = App::getInstance();
$app->init()->execute();

