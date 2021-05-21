(function sa() {
  var fruits = {
      color: 'yellow',

      getColor() {
          console.log(this.color)
      }
  }

  function getFruitColor(color) {
      console.log(fruits.color)
  } //como hago para obtener el color sin pasar parametros
})()

