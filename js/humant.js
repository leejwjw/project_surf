
    $(function(){
        $(".hamBtn").click(function(){
            $("#nav").stop().animate({
                "right":0

               },500)
               $(".bg").css("display","block")       
        })
        $(".bg").click(function(){
            $(".bg").css("display","none")
            $("#nav").stop().animate({
                "right":-100+"%"
            })
        })
        
                
                $(".derbyCircle>li").mouseover(function(){
                    let sNum = $(this).index();
          
                    $(this).addClass("active").siblings().removeClass("active");
                    $(".Derby>li").eq(sNum).fadeIn(500).siblings().fadeOut(500);
          
                    
               })
               $(".bootsCircle>li").mouseover(function(){
                let sNum = $(this).index();
      
                $(this).addClass("active").siblings().removeClass("active");
                $(".Boots>li").eq(sNum).fadeIn(500).siblings().fadeOut(500);
      
                
           })

           $(".SneakersCircle>li").mouseover(function(){
            let sNum = $(this).index();
  
            $(this).addClass("active").siblings().removeClass("active");
            $(".Sneakers>li").eq(sNum).fadeIn(500).siblings().fadeOut(500);
  
            
       })


        })
        
         
