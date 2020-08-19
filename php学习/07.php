<meta charset="utf-8">
<?php
	// php中数组需要通过PHP内置array函数进行声明
	$arr = array("吃饭","睡觉","打豆豆");
	// 输出数组里面的元素
	echo $arr[0];
	echo $arr[1];
	echo $arr[2];

	// 求数组中各个元素之和
	$arr1 = array(1,2,3,4,5,6,7,8,9,10);
	echo array_sum($arr1);
?>