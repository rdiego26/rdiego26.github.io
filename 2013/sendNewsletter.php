<?php

	if($_SERVER['REQUEST_METHOD'] == "POST"){

		$email =  $_POST['email'];
		$emailsender = 'rdiego26@gmail.com';
		/*$emailsender = 'contato@diegoramos.info';*/
		$quebra_linha = "\r\n";

		$email_to   = $email;
		$conteudo = '<html xmlns="undefined">

						<body bgcolor="#373335">

						<!-- 100% -->
						<table align="left" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#373335">
						<tbody>
						<tr><td height="40"></td></tr>
						<tr>
						<td>

							<!-- 710px -->
							<table align="center" width="710" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF">
							<tbody>
							<tr><td height="40"></td></tr>
							<tr>
							<td>
							
							<table align="center" width="650" cellspacing="0" cellpadding="0" border="0">
							<tbody>
							<tr>
								<td width="230" align="center"><a href="http://www.diegoramos.com.br" target="_blank" title="Visite nosso Site"><img src="http://www.guilhermeborba.com.br/jobs/diegoramos/static/images/logo.png" alt="Diego Ramos" /></a></td>
								<td width="420" align="right"><span style="font-family:Times New Roman, serif; font-size:30px; color:#333333; letter-spacing:-1px; text-shadow:0px 1px 1px #F8F8F8;">Cadastro enviado com sucesso!</span></td>
							</tr>
							</tbody>
							</table> 
							
							<table align="center" width="650" cellspacing="0" cellpadding="0" border="0">
							<tbody>
							<tr><td height="20"></td></tr>
							<tr><td height="2" bgcolor="#CCCCCC"></td></tr>
							</tbody>
							</table>
							
							<table align="center" width="650" cellspacing="0" cellpadding="0" border="0">
							<tbody>
							<tr>
							<td>
								<p style="font-family:Times New Roman, serif; font-size:28px; color:#333333; letter-spacing:-1px; text-shadow:0px 1px 1px #F8F8F8;">Olá, <span style="color:#373335;">'.$email.'</span>!</p>
								<p style="font-family:Times New Roman, serif; font-size:28px; color:#333333; letter-spacing:-1px; text-shadow:0px 1px 1px #F8F8F8;">Recebemos sua solicitação de inscrição em nossa newsletter.</p>
								<p style="font-family:Times New Roman, serif; font-size:28px; color:#333333; letter-spacing:-1px; text-shadow:0px 1px 1px #F8F8F8;">Em breve você estará recebendo em seu email nossas novidades</p>
								<p style="font-family:Times New Roman, serif; font-size:28px; color:#333333; letter-spacing:-1px; text-shadow:0px 1px 1px #F8F8F8;">&nbsp;</p>
								<p style="font-family:Times New Roman, serif; font-size:18px; color:#333333; letter-spacing:-1px; text-shadow:0px 1px 1px #F8F8F8;">Atenciosamente,<br />
							    Diego Ramos<a style="color:#373335; text-decoration:none;" href="http://www.diegoramos.com.br" title="Acesse nosso site"></a></p>
							</td>
							</tr>
							</tbody>
							</table>
							
							</td>
							</tr>
							<tr><td height="40"></td></tr>
							</tbody>
							</table>
							<!-- 710px -->

						</td>
						</tr>
						<tr><td height="30"></td></tr>
						</tbody>
						</table>
						<!-- 100% -->

						</body>

					</html>';
		$headers = "MIME-Version: 1.1" .$quebra_linha;
		$headers .= "Content-type: text/html; charset=iso-8859-1" .$quebra_linha;
		$headers .= "From: " . $emailsender.$quebra_linha;
		$headers .= "Reply-To: " . $email . $quebra_linha;
		$headers .= 'Bcc: rdiego26@gmail.com' . $quebra_linha;
		/*$headers .= 'Bcc: contato@diegoramos.info' . $quebra_linha;*/
		$assunto = "$email, seu cadastro foi enviado com sucesso - [diegoramos.info]";

		if(!mail($email_to, $assunto, $conteudo, $headers ,"-r".$emailsender)){ // Se for Postfix
			$headers .= "Return-Path: " . $emailsender . $quebra_linha; // Se "não for Postfix"
			if(mail($email_to, $assunto, $conteudo, $headers )){
				$send=1;
			}
		}else{
			$send=2;
		}

		echo "<script>location.href='news-ok.html'</script>";
	}	
?>