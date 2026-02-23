const Yes = document.getElementById('Yes');
            const No = document.getElementById('No');
            const LogIn = document.getElementById('Login');
            const LoginForm = document.getElementById('LoginWelcome');
            const Home = document.getElementById('Home');

            const HomePage = document.getElementById('HomeNav');

            const CreateBtn = document.getElementById('CreateBtn');

            const CreateAcc = document.getElementById('CreateAcc');



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
