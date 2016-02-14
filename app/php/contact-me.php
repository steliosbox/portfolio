<?
    $data = array();

    require_once "PHPMailer/PHPMailerAutoload.php";


    function mailSend(){ 
        $mail = new PHPMailer;

        $mail->setFrom('from@example.com', 'Mailer');
        $mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient

        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = 'Here is the subject';
        $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    }

    

    if(!$mail->send()) {
        $data['message'] = 'Message could not be sent.';
        $data['message'] .= 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        $data['status'] = 'success';
        $data['message'] = 'Message has been sent';
    }

    $data['status'] = 'success';
    header('Content-Type: application/json');

    
    echo json_encode($data);

    exit;
?>
