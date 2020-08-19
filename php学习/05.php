<meta charset="utf-8">
<?php
	// 1~100之间的偶数
	for($a = 1; $a <= 100; $a++) {
		if($a % 2 == 0){
			// .就相当于连字符
			echo $a."<br/>";
		}	
	}
?>