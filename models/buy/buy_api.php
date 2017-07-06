<?php
 require_once '../../common/comment/config.php';
 $pid=$_GET['pid'];

$query=mysql_query("select * from xcf_product where pid in (".$pid.")");

  
while ($row=mysql_fetch_array($query)) {
	
	$sayList = array(

	
		'pid'=>$row['pid'],
		'cid'=>$row['cid'],
		'pname'=>$row['pname'],
		'pnum'=>$row['pnum'],
		'shop_price'=>$row['shop_price'],
		'pimage'=>$row['pimage'],
		'pdesc'=>$row['pdesc'],
		'pdate'=>$row['pdate'],
		'is_hot'=>$row['is_hot']
		
      );
}

echo $_GET['jsoncallback']."(".json_encode($sayList).")"

?>