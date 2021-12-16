<?php
    $conn = new mysqli('localhost', 'root', '', 'angular');
    
    $data = json_decode(file_get_contents("php://input"));

    $out = array('error' => false, 'firstname' => false, 'lastname' => false, 'address' => false);

    $firstname = $data->firstname;
    $lastname = $data->lastname;
    $address = $data->address;

    if(empty($firstname)){
        $out['firstname'] = true;
        $out['message'] = 'Firstname is required'; 
    } 
    elseif(empty($lastname)){
        $out['lastname'] = true;
        $out['message'] = 'Lastname is required'; 
    }
    elseif(empty($address)){
        $out['address'] = true;
        $out['message'] = 'Address is required'; 
    }
    else{
        $sql = "INSERT INTO members (firstname, lastname, address) VALUES ('$firstname', '$lastname', '$address')";
        $query = $conn->query($sql);

        if($query){
            $out['message'] = 'Member Added Successfully';
        }
        else{
            $out['error'] = true;
            $out['message'] = 'Cannot Add Member';
        }
    }
        
    echo json_encode($out);
?>