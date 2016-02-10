<?
    
    $data = array();
    

    if(empty($_POST['project-name']) || empty($_POST['project-url']) || empty($_POST['project-desc'])) {
        $data['status'] = 'error';
        $data['message'] = 'При добовление проекта произошла ошибка';
    }
    else {
        $data['status'] = 'success';
        $data['message'] = 'Добавление проекта прошло успешно';
    }

    header('Content-Type: application/json');

    echo json_encode($data);

    exit;
?>