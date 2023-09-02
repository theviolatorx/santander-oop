/* 13. Crie uma classe `Playlist` que contém objetos da classe `Song`. Adicione métodos para adicionar músicas, remover músicas e calcular a duração total da playlist. */

class Song {
    nameSong: string;
    timeSong: number;
    constructor(
        nameSong: string,
        timeSong: number,
    ){
        this.nameSong = nameSong;
        this.timeSong = timeSong;
    }

}

class Playlist extends Song{
    private song: Song[] = [];

    setAddMusic(song: Song): void{
        this.song.push(song);
        console.log(`Música ${song.nameSong} adicionada a playlist.`);
    }

    setRemMusic(song: Song): void{
        const posSong = this.song.indexOf(song);
        if (posSong>=0) {
            this.song.splice(posSong, 1);
            console.log(`Música ${song.nameSong} retirada da playlist.`);
        } else {
            throw "Música não encontrada na playlist!"
        }
    }

    getPlayList(): void {
        console.log("Músicas da Playlist");
        for(let i = 0; i < this.song.length; i++){
            console.log(`Música ${this.song[i].nameSong} de ${this.song[i].timeSong} minuto(s)`);
        }
        this.getTimePlaylist();
    }

    getTimePlaylist(): void{
        let acc: number = 0;
        for(let i = 0; i < this.song.length; i++){
            acc += this.song[i].timeSong;
        }
        console.log(`Duração da Playlist é de ${acc} minuto(s)`);
    }
}
const a = new Song("M1",1);
const b = new Song("M2",2);
const c = new Song("M3",3);
const d = new Song("M4",1);
const e = new Song("M5",1);
const f = new Song("M6",5);

FIXME: Verificar o que esta ocorrendo com este problema
const plr = new Playlist();
plr.setAddMusic(a);
plr.setAddMusic(c);
plr.setAddMusic(e);
plr.setAddMusic(d);
plr.setAddMusic(f);



// let rock: Song = new Song(["Sabbat"],["5:34"]);