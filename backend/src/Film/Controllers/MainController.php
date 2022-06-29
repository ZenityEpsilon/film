<?php
namespace Film\Controllers;

use API\Session;
use Film\Controller;
use Film\Helpers\MainHelper;

class MainController extends Controller
{
	/**
	 * @throws \Exception
	 */
	public function default()
	{
		/** @var \Film\Models\FilmModel $model */
		$model = $this->getModel("Film");
		$helper = new MainHelper();
		return [$model->text(), $helper->help(), $this->session];
	}
	public function test()
	{
		$session = Session::getInstance();
		return [$session->set("test", time()), $session->get("test")];
	}

	public function meta()
	{
		$this->addMutation("meta/setItems", [
			"ua" => [
				"index" => [
					"title" => "Головна",
					"meta" => [
						[
							"hid" => "description",
							"name" => "description",
							"content" => "А я хуй його знає",
						],
						[
							"hid" => "og:description",
							"name" => "og:description",
							"content" => "Аналогічно",
						],
					],
				],
			],
			"ru" => [
				"index" => [
					"title" => "Главная",
					"meta" => [
						[
							"hid" => "description",
							"name" => "description",
							"content" => "Текст на русском",
						],
						[
							"hid" => "og:description",
							"name" => "og:description",
							"content" => "Тот же текст",
						],
					],
				],
			],
		]);
	}
}
