/* 0.5.4 2024-07-28 0:0:0 */
var app = new function() {
    this.name = "Roses", this.version = "VSecret", this.date = "2024", this.folder = "asset-v1/", this.looptime = 7680, this.bpm = 125, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !1, this.bonusendloopA = !1, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#00102b", this.col0 = "#008eff", this.col1 = "#005cfa", this.col2 = "#0048c3", this.col3 = "#00348c", this.col4 = "#002055", this.animearray = [{
        name: "1_lead",
        color: "000000",
        uniqsnd: !0
    }, {
        name: "2_deux",
        color: "00a8f3",
        uniqsnd: !0
    }, {
        name: "3_kosh",
        color: "000000",
        uniqsnd: !0
    }, {
        name: "4_shpok",
        color: "00a8f3",
        uniqsnd: !0
    }, {
        name: "5_tom",
        color: "000000",
        uniqsnd: !0
    }, {
        name: "6_nouana",
        color: "0ed145",
        uniqsnd: !0
    }, {
        name: "7_scratch",
        color: "000000",
        uniqsnd: !0
    }, {
        name: "8_trill",
        color: "0ed145",
        uniqsnd: !0
    }, {
        name: "9_bass",
        color: "000000",
        uniqsnd: !0
    }, {
        name: "10_uh",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "11_nugu",
        color: "000000",
        uniqsnd: !0
    }, {
        name: "12_guit",
        color: "00a8f3",
        uniqsnd: !0
    }, {
        name: "13_tromp",
        color: "000000",
        uniqsnd: !0
    }, {
        name: "14_pouin",
        color: "0ed145",
        uniqsnd: !0
    }, {
        name: "15_tung",
        color: "000000",
        uniqsnd: !0
    }, {
        name: "16_aoun",
        color: "ec1c24",
        uniqsnd: !0
    }, {
        name: "17_hum",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "18_get",
        color: "0ed145",
        uniqsnd: !0
    }, {
        name: "19_tellme",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "20_make",
        color: "00a8f3",
        uniqsnd: !0
    }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};