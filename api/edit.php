<?php
    $conn = new mysqli('localhost', 'root', '', 'angular');
    
    $data = json_decode(file_get_contents("php://input"));

    $out = array('error' => false);

    $firstname = $data->firstname;
    $lastname = $data->lastname;
    $address = $data->address;
    $memid = $data->memid;

   	$sql = "UPDATE members SET firstname = '$firstname', lastname = '$lastname', address = '$address' WHERE memid = '$memid'";
   	$query = $conn->query($sql);

   	if($query){
   		$out['message'] = 'Member updated Successfully';
   	}
   	else{
   		$out['error'] = true;
   		$out['message'] = 'Cannot update Member';
   	}

    echo json_encode($out);
?>