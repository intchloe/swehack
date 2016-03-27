/* 


This file should be called in the posting_editor.html and have this:
<!-- IF S_PRIVMSGS --> onclick="return submit_by_id();" <!-- ENDIF -->
in the "Send"-button. Like this:

<input type="submit" accesskey="s"  <!-- IF S_PRIVMSGS --> onclick="return submit_by_id();" <!-- ENDIF --> tabindex="6" name="post" value="{L_SUBMIT}" class="button1 default-submit-action" />


*/


function submit_by_id() { 

var t = document.getElementById('message').value; 
if (!t.startsWith("-----BEGIN PGP MESSAGE-----")) { 
  return confirm("Du skickar detta meddelande i klartext! Kolla på mottagarens profil om du kan hitta medlemmens Keybase och kryptera meddelandet med deras nyckel. Vill du skicka det ändå?"); 
  }
}
