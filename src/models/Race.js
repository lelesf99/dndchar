export default class Race {
    constructor(char, code, age, size, subCode) {
        this.age = age;
        this.size = size;
        this.darkvision = 0;
        this.subRace = null;

        this.habBonus = {
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0,
        }
        this.lang = ['comum'];
        this.traits = [];
        this.profs = [];

        this.hitPointsBonus = 0;
        switch (code) {
            case 'ANAO':
                this.name = 'Anão';
                this.habBonus.con = 2;
                if (this.size < 1.20)
                    this.size = 1.20;
                if (this.size > 1.50)
                    this.size = 1.50;
                this.moveSpd = 7.5;
                this.lang.push('anao');
                this.profs.push('machados de batalha', 'machadinhas', 'martelos leves', 'martelos de guerra');
                this.darkvision = 18;
                this.traits.push({
                    name: 'Visão no Escuro',
                    description: 'Acostumado à vida subterrânea, você tem uma visão superior no escuro e na penumbra. Você enxerga na penumbra a até 18 metros como se fosse  luz plena, e no escuro como se fosse na penumbra.Você  não pode discernir cores no escuro, apenas tons de cinza.'
                });
                this.traits.push({
                    name: 'Resiliência Anã',
                    description: 'Você possui vantagem em testes de resistência contra venenos e resistência contra dano de veneno(explicado no capítulo 9).'
                });
                this.traits.push({
                    name: 'Especialização em Rochas',
                    description: 'Sempre que você realizar um teste de Inteligência(História) relacionado à origem de um trabalho em pedra, você é considerado proficiente na perícia História e adiciona o dobro do seu bônus de proficiência ao teste, ao invés do seu bônus de proficiência normal.'
                });
                if (subCode) {
                    this.subRace = new Race(char, subCode, age, size);
                }
                break;
            case 'ANAO_COL':
                this.name = 'Anão da Colina';
                this.habBonus.wis = 1;
                this.hitPointsBonus = 1 + char.level;
                break;
            case 'ANAO_MON':
                this.name = 'Anão da Montanha';
                this.habBonus.wis = 2;
                this.profs.push('armaduras leves', 'armaduras médias');
                break;
            default:
                break;
        }
    }
}