<template>
   <div class="color">
        <h3>Kleur van glazuur</h3>
        <label class="blue">
            <input type="radio" checked name="color" value="blue" id="btnBlue">
            <div class="button"><span></span></div>
          </label>

          <label class="red">
            <input type="radio" name="color" value="red" id="btnRed">
            <div class="button"><span></span></div>
          </label>

          <label class="green">
            <input type="radio" name="color" value="green" id="btnGreen">
            <div class="button"><span></span></div>
          </label>

          <label class="brown">
            <input type="radio" name="color" value="brown" id="btnBrown">
            <div class="button"><span></span></div>
          </label>
          </div>

          <div class="upload__logo">
            <h3>Upload jouw logo</h3>
            <input id="userImage" type="file">
          </div>

          <div class="topping">
            <h3>Topping?</h3>
            <input class="checkbox" type="checkbox" id="btnSprinkles" name="sprinkles">
      <label for="topping">Sprinkles</label>        
          </div>

          <div class="contact">
            <form action="">
                <div class="amount">
                <label for="fname">Aantal donuts</label><br>
                <input type="number" id="amount" name="amount" value="100" min="100" max="500" placeholder="minstens 100"><br>
            </div>
            <div class="name">
                <label for="name">Bedrijfsnaam</label><br>
                <input type="text" id="name" name="name" placeholder="Thomas More"><br>
            </div>
            <div class="email">
                <label for="name">Emailadres</label><br>
                <input type="email" id="email" name="email" placeholder="info@thomasmore.be"><br>
            </div>
            <div class="order">
                <input type="submit" href="src/backend/index.html" value="Bekijk uw bestelling">
            </div>
              </form> 
          </div>
</template>