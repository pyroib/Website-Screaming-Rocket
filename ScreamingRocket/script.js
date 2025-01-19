function Openme(newin) {
        flyout=window.open(newin,"flyout","resizable=no,scrollbars=yes,width=400,height=500,top=2,right=2")
}

var menu = new Array (
"</td></tr><tr><td align='center'><img src='rocket.gif' alt='Screamingrocket.com.au' align='center' border='0' />"
,"<form method='POST' action='http://www.screamingrocket.com.au/cgi-bin/FormMail.pl' name='newsletter'>"

,"<img src='scream_menu.gif' alt='screamingrocket.com.au' />"
,"<a href='/index.html'><img src='home.gif' alt='Home' border='0' /></a>"
,"<a href='/shop.html'><img src='shop.gif' alt='Shop' border='0' /></a>"
,"<a href='http://ww5.aitsafe.com/cf/review.cfm?userid=74128359'><img src='cart.gif' alt='View your Shoping Cart' border='0' /></a>"
,"<a href='http://ww5.aitsafe.com/cf/review.cfm?userid=74128359'><img src='check_outs.gif' alt='Pay for your Purchases' border='0' /></a>"
,"<a href='/shipping.html'><img src='shipping.gif' alt='Shipping' border='0' /></a>"
,"<a href='/policies.html'><img src='policies.gif' alt='Screamingrocket policies' border='0' /></a>"
,"<a href='/contact_us.html'><img src='contactus.gif' alt='Contact Screamingrocket.com.au' border='0' /></a>"
,"<input type='hidden' name='recipient' value='news@screamingrocket.com.au'>"
,"<img src='menu_bottom.gif' alt='' border='0' />"
,"<input type='hidden' name='subject' value='SR Newsletter Subscription'>"
,"<input type='hidden' name='env_report' value='REMOTE_HOST,HTTP_USER_AGENT,REMOTE_ADDR'>"
,"<input type='hidden' name='required' value='emailAddr'>"
,"<img src='news1.gif' alt='' border='0' />"
,"<input type='hidden' name='redirect' value='http://www.screamingrocket.com.au/bignews_thanks.html'>"
,"<a class='bottom'>E-mail Address</a>"
,"<input name='emailAddr' type='text' value size='20'>"
,"<a class='subform'><input type='radio' name='big_news' value='big_news_sub' checked>Subscribe"
,"<input type='radio' name='big_news' value='big_news_unsub'>Unsubscribe</a>"
,"<a href=# onclick=Openme('/privacy.html') class='welcome'>Privacy Policy</a>"
,"<input type='image' src='submit.jpg' alt='Sign Up' align='right' value='Submit' />"
,"<img src='news2.gif' alt='' border='0' />"
,"<a class='bottom'>© Screaming Rocket</a>"
,"</form>"
,"</td></tr><tr><td align='center' height='100'>"
,"<a class='bottom' href='http://validator.w3.org/check/referer'><img src='w3c.gif' alt='Valid XHTML 1.0!' height='31' width='88' border='0' /></a>"
,"");

for (var x=0; x < menu.length; x++)
{
document.write(menu[x]+"<br />");
}

