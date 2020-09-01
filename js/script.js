var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "home.html",
        controller: "homescript"
    })
    .when("/about",{
        templateUrl: "about.html",
        controller: "homescript"
    })
    .when("/community",{
        templateUrl: "community.html",
        controller: "homescript"
    })
    .when("/services",{
        templateUrl: "services.html",
        controller: "homescript"
    })
    .when("/guide",{
        templateUrl: "guide.html",
        controller: "homescript"
    })
    .when("/build",{
        templateUrl: "build.html",
        controller: "homescript"
    })
    .when("/teach",{
        templateUrl: "teach.html",
        controller: "homescript"
    })
    .when("/spotlight",{
        templateUrl: "spotlight.html",
        controller: "homescript"
    })
    .when("/casestudy",{
        templateUrl: "spotlight.html",
        controller:  "caselink",
    })
    .when("/events",{
        templateUrl: "spotlight.html",
        controller: "eventslink"
    })
    .when("/news",{
        templateUrl: "spotlight.html",
        controller: "newslink"
    })
    .when("/blog",{
        templateUrl: "spotlight.html",
        controller: "bloglink"
    })
    .when("/join",{
        templateUrl: "join.html",
        controller: "homescript"
    })
    .when("/openroles",{
        templateUrl: "openroles.html",
        controller: "openroles"
    })
    .when("/careers",{
        templateUrl: "careers.html",
        controller: "homescript"
    })
    .when("/contact",{
        templateUrl: "contact.html",
        controller: "homescript"
    })
})

/***************************onloading*******************/
$(window).on("load",function(){ 
    $("#loading").fadeOut(2000);
    $("#loading").remove;
    /************************toggle-nav*********************/
    var checked = true;
    $("#menu-button").click( () => {
        if(checked === true){
            $(this).html(`<i class="fa fa-times" aria-hidden="true"></i>`);
            $(".toggle-nav").slideDown(100);
            checked = false;
        }else{
            $(this).html(`<i class="fa fa-bars" aria-hidden="true" ></i>`);
            $(".toggle-nav").slideUp(30);
            checked = true;
        }
    });
    $(".inherent-sec ul li a").click( () => {
        $("#menu-button").html(`<i class="fa fa-bars" aria-hidden="true" ></i>`);
        $(".toggle-nav").slideUp(30);
        checked = true;
    });
    $("#logo").click( () => {
        $("#menu-button").html(`<i class="fa fa-bars" aria-hidden="true" ></i>`);
        $(".toggle-nav").slideUp(30);
        checked = true;
    });
    /************************end-toggle-nav*********************/
});
/***********************end-onloading*******************/

app.controller("homescript", function(){
    /***************************writer***********************/
    $(document).ready(function(){
        $(window).scrollTop(0);
        var txt = '';
        var wordIndex = 0;
        var deleting = false;
        var txtElement = document.querySelector(".txt-typer");
        var words = JSON.parse(txtElement.getAttribute("data-words"));
        var wait = parseInt(txtElement.getAttribute("data-wait"));
        function type() {
            let typeSpeed = 200;
            var current = wordIndex;
            var fullTxt = words[current];
            if(deleting == true){
                txt = fullTxt.substring(0 , txt.length - 1);
            }else{
                txt = fullTxt.substring(0 , txt.length + 1);
            }
            if(deleting == true){
                typeSpeed /= 2;
            }
            txtElement.innerHTML = `<span class="txt">${txt}_</span>`;
            if(deleting == false && txt === fullTxt){
                typeSpeed = wait;
                deleting = true;
            }else if(deleting == true && txt === ''){
                deleting = false;
                wordIndex++;
                typeSpeed = 200;
            };
            if(wordIndex == words.length){
                wordIndex = 0;
            }
            setTimeout(() => type(), typeSpeed);
        }
        type();
    })
    /************************end-writer*********************/

    /****************corona button*******************/
    $(".corona button").on({
        mouseenter: function(){
            $(this).css({
                "backgroundColor":"var(--color)",
                "color":"var(--bgColor)",
                "boxShadow":"1px 0 10px black",
                "transform": "translate(3px, 3px)",
                "transition":"0.3s ease-in-out",
            });
            $(".corona span").css({
                "backgroundColor":"var(--bgColor)",
                "color":"var(--color)",
                "boxShadow":"inset 0 0 8px grey, 0 0 3px black",
                "transition":"0.3s ease-in-out",
            });
        },
        mouseleave: function(){
            $(this).css({
                "backgroundColor":"var(--bgColor)",
                "color":"var(--color)",
                "boxShadow":"0px 0 3px black",
                "transform": "translate(0px, 0px)",
                "transition":"0.3s ease-in-out",
            });
            $(".corona span").css({
                "backgroundColor":"var(--color)",
                "color":"var(--bgColor)",
                "boxShadow":"0 0 3px black",
                "transition":"0.3s ease-in-out",
            });
        }
    })
    /****************end corona button***************/

    /***********************card*********************/
    $(".card-container").on({
        mouseenter: function(){
            $(this).css({
                "transform":"scale(1.05)",
                "transition":"0.3s ease-in-out",
            });
            $(this).find(".card-bg").css({
                "transform": "skew(2deg, 2deg)",
                "transition":"0.3s ease-in-out",
            });
        },
        mouseleave: function(){
            $(this).css({
                "transform":"scale(1)",
                "transition":"0.3s ease-in-out",
            });
            $(this).find(".card-bg").css({
                "transform": "none",
                "transition":"0.3s ease-in-out",
            });
        }
    })
    /*******************end-card*********************/

    /******************home.html vision-div(9cards)*************/
    $(".guide-footer a").on({
        mouseenter: function(){
            $(this).find("i").css({
                "margin-left":"20px",
                "transition":"0.3s ease-in-out",
            });
        },
        mouseleave: function(){
            $(this).find("i").css({
                "margin-left":"10px",
                "transition":"0.3s ease-in-out",
            });
        }
    })
    $(".bigger").addClass("hvr-float-shadow");
    $(".inherent-cards").addClass("hvr-bob");
    /****************end home.html -vision-div(9cards)*************/

    /*****************services.html cards hover**********/
    $(".animate-this .move").on({
        mouseenter: function(){
            $(this).siblings(".hover-effect").animate({
                bottom: "-15px",
                opacity:"1",
            },400);
            $(this).css({
                "transform": "translateY(-20px)",
                "transition":"0.2s ease-in-out",
            });
        },
        mouseleave: function(){
            $(this).siblings(".hover-effect").animate({
                bottom: "0px",
                opacity:"0",
            },300);
            $(this).css({
                "transform": "translateY(0px)",
                "transition":"0.2s ease-in-out",
            });
        }
    });
    /*****************services.html cards hover**********/

    /**********************soptlight.html-hover-cards-effect******/
    $(".mix-container .mix").removeClass("hvr-bob");
    $(".mix-container .mix .hover-effect").addClass("case-shadow");
    $(".mix-container .mix .label p").addClass("case");

    /***************mixitup**********/
    var containerEl = document.querySelector('.mix-container');
    var mixer = mixitup(containerEl);
    $(".all-butt").addClass("butt-color");
    $(".filter").click(function(){
        $(this).addClass("butt-color");
        $(this).siblings().removeClass("butt-color");
    })
    /**********************soptlight.html-hover-cards-effect******/

})

/*******************************************case-studies-page-script******************************************/
app.controller("caselink", function(){
    /**********************soptlight.html-hover-cards-effect******/
    $(".mix-container .mix").removeClass("hvr-bob");
    $(".mix-container .mix .hover-effect").addClass("case-shadow");
    $(".mix-container .mix .label p").addClass("case");

    /***************mixitup**********/
    var containerEl = document.querySelector('.mix-container');
    var mixer = mixitup(containerEl);
    $(".case-butt").addClass("butt-color");
    mixer.filter('.case-studies');
    $(".filter").click(function(){
        $(this).addClass("butt-color");
        $(this).siblings().removeClass("butt-color");
    })
    /**********************soptlight.html-hover-cards-effect******/

    /*****************services.html cards hover**********/
    $(".animate-this .move").on({
        mouseenter: function(){
            $(this).siblings(".hover-effect").animate({
                bottom: "-15px",
            },200);
            $(this).css({
                "transform": "translateY(-20px)",
                "transition":"0.2s ease-in-out",
            });
        },
        mouseleave: function(){
            $(this).siblings(".hover-effect").animate({
                bottom: "0px",
            },100);
            $(this).css({
                "transform": "translateY(0px)",
                "transition":"0.2s ease-in-out",
            });
        }
    });
    /*****************services.html cards hover**********/
})
/***************************************end-case-studies-page-script******************************************/

/*******************************************events-page-script************************************************/
app.controller("eventslink", function(){
    /**********************soptlight.html-hover-cards-effect******/
    $(".mix-container .mix").removeClass("hvr-bob");
    $(".mix-container .mix .hover-effect").addClass("case-shadow");
    $(".mix-container .mix .label p").addClass("case");

    /***************mixitup**********/
    var containerEl = document.querySelector('.mix-container');
    var mixer = mixitup(containerEl);
    $(".events-butt").addClass("butt-color");
    mixer.filter('.events');
    $(".filter").click(function(){
        $(this).addClass("butt-color");
        $(this).siblings().removeClass("butt-color");
    })
    /**********************soptlight.html-hover-cards-effect******/

    /*****************services.html cards hover**********/
    $(".animate-this .move").on({
        mouseenter: function(){
            $(this).siblings(".hover-effect").animate({
                bottom: "-15px",
            },200);
            $(this).css({
                "transform": "translateY(-20px)",
                "transition":"0.2s ease-in-out",
            });
        },
        mouseleave: function(){
            $(this).siblings(".hover-effect").animate({
                bottom: "0px",
            },100);
            $(this).css({
                "transform": "translateY(0px)",
                "transition":"0.2s ease-in-out",
            });
        }
    });
    /*****************services.html cards hover**********/
})
/*****************************************end-events-page-script**********************************************/

/*******************************************news-page-script************************************************/
app.controller("newslink", function(){
    /**********************soptlight.html-hover-cards-effect******/
    $(".mix-container .mix").removeClass("hvr-bob");
    $(".mix-container .mix .hover-effect").addClass("case-shadow");
    $(".mix-container .mix .label p").addClass("case");

    /***************mixitup**********/
    var containerEl = document.querySelector('.mix-container');
    var mixer = mixitup(containerEl);
    $(".news-butt").addClass("butt-color");
    mixer.filter('.news');
    $(".filter").click(function(){
        $(this).addClass("butt-color");
        $(this).siblings().removeClass("butt-color");
    })
    /**********************soptlight.html-hover-cards-effect******/

    /*****************services.html cards hover**********/
    $(".animate-this .move").on({
        mouseenter: function(){
            $(this).siblings(".hover-effect").animate({
                bottom: "-15px",
            },200);
            $(this).css({
                "transform": "translateY(-20px)",
                "transition":"0.2s ease-in-out",
            });
        },
        mouseleave: function(){
            $(this).siblings(".hover-effect").animate({
                bottom: "0px",
            },100);
            $(this).css({
                "transform": "translateY(0px)",
                "transition":"0.2s ease-in-out",
            });
        }
    });
    /*****************services.html cards hover**********/
})
/***************************************end-news-page-script************************************************/

/*******************************************blog-page-script************************************************/
app.controller("bloglink", function(){
    /**********************soptlight.html-hover-cards-effect******/
    $(".mix-container .mix").removeClass("hvr-bob");
    $(".mix-container .mix .hover-effect").addClass("case-shadow");
    $(".mix-container .mix .label p").addClass("case");

    /***************mixitup**********/
    var containerEl = document.querySelector('.mix-container');
    var mixer = mixitup(containerEl);
    $(".blog-butt").addClass("butt-color");
    mixer.filter('.blog');
    $(".filter").click(function(){
        $(this).addClass("butt-color");
        $(this).siblings().removeClass("butt-color");
    })
    /**********************soptlight.html-hover-cards-effect******/

    /*****************services.html cards hover**********/
    $(".animate-this .move").on({
        mouseenter: function(){
            $(this).siblings(".hover-effect").animate({
                bottom: "-15px",
            },200);
            $(this).css({
                "transform": "translateY(-20px)",
                "transition":"0.2s ease-in-out",
            });
        },
        mouseleave: function(){
            $(this).siblings(".hover-effect").animate({
                bottom: "0px",
            },100);
            $(this).css({
                "transform": "translateY(0px)",
                "transition":"0.2s ease-in-out",
            });
        }
    });
    /*****************services.html cards hover**********/
})
/***************************************end-blog-page-script************************************************/

/*******************************************openROLES-page-script*******************************************/
app.controller("openroles", function(){
    var click = true;
    $(".grid-butt").click(function(){
        /* animate filter button and toggle slide */
        if(click){
            $(".sub-men").slideDown(300);
            $(this).css({
                "box-shadow": "2px -2px 1px #2897ff , -2px -2px 1px #2897ff , 4px -4px 3px #2897ff",
                "transition-delay": "0s",
            });
            click = false;
        }else{
            $(".sub-men").slideUp(300);
            $(this).css({
                "box-shadow": "2px -2px 1px #2897ff, -2px 2px 1px #2897ff",
                "transition-delay": "0.3s",
            });
            click = true;
        }
    })

    /***********************************************filteration process*******************************/
    var locations = ["Edinburgh", "Halifax", "Leeds", "London", "Manchester", "Reading"];
    var discipline = ["Engineering", "Growth", "Operations", "Product/Delivery", "UX/UI"];
    var locationDiv = document.getElementById("location");
    var disciplineDiv = document.getElementById("discipline");

    for( i=0 ; i < locations.length ; i++){
        /* create location buttons */
        var create = document.createElement("button");
        var city = document.createTextNode(locations[i]);
        create.setAttribute("class" , "hvr-float-shadow filter-butt");
        create.setAttribute("data-class" , locations[i]);
        create.appendChild(city);
        locationDiv.appendChild(create);
    }

    for(  j=0 ; j < discipline.length ; j++){
        /* create discipline buttons */
        var create2 = document.createElement("button");
        var positions = document.createTextNode(discipline[j]);
        create2.setAttribute("class" , "hvr-float-shadow filter-butt");
        create2.setAttribute("data-class" , discipline[j]);
        create2.appendChild(positions);
        disciplineDiv.appendChild(create2);
    }

    $(".filter-butt").click(function(){
        $(this).toggleClass("checked");
        $(".job-card").addClass("none");
        var checkthis = document.getElementsByClassName("checked");
        var card = document.getElementsByClassName("job-card");
        var check_arr = [];
        var loc_index = [];
        var discip_index = [];
        var loc_values = [];
        var discip_values = [];
        
        for(n=0 ; n < checkthis.length ; n++){
            check_arr.push(checkthis[n].getAttribute("data-class"));
            /* catch buttons seclected tb be feltered */
        }

        

        for( o=0 ; o < check_arr.length ; o++ ){
            /* to detect which button category selected [ location or discipline] and save values of buttons selected from each category in it's variable*/
            var loc_result = $.inArray(check_arr[o] , locations);
            var discip_reuslt = $.inArray(check_arr[o] , discipline);
            if(loc_result != -1){
                loc_index.push(loc_result);
                if(discip_reuslt != -1){
                    discip_index.push(discip_reuslt);
                }
            }else if(discip_reuslt != -1){
                discip_index.push(discip_reuslt);
            }
        }
        

        for(u=0 ; u < loc_index.length ; u++ ){
            /* select index of selected cards from html according to location*/
            for(q=0 ; q < card.length ; q++){
                if(card[q].getAttribute("data-filter-area") == locations[loc_index[u]]){
                    loc_values.push(q);
                }
            }
        }
        for(u=0 ; u < discip_index.length ; u++ ){
            /* select index of selected cards from html according to discipline*/
            for(q=0 ; q < card.length ; q++){
                if(card[q].getAttribute("data-filter-pos") == discipline[discip_index[u]]){
                    discip_values.push(q);
                }
            }
        }

        for(i=0 ; i < card.length ; i++ ){
            card[i].classList.remove('block');
        }

        if(discip_values.length > 0 && loc_values.length > 0 ){
            var all_values = discip_values.concat(loc_values);
            var similiar = [];
            for(i=0 ; i< all_values.length ; i++){
                for(j=i+1 ; j < all_values.length ; j++){
                    if(all_values[i] == all_values[j] ){
                        similiar.push(all_values[i]);
                    }
                }
            }
            for(i=0 ; i < similiar.length ; i++){
                card[similiar[i]].classList.add('block');
            }
        }else if(discip_values.length > 0 || loc_values.length > 0 ){
            var all_values = discip_values.concat(loc_values);
            for(i=0 ; i < all_values.length ; i++){
                card[all_values[i]].classList.add('block');
            }
        }else{
            $(".job-card").removeClass("none");
        }

        if(checkthis.length > 0 && similiar.length == 0 ){
            $(".oops").addClass("block");
        }else{
            $(".oops").removeClass("block");
        }
    })
    /*******************************************end-filteration process*******************************/ 
})
/*****************************************end-openROLES-page-script*****************************************/
