const Yes = document.getElementById('Yes');
            const No = document.getElementById('No');
            const LogIn = document.getElementById('Login');
            const LoginForm = document.getElementById('LoginWelcome');
            const Home = document.getElementById('Home');

            const HomePage = document.getElementById('HomeNav');

            const CreateBtn = document.getElementById('CreateBtn');

            const CreateAcc = document.getElementById('CreateAcc');

            const Age = document.getElementById('Age');
            const FullName = document.getElementById('Fullname');
            const Email = document.getElementById('Email');
            const Password = document.getElementById('Password');
            const CEmail = document.getElementById('Cemail');
            const Cpassword = document.getElementById('Cpassword');

            let Storage = JSON.parse(localStorage.getItem('users')) || [];


            document.getElementById('CreateAccount').addEventListener('click', () =>
            {
                if ( 
                    FullName.value.trim() === "" ||
                    Age.value.trim() === "" ||
                    Email.value.trim() === "" ||
                    Password.value.trim() === "" 
                ) {  document.getElementById('message').style.display = "flex";
                     document.getElementById('message').textContent = 'Please fill in all field';
                      document.getElementById('message').style.color = "red";
                      document.getElementById('message').style.top = '15%';
                    document.getElementById('CreateAccount').pointerEvents = "none";
                
                } else{

                const user = {
                    name: FullName.value,
                    age: Age.value,
                    password: Password.value,
                    email: Email.value,
                };

                document.getElementById('CreateAccount').pointerEvents = 'auto';

                Storage.push(user);
                localStorage.setItem('users', JSON.stringify(Storage));

                document.getElementById('message').style.display = "flex";
                Home.style.display = 'none';
                LoginForm.style.display = 'none';
                CreateAcc.style.display = "none";

                setTimeout(() => {
                    document.getElementById('message').style.display = "none";
                     Home.style.display = 'flex';
                LoginForm.style.display = 'none';
                 document.getElementById('AgeVerify').style.display = 'none';
                
                }, 10000);
            } }); 

            Yes.addEventListener('click',  () => {
                document.getElementById("Home").style.filter = 'blur(0)';
                 document.getElementById("Home").style.pointerEvents = "auto";
                document.getElementById('AgeVerify').style.display = 'none';
                document.getElementById('NavBar').style.pointerEvents = 'auto';
            });

            No.addEventListener('click', () => {
            window.location.href = 'https://youtube.com'; });

            
            HomePage.addEventListener('click', () =>
            {
                Home.style.display = 'flex';
                LoginForm.style.display = 'none';
            });

            
            Login.addEventListener('click', () => {
                LoginForm.style.display = 'flex';
                Home.style.display = 'none';

            });

            CreateBtn.addEventListener('click', () =>
            {
                Home.style.display = "none";
                CreateAcc.style.display = " flex";
                LoginForm.style.display = "none";
            });

            
