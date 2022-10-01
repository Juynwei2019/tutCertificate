const vm = Vue.createApp({
	data () { 
		return { 
			title: "請輸入姓名",
			size:100,
		} 
	},
	updated: function () {
        this.draw();
    },
    created:function(){
        this.$nextTick(function(){
            this.draw();
        })
    },
	methods: {
        draw: function () {
            var ctx=document.body.querySelector("#canvas").getContext("2d");
            var self = this;
            var img = new Image();
            img.onload = function () {
				var wxh = img.width / img.height;
				var hxw = img.height/img.width ;
				//ctx.canvas.width  = screen.height*wxh;
				//ctx.canvas.height = screen.height;
				ctx.canvas.width  = img.width;
				ctx.canvas.height = img.height;

				var Width = ctx.canvas.width;
				var Height = ctx.canvas.height;
				console.log('screen:'+screen.width+' '+screen.height);
				console.log(img.width+' '+img.height);
                let ratio = 1;
                ctx.drawImage(img,  0, 0, Width, Height);
                self.drawText(ctx);
            }
            img.src = "./img/完課證書.png"
        },
        drawText: function (ctx) {
            ctx.fillStyle = "rgb(256,256,256)";
            ctx.font = ''+this.size+'px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(this.title, ctx.canvas.width*0.5, ctx.canvas.height*0.55);
			console.log(ctx.canvas.width+' '+ctx.canvas.height);
        },
		toIMG:function(){
			const canvas = document.getElementById('canvas')
			const dataURL = canvas.toDataURL('image/jpeg', 1)
			const link = document.createElement('a')
			link.download = 'TUT_Certificate.jpeg'
			link.href = dataURL
			link.click()
			   
		},
    }
});
vm.mount('#app');