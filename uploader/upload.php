<?php

header('Content-type: application/json');

$valid_exts = array('zip', 'tar.gz', 'rar', 'bz2','txt'); // valid extensions
$path = 'uploads/'; // upload directory

if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
	if( @is_uploaded_file($_FILES['image']['tmp_name']) ) {
		$ext = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));
//		if(in_array($ext, $valid_exts)){
			$path = $path . uniqid(). '__' .$_FILES['image']['name'];//relativepath/13123.ext
			if (move_uploaded_file($_FILES['image']['tmp_name'], $path)) {
				$result = 'Image successfully uploaded!';
			} else {
				$result = 'error!';
			}
//		} else {
//			$result = 'Upload Fail: Unsupported file format';
//		}
	} else {
		$result = 'Upload Fail: File not uploaded!';
	}
} else {
  $result = 'Bad request!';
}


// echo out json encoded result
echo json_encode(array('resultado' => $result));

?>
