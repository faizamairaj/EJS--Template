EJS Template ka matlab hai:
Embedded JavaScript Template<br/>

EJS Template aik aisi technique hai jo HTML ke andar JavaScript ka code likhne ki ijazat deti hai.<br/>

Asan Alfaaz mein:<br/>
Jab tum web page bana rahe ho aur chahte ho ke HTML ke andar JavaScript ka use karo (jaise loop, condition ya data dikhana), to tum EJS ka istemal karti ho.<br/>

Misal:<br/>
ejs<br/>
Copy<br/>
Edit<br/>
<h1>Welcome <%= userName %></h1>  <br/>
Yeh code ka matlab hai: <br/>
Agar userName ki value "Faiza" hai to HTML mein ye dikhega: <br/>

html <br/>
Copy <br/>
Edit <br/>
<h1>Welcome Faiza</h1> <br/>
EJS ka istemal kahan hota hai? <br/>
Jab tum Node.js aur Express.js ka backend bna rahi hoti ho. <br/>
Jab tum dynamic (data se change hone wala) web page banana chahti ho. <br/>


Node js commands: <br/>
npm init -y <br/>
npm install express <br/>
npm install ejs <br/>
npm install nodemon -w <br/>
npm start <br/>


<h1>This is  about </h1>
<%- include('partials/header') %>


   

   <!-- <div>
         <%  {myCourse.forEach((course) => { %>
                <p> <%=course %> </p>
           <% })} %>
        </div> -->