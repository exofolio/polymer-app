Polymer('app-element',{
    red:null,
    subred:null,
    bits_subred:0,
    host:null,
    pagina: 0,
    titulo: 'IPv4',
    ip: 'Sin funcionar',
    ready: function() {
    },
    cambiar_bits: function(e){
    this.bits_subred=e.target.value;
    },
    prueba0:function(e){
    if(this.red==null)
      e.target.value=0
    else
    e.target.value=this.red;
    }
    ,
    prueba:function(e){
    this.red=e.target.value;
    },
    calcula: function(){
      if(this.pagina==0)
	this.ip= 'Funciona IPv4';
      else
	this.ip= 'Funciona IPv6';
	
      //this.$.dialogo.toggle();
    },
    abredialogo: function(){
	this.$.dialogo.toggle();
// 	console.log(this.);
    },
    cerrar_drawer: function(){
      this.$.principal.closeDrawer();
    },
    cambiartitulo:function (){
      if(this.pagina==0)
	this.titulo= 'IPv4';
      else
	this.titulo= 'IPv6';
    }
    }); 
