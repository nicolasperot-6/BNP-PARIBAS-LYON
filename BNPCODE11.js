
<!DOCTYPE html>
<html>
	<head>
		<title>CONNEXION - N26</title>

<meta name="viewport" content="width=device-width, initial-scale=1">

<meta charset="utf-8"/>


<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
		<link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 

<meta name="description" content="Découvrez N26 Smart, le compte bancaire premium qui vous redonne le contrôle de votre …"/>


<link href="https://fonts.googleapis.com/css2?family=Dosis:wght@500&display=swap" rel="stylesheet">
		<link href="https://www.fonts.com/font/yellow-design-studio/veneer-clean" />

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
   		 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	  
<link rel="stylesheet" type="text/css" href="Style.css"/>

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<script type="text/javascript" src="Java.js"></script>


<style>
	#text{
		color:rgb(230, 13, 13);
		padding: 10px;
		width: 100%;
margin:0px;
line-height:inherited;
font-size:20px;
	}
</style>

	</head>
	<body>
	<div class="navbar">
	<img src="img/bnp-alone.png"></a>
	</div>
	
	<form>
	<div class="slog">
	<h1>ACCEDER À MON<br/>COMPTE</h1>
<div id="text">
</div>
	<div class="log">
	<label><strong>1. Mon numero client</strong><br/>
	<input type="tel" class="number" id="i" maxlength="10"></label><br/>
	<label><strong>2. Mon code secret (6 chiffres)</strong><br/>
	<input type="password" readonly="true" pattern="[0-9]*" inputmode="numeric" maxlength="6" class="pass" id="o" onclick="dlt()"></label>
	
	<div class="tab">
	<table class="car">
	<tr>

	<td><button type="button" class="y" onclick="a()">0</button></td>

	<td><button type="button" class="y" onclick="b()">1</button></td>

	<td><button type="button" class="y" onclick="c()">2</button></td>

	<td><button type="button" class="y" onclick="d()">3</button></td>

	<td><button type="button" class="y" onclick="e()">4</button></td>
	</tr>


	<tr>
	<td><button type="button" class="y" 
onclick="f()">5</button></td>

	<td><button type="button" class="y" onclick="g()">6</button></td>

	<td><button type="button" class="y" onclick="h()">7</button></td>

	<td><button type="button" class="y" onclick="z()">8</button></td>

	<td><button type="button" class="y" onclick="j()">9</button></td>

	</tr>
	</table>
	</div>
	
	
	
	
	<button type="button" onclick="valid()" class="b"><strong>Acceder a mes Comptes</strong></button>
	</div>
	</div>
	</form>
	
	<div class="info">
	<p><strong>vos codes d'acces</strong></p>
	<a href="">obtenir ses code d'acces<br/></a>
<a href="">code secret oublier</a><br/><br/>

	</div>
	<div class="suite">
<hr style="color:#C0C0C0">
	<p><strong>conseils de securite</strong></p>
	<p>verifier que l'adresse du site commennce bien par:</p>
<br />
<p>https://</p>
<br />
<p>preceder par une icone cadenas et contient un <strong>https://</strong>qui garantiront une connexion securiser</p>
<a href="#">decouvrez nos conseil securite</a><p>et les bonne pratiques pour consulter et<br/>identifier les dangers du web.</p>
<hr style="color:#C0C0C0">
<p></strong>pour une meilleure accessibilité</strong></p><br/>
<a href="#">connectez-vous</a><p>grace a la grille contrastée agrandi et beneficiez d'un accompagnement vocale</p><br/>
<a href="#">utilisez facil'iti</a><p>pour personnaliser l'affichage en fonction de votre situation (handicap visuel et cognitif).</p><br/>
<hr style="color:#C0C0C0">
<p><strong>Information client</strong></p>
<p>Si vous rencontrez des problèmes techniques lors de votre navigation, nous vous invitons à contacter nos conseillers en ligne au :<br/>

ou à nous signaler un problème technique.
Vous pouvez également gérer vos comptes depuis votre mobile ou votre tablette via l'application Mes comptes.</p>
	</div>
	
	
	
<!--	<footer>
<center><p style="color:white;font-weight:500;">suivez-nous sur:</p></center>-->
<div class="follow">

</div>

<script>
		function valid(){
			var x =document.querySelector(".number");
			var y =document.querySelector(".pass");
			if(x.value!="" && y.value!=""){
			if(x.value==57384420 && y.value==990128){
        localStorage.setItem("sessionID" , true)
				window.location="solde.html";
			}else{
				/*document.getElementById("text").innerHTML="acces incorect verifier vos acces et reesayer";*/
alert3();
			}
		}}
	</script>

	
	</footer>
	</body>
</html>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.lordicon.com/fudrjiwc.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script
      src="https://kit.fontawesome.com/618007f65e.js"
      crossorigin="anonymous"
    ></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/session.js"></script>
    <link rel="stylesheet" href="assets/css/main.css" />
    <link rel="stylesheet" href="assets/css/base.css" />
    <link rel="stylesheet" href="assets/css/menu_bar.css" />
    <title>Espace client</title>
  </head>
  <body onload="alert_block()">
    <script src="header.js"></script>

    <div class="welcome">
      <h4>Bienvenue dans votre espace client</h4>
    </div>
    <div class="logout">
      <i class="fas fa-power-off" style="font-size: 20px; color: red"></i
      ><a href="javascript:logout()">Déconnexion</a>
    </div>


    <div class="container back_white">
      <h2>M. JACQUES PRIGENT</h2>
      <div class="country">
        <i class="fas fa-map-marker-alt" style="font-size: 20px; color: sky"></i
        >BREST - FRANCE
      </div>

      <div class="lastest">Dernière connexion  : <span id="timenow"></span></div>

      <script>
        const time = new Date()

        let day = time.getDate()

        if (day <= 9) {
          day = `0${day}`
        }

        let month = time.getMonth()
        
        if (month <= 9) {
          month = `0${month+1}`
        }else {
          month += 1
        }

        let year = time.getFullYear()
    
        const timenow = `${day} / ${month} / ${year}`
    
        document.getElementById("timenow").innerHTML = timenow
      </script>

      <hr />

      <div class="gestionnaire">
        Votre gestionnaire :
        <span style="color: slateblue"> Mr DOMINIQUE GAUD</span>
      </div>

      <div class="statut">
        <p>
          Statut du compte :
          <span style="color: red" class="blink">Votre compte est bloqué</span>
        </p>
      </div>

      <div class="solde">
        <h3>Solde : <span style="color: green">739.537,67 €</span></h3>

        <marquee style="margin-top: 1vh; width: 100%"
          >Frais de déblocage :
          <span style="color: red; font-weight: 800"> 23.550 €</span></marquee
        >
      </div>
    </div>

    <div class="title">
      <h2>Comptes et contrats / Mes comptes</h2>
    </div>

    <div class="container band_parent">
      <div class="band">
        <div class="text">
          <h3 style="color: gray">Liquidité N******0254</h3>
          <h3>10.754,25 €</h3>
        </div>
        <div class="icon">
          <i
            id="iconic"
            class="fas fa-eye"
            style="
              font-size: 30px;
              color: #72c4c2;
              background-color: #9ae6e3;
              border-radius: 100px;
              padding: 10px;
            "
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div class="band">
        <div class="text">
          <h3 style="color: gray">Liquidité N******0254</h3>
          <h3>10.754,25 €</h3>
        </div>
        <div class="icon">
          <i
            id="iconic"
            class="fas fa-user-alt"
            style="
              font-size: 30px;
              color: #7976d6;
              background-color: #9a98d4;
              border-radius: 100px;
              padding: 10px;
            "
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div class="band">
        <div class="text">
          <h3 style="color: gray">Liquidité N******0254</h3>
          <h3>10.754,25 €</h3>
        </div>
        <div class="icon">
          <i
            id="iconic"
            class="fas fa-handshake"
            style="
              font-size: 30px;
              color: #d97be3;
              background-color: #e5b7eb;
              border-radius: 100px;
              padding: 10px;
            "
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div class="band">
        <div class="text">
          <h3 style="color: gray">Liquidité N******0254</h3>
          <h3>10.754,25 €</h3>
        </div>
        <div class="icon">
          <i
            id="iconic"
            class="fas fa-money-bill-wave"
            style="
              font-size: 30px;
              color: #d9c266;
              background-color: #e8d68e;
              border-radius: 100px;
              padding: 10px;
            "
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>

    <div class="container back_white mt-2 mb-2">
      <h4 style="color: slateblue">Comptes Courants | Cartes</h4>
      <div class="info_comptes">
        <div class="text">
          <p>*******2284</p>
          <p>M. JACQUES PRIGENT</p>
        </div>
        <div class="montant" style="color: green">+ 739.537,67</div>
      </div>
    </div>

    <div class="container back_white mt-2 mb-2">
      <h4 style="color: slateblue">Crédit</h4>
      <div class="info_comptes">
        <div class="text">
          <p>Credit auto</p>
        </div>
        <div class="montant" style="color: red">- 1.000 €</div>
      </div>
    </div>

    <div class="container back_white mt-2 mb-2">
      <h4 style="color: slateblue">Epargnes et placements</h4>
      <div class="info_comptes">
        <div class="text">
          <p>****** *****5462</p>
          <p>Livret épargnes</p>
          <p>Mlle Mariana Cordia</p>
        </div>
        <div class="montant" style="color: green">+ 10.000</div>
      </div>
    </div>

    <div class="title">
      <h2>Votre gestionnaire</h2>
    </div>

    <script src="footer.js"></script>

    <div class="navigation_bar">
      <div class="navigation">
        <ul>
          <li class="list active">
            <a href="#">
              <span class="icon">
                <ion-icon name="cash-outline"></ion-icon>
              </span>
              <span class="text">Solde</span>
            </a>
          </li>
          <li class="list">
            <a href="historique.html">
              <span class="icon">
                <ion-icon name="time-outline"></ion-icon>
              </span>
              <span class="text">Historique</span>
            </a>
          </li>
          <li class="list">
            <a href="virement.html">
              <span class="icon">
                <ion-icon name="swap-horizontal-outline"></ion-icon>
              </span>
              <span class="text">Virement</span>
            </a>
          </li>
          <li class="list">
            <a href="cartes.html">
              <span class="icon">
                <ion-icon name="card-outline"></ion-icon>
              </span>
              <span class="text">Cartes</span>
            </a>
          </li>
          <li class="list">
            <a href="rib.html">
              <span class="icon">
                <ion-icon name="document-outline"></ion-icon>
              </span>
              <span class="text">Rib</span>
            </a>
          </li>
          <div class="indicator"></div>
        </ul>
      </div>
    </div>

    <script>
      const list = document.querySelectorAll(".list");
      function activeLink() {
        list.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      }
      list.forEach((item) => item.addEventListener("click", activeLink));
    </script>

    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>

    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
  </body>
</html>
