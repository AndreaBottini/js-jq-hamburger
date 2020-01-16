// inserire il codice js per far funzionare l'hamburger menù.

// creo le variabili per l'esercizio
var menu_active = $('.header-right > a');
var hamburger = $('.hamburger-menu');
var close_menu = $('.close');

// imposto l'azione e la funzione da compiere
menu_active.click(
  function () {
    hamburger.show(500);
  }
);

close_menu.click(
  function () {
    hamburger.hide(800);
  }
);
