class footballTeam {
    clubName;
    country;
    invitedPlayers;

    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    getPlayer(name){
        return  this.invitedPlayers.filter(p => {
            if (p.name === name){
                return p;
            }
        })[0];
    }

    newAdditions(footballPlayers){
        footballPlayers.forEach(f => {
            let [name, age, playerValue] = f.split('/');
            playerValue = Number(playerValue);

            const playerWithSameName = this.getPlayer(name);

            if (playerWithSameName === undefined){
                this.invitedPlayers.push({name, age, playerValue});
            }else{
                if (playerWithSameName.playerValue < playerValue){
                    playerWithSameName.playerValue = playerValue;
                }
            }
        })
        let output = 'You successfully invite ';
        const map = this.invitedPlayers.map(p => p.name);
        output += map.join(', ');
        output += '.';
        return output;
    }
    signContract(selectedPlayerData){
        const [name, playerOffer] = selectedPlayerData.split('/');

        const player = this.getPlayer(name);

        if(player === undefined){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(player.playerValue > Number(playerOffer)){
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - playerOffer} million more are needed to sign the contract!`)
        }
        player.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${player.name} for ${playerOffer} million dollars.`;
    }
    ageLimit(name, age){
        const player = this.getPlayer(name);

        if(player === undefined){
            throw new Error(`${name} is not invited to the selection list!`);
        }if(player.age < age){
            if(age - player.age < 5){
                return `${name} will sign a contract for ${age- player.age} years with ${this.clubName} in ${this.country}!`;
            }else if(age - player.age >5){
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }else{
            return `${name} is above age limit!`;
        }
    }
    transferWindowResult(){
        let output = 'Players list:';
        const sortedOutput = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        sortedOutput.forEach(p =>{
            output += `\nPlayer ${p.name}-${p.playerValue}`
        })
        return output;

    }
}


// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Kylian Mbappé/23/170" , "Lionel Messi/35/50", "Lionel Messi/35/60", "Pau Torres/25/52"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
