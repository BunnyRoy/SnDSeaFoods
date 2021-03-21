import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ServerConnectService} from '../server-connect.service';
//import 'src/assets/js/jquery-3.2.1.min.js'
 //import 'src/assets/js/custom.js'
 //declare var callslider:any;
 
//  declare var initHomeSlider: any; 


 //declare var jquery:any;
 declare var $ :any;


export interface Scripts {
  name: string;
  src: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  
  // ScriptStore:Scripts[] =[{
  //   name: string;
  //   src: string;
  // }]

  public  ScriptStore: Scripts[] = [
    { name: 'jquery', src: 'assets/js/jquery-3.2.1.min.js' },
    { name: 'custom', src: 'assets/styles/bootstrap-4.1.2/popper.js' },
    { name: 'custom', src: 'assets/styles/bootstrap-4.1.2/bootstrap.min.js' },
    { name: 'custom', src: 'assets/plugins/greensock/TweenMax.min.js' },
    { name: 'custom', src: 'assets/plugins/greensock/TimelineMax.min.js' },
    { name: 'custom', src: 'assets/plugins/scrollmagic/ScrollMagic.min.js' },
    { name: 'custom', src: 'assets/plugins/greensock/animation.gsap.min.js' },
    { name: 'custom', src: 'assets/plugins/greensock/ScrollToPlugin.min.js' },
    { name: 'caraousel', src: 'assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js' },
    { name: 'custom', src: 'assets/plugins/easing/easing.js' },
    { name: 'custom', src: 'assets/plugins/progressbar/progressbar.min.js' },
    { name: 'custom', src: 'assets/plugins/parallax-js-master/parallax.min.js' },
    // { name: 'custom', src: 'assets/js/custom.js' },
  ];

  public  CssStore: Scripts[] = [
    { name: 'jquery', src: 'assets/styles/bootstrap-4.1.2/bootstrap.min.css' },
    { name: 'caraousel', src: 'assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css' },
    { name: 'custom', src: 'assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css' },
    { name: 'custom', src: 'assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css' },
    { name: 'custom', src: 'assets/plugins/OwlCarousel2-2.2.1/animate.css' },
    { name: 'custom', src: 'assets/styles/main_styles.css' },
    { name: 'custom', src: 'assets/styles/responsive.css' },
    
  ];


  constructor(private serviceInstance:ServerConnectService) { 

  }

  ngOnInit(): void {
    // new Promise(resolve => {
    //   this.loadScript();
    // });

    if(this.serviceInstance.IsJsLoaded==false)
    {
      // this.ScriptStore.forEach((item)=>{
      //   this.loadScript(item.src);
      // });
      this.serviceInstance.IsJsLoaded=true;
    }else
    {
      

      var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				autoplay:false,
				loop:true,
				mouseDrag:true,
				smartSpeed:1200,
				nav:false,
				dots:false,
				responsive:
				{
					0:
					{
						mouseDrag:true
					},
					558:
					{
						mouseDrag:false
					}
				}
      });
      if($('.home_slider_nav_prev').length)
			{
				var prev = $('.home_slider_nav_prev');
				prev.on('click', function()
				{
					homeSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.home_slider_nav_next').length)
			{
				var next = $('.home_slider_nav_next');
				next.on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}

			/* Custom dots events */
			if($('.home_slider_custom_dot').length)
			{
				$('.home_slider_custom_dot').on('click', function()
				{
					$('.home_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 1200]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			homeSlider.on('changed.owl.carousel', function(event)
			{
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});




      //this.loadScript("assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js");
     /// this.loadScript("assets/js/custom.js");
      //callslider.callslider();
      //initHomeSlider();
    }
    // this.CssStore.forEach((item)=>{
    //   this.LoadCss(item.src);
    // });

  }




  public LoadCss(css:string)
  {
    const node = document.createElement('link');
    node.href = css; // put there your js file location
    node.type = 'text/css';
  //node.charset = 'utf-8';
  node.rel="stylesheet";
   document.getElementsByTagName('head')[0].appendChild(node);

  }

    public loadScript(script:string) {

    const node = document.createElement('script');
    node.src = script; // put there your js file location
    node.type = 'text/javascript';
    //node.async = true;
    node.charset = 'utf-8';
   document.getElementsByTagName('body')[0].appendChild(node);

  // var node1=document.createElement('script');
  // node1.src = 'assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js'; // put there your js file location
  // node1.type = 'text/javascript';
  // node1.async = true;
  // node1.charset = 'utf-8';
  // //listScripts.push(node1);
  //  document.getElementsByTagName('head')[0].appendChild(node1);

  //  var node2=document.createElement('script');
  //  node2.src = 'assets/js/custom.js'; // put there your js file location
  //  node2.type = 'text/javascript';
  //  node2.async = true;
  //  node2.charset = 'utf-8';
  //  //listScripts.push(node2);
  //   document.getElementsByTagName('head')[0].append(node2);
 
    

  }
}


