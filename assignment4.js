
		function validation()
		{
				var f_name=document.getElementById('first_name').value;
				var f_len=f_name.length;
				var m_name=document.getElementById('middle_name').value;
				var m_len=m_name.length;
				var l_name=document.getElementById('last_name').value;
				var l_len=l_name.length;

				var age=document.getElementById('age').value;
				var gen = document.getElementsByName("gender");
				var mob=document.getElementById('mob').value;
				var mob_len=mob.length;
				var Mobile_mob_p = /^[1-9]{1}[0-9]{9}$/; 

				var email=document.getElementById('email').value;
				var Email_pattern =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


				var pass=document.getElementById('pass').value;
				var pass_len=pass.length;
				var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;  
				//Note::=which contain at least one numeric digit, one uppercase, and one lowercase letter"



				if(f_name=="")
				{
					document.getElementById('e_f_name').innerHTML="Pls Enter a first name ?";
					return false;
				}
				else if(f_len<=2)
				{
					document.getElementById('e_f_name').innerHTML="Enter name must be 3 charcters";
					return false;
				}
				else
				{
					document.getElementById('middle_name').focus();
					document.getElementById('e_f_name').innerHTML="";
				}

				if(m_name=="")
				{
					document.getElementById('e_m_name').innerHTML="Pls Enter a middle name ?";
					return false;

				}
				else if(m_len<=2)
				{
					document.getElementById('e_m_name').innerHTML="Pls enter 3 chacters";
					return false;
				}
				else
				{
					document.getElementById('last_name').focus();	
					document.getElementById('e_m_name').innerHTML="";
				}

				if(l_name=="")
				{
					document.getElementById('e_l_name').innerHTML="Pls Enter a last name ?";
					return false;
				}
				else if(l_len<=2)
				{
					document.getElementById('e_l_name').innerHTML="Pls enter 3 chacters";
					return false;
				}
				else
				{
					document.getElementById('age').focus();
					document.getElementById('e_l_name').innerHTML="";
				}


				if(document.getElementById('age').selectedIndex==0)
					{
						document.getElementById('e_age').innerHTML="Pls select age";
						return false;	
					}
				else
				{
					document.getElementById('gender').focus();
					document.getElementById('e_age').innerHTML="";
				}






				if(gen[0].checked == true)
				{
					document.getElementById('mob').focus();
					document.getElementById('e_gen').innerHTML="";
				}
				else
				{
					document.getElementById('e_gen').innerHTML="pls Select Gender ?";
					return false;
				}

				if(mob=="")
				{
					document.getElementById('e_mob').innerHTML="Pls Enter Mobile Number";
					return false;
				}
				else if(!mob.match(Mobile_mob_p))
				{
					document.getElementById('e_mob').innerHTML="Pls Enter Valid mobile Number ";
					return false;
				}
				else
				{
					document.getElementById('email').focus();
					document.getElementById('e_mob').innerHTML="";
				}

				if(email=="")
				{
					document.getElementById('e_email').innerHTML="Pls Enter a email id";
					return false;
				}
				else if(!email.match(Email_pattern))
				{
					document.getElementById('e_email').innerHTML="Pls Enter valid Emial Id pattern";
					return false;
				}
				else
				{
					document.getElementById('pass').focus();
					document.getElementById('e_email').innerHTML="";
				}


				if(pass=="")
				{
					document.getElementById('e_pass').innerHTML="Pls Enter a password ";
					return false;
				}
				else if(pass_len<8)
				{
					document.getElementById('e_pass').innerHTML="pls enter minimum 8 charcters";
					return false;
				}
				else if(pass_len>20)
				{
					document.getElementById('e_pass').innerHTML="pls enter a password less then 20 chacters";
					return false;
				}
				else if(!pass.match(passw))
				{
					document.getElementById('e_pass').innerHTML="which contain at least one numeric digit, one uppercase, and one lowercase letter";
					return false;
				}
				else
				{
					alert('Next');
				}
		}
	