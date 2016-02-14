<?
    require 'PHPMailer/PHPMailerAutoload.php';

    $mail = new PHPMailer;

    $data = array();
    

    if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
        $data['status'] = 'error';
        $data['message'] = 'Заполните все поля!';
    }
    else {
        
        $mail = new PHPMailer;

        $mail->setFrom('admin@technofreedom.ru', 'Stelios Baglaridis');
        $mail->addAddress($_POST['email'], $_POST['name']);     // Add a recipient

        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = 'Here is the subject';
        $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
        if(!$mail->send()) {
            $data['status'] = 'error';
            $data['message'] = 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            $data['status'] = 'success';
            $data['message'] = 'Письмо удачно отправлено!';
        }
    }

    header('Content-Type: application/json');

    echo json_encode($data);

    exit;
?>