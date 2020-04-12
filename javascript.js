$(document).ready(function(){
    window.onload = function(){
       
      var currentSlide =0;
      function slideshow(){
          var slides = document.getElementsByClassName("slideshow");
          for(var i=0; i<slides.length;i++){
              slides[i].style.display="none";
          }
          currentSlide++;
          if(currentSlide>slides.length){
              currentSlide=1;
          }
          slides[currentSlide-1].style.display='block';
          setTimeout(slideshow,3000);
      }
      slideshow();
        
      var canvas=document.getElementById("snowEffect");
      var ctx= canvas.getContext("2d");
      var W = window.innerWidth;
      var H = window.innerHeight;
      canvas.width=W;
      canvas.height=H;
      

       var n_particles = 500;
       var particles= [];
       for(var i=0;i<n_particles;i++){
           particles.push({
               x:Math.random()*W,
               y:Math.random()*H,
               r:Math.random()*4
           })

           
       }
       function draw(){
           ctx.clearRect(0,0,W,H);
           ctx.beginPath();
           for(var i=0;i<n_particles;i++){
               var p = particles[i];
               ctx.moveTo(p.x,p.y);
               ctx.ellipse(p.x,p.y,p.r,(Math.random()*3)+p.r,0,0,Math.PI*2);
               ctx.fillStyle = "rgba(255,255,255,0.7)";

       }
       ctx.fill();
       update();

    }
     function update(){
        for(var i=0;i<n_particles;i++){
            var p = particles[i];
            p.x+=Math.random(); 
            p.y+=Math.random()*6; 

            if(p.y>H){
                particles[i]={
                    x:Math.random()*W,
                    y:-15,
                    r:p.r
                }
            }
     }  }
     setInterval(draw,10);

    }
    
})
