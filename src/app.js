var header= new Vue({
    el: "#menu",
    data: {
      indexMenu: 0,
      menu: [
        {
          text: "Solutions",
          link: "#",
          dropdown:[
            {
              droptext: "Feedback",
              droplink: "#",
            },
            {
              droptext: "Surveys",
              droplink: "#",
            },
            {
              droptext: "Review",
              droplink: "#",
            }
          ]
        },
        {
          text: "Blog",
          link: "#",
        },
        {
          text: "Sign in",
          link: "#",
        },
        {
          text: "Blog",
          link: "#",
        },
        {
          text: "Shop",
          link: "#",
        }
      ]
    },
  
    mounted: function(){
      // al caricamento della pagina il dropdown non è visibile
      this.indexMenu = "";
    },
  
    methods: {
  
      // al click mostra dropdown
      showDrop:function(index){
        this.indexMenu = index;
      },
  
      // mouseleave nascondi dropdown
      hideDrop: function(){
        this.indexMenu = "";
      }
  
    }
  
  });