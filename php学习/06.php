<meta charset="utf-8">
<?php
	// 全局变量
	$c = 1000;
	// 函数声明部分
	function sum($a, $b) {
		// 如果想在函数体中使用全局变量，必须要用global关键字声明
		global $c;
		return $a + $b + $c;
	}
	// 函数调用
	echo sum(100, 666);
?>