<?php
namespace Film\Controllers;

use API\Session;
use Film\Controller;
use Film\Helpers\MainHelper;

class MainController extends Controller {

	/**
	 * @throws \Exception
	 */
	public function default()
	{
		/** @var \Film\Models\FilmModel $model */
		$model = $this->getModel("Film");
		$helper = new MainHelper();
		return [$model->text(),$helper->help(), $this->session,];
	}
	public function test() {
		$session = Session::getInstance();
		return [$session->set("test", time()), $session->get('test')];
	}
}
