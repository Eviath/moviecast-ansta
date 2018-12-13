import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MovieShow';
  constructor() { }


  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  ngOnInit() {

    $(window).scroll(function () {
      /* affix after scrolling 100px */
      if ($(document).scrollTop() > 100) {
        $('.navbar-links').addClass('affix fixed-top');
        $('.navbar-brand--links').removeClass('hidden');
      } else {
        $('.navbar-links').removeClass('affix fixed-top');
        $('.navbar-brand--links').addClass('hidden');
      }
    });


    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById('myBtn').style.display = 'block';
      } else {
        document.getElementById('myBtn').style.display = 'none';
      }
    }

    // When the user clicks on the button, scroll to the top of the document

  }



}
