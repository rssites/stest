class Preloader{
    constructor(){
        this._setPreloader();
    }

    _setPreloader(){
        this.preoader = document.createElement(`div`);
        this.preoader.innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
        this.preoader.classList.add(`big-loader`);

        document.body.appendChild(this.preoader);
        document.body.style.overflow = `hidden`;
        var self = this;
        setTimeout(function(){
            self.preoader.remove();
            document.body.style.overflow = `auto`;
        }, 2200);
    }
}

let prelader = new Preloader();