import { Component, OnInit } from '@angular/core';
import {ServerConnectService} from '../server-connect.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
declare var $ :any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ProductId;
  ProductData;
  constructor(private route:ActivatedRoute,private serviceInstance:ServerConnectService) { }

  ngOnInit(): void {
    debugger
    this.route.paramMap.subscribe(params=>{
      //this.ProductId = products[+params.get('productid')];
	  this.ProductId=  +params.get('Id');
	  console.log('hi');
	})
	
	this.ProductData=this.serviceInstance.ProductList.subscribe(
		data=>{
		  console.log('called');
		  debugger
		  if(data!=null && data.length>0)
		  {
			this.ProductData=data.filter(x=>x.ProdId==this.ProductId)[0];
		  }
		}
	  );
   //  this.Initailizae();
  }
//    Initailizae():void {
    
//     var carousel = $('#carousel');
// 		var prev = $('.fs_prev');
// 		var next = $('.fs_next');
// 		var slideCount = $('#carousel .slides > li').length;
// 		carousel.flexslider(
// 		{
// 			animation: "slide",
// 			direction:'vertical',
// 			reverse: false,
// 			controlNav: false,
// 			directionNav: false,
// 			animationLoop: false,
// 			slideshow: false,
// 			animationSpeed: 300,
// 			after: function(slider)
// 			{
// 				var i = slider.currentSlide;
// 				console.log(i);
// 				if(i === 0)
// 				{
// 					prev.addClass('disabled');
// 				}
// 				else
// 				{
// 					prev.removeClass('disabled');
// 				}

// 				if(i < (slideCount - 3))
// 				{
// 					next.removeClass('disabled');
// 				}
// 				else
// 				{
// 					next.addClass('disabled');
// 				}
// 			}
// 		});

// 		$('#slider').flexslider(
// 		{
// 			animation: "slide",
// 			direction:'vertical',
// 			controlNav: false,
// 			directionNav: false,
// 			animationLoop: false,
// 			slideshow: false
// 		});

// 		var thumbs = $('#carousel .slides > li');
// 		thumbs.each(function()
// 		{
// 			var thumb = $(this);
// 			thumb.on('click', function()
// 			{
// 				var selectedIndex = thumbs.index(thumb);
// 				$('#slider').flexslider(selectedIndex);
// 			});
// 		});

// 		// Custom Navigation
// 		if(prev.length)
// 		{
// 			prev.on('click', function()
// 			{
// 				if(!prev.hasClass('disabled'))
// 				{
// 					$('#carousel').flexslider('prev');
// 				}
// 			});
// 		}

// 		if(next.length)
// 		{
// 			var next = $('.fs_next');
// 			next.on('click', function()
// 			{
// 				if(!next.hasClass('disabled'))
// 				{
// 					$('#carousel').flexslider('next');
// 				}
// 			});
// 		}

//   }

}
