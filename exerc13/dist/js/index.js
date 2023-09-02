"use strict";
/* 13. Crie uma classe `Playlist` que contém objetos da classe `Song`. Adicione métodos para adicionar músicas, remover músicas e calcular a duração total da playlist. */
class Song {
    constructor(nameSong, timeSong) {
        this.nameSong = nameSong;
        this.timeSong = timeSong;
    }
}
class Playlist extends Song {
    constructor() {
        super(...arguments);
        this.song = [];
    }
    setAddMusic(song) {
        this.song.push(song);
        console.log(`Música ${song.nameSong} adicionada a playlist.`);
    }
    setRemMusic(song) {
        const posSong = this.song.indexOf(song);
        if (posSong >= 0) {
            this.song.splice(posSong, 1);
            console.log(`Música ${song.nameSong} retirada da playlist.`);
        }
        else {
            throw "Música não encontrada na playlist!";
        }
    }
    getPlayList() {
        console.log("Músicas da Playlist");
        for (let i = 0; i < this.song.length; i++) {
            console.log(`Música ${this.song[i].nameSong} de ${this.song[i].timeSong} minuto(s)`);
        }
        this.getTimePlaylist();
    }
    getTimePlaylist() {
        let acc = 0;
        for (let i = 0; i < this.song.length; i++) {
            acc += this.song[i].timeSong;
        }
        console.log(`Duração da Playlist é de ${acc} minuto(s)`);
    }
}
const a = new Song("M1", 1);
const b = new Song("M2", 2);
const c = new Song("M3", 3);
const d = new Song("M4", 1);
const e = new Song("M5", 1);
const f = new Song("M6", 5);
const plr = new Playlist(); // FIXME: Verificar o que esta ocorrendo com este problema
plr.setAddMusic(a);
plr.setAddMusic(c);
plr.setAddMusic(e);
plr.setAddMusic(d);
plr.setAddMusic(f);
// let rock: Song = new Song(["Sabbat"],["5:34"]);
