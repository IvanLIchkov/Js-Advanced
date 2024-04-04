class Triathlon {
    competitionName;
    participants;
    listOfFinalists;


    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender){
        if(this.participants.hasOwnProperty(participantName)){
            return `${participantName} has already been added to the list`;
        }
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition){
        let completedCount = 0;
        if(!this.participants.hasOwnProperty(participantName)){
            throw Error (`${participantName} is not in the current participants list`);
        }else if(condition < 30){
            throw Error (`${participantName} is not well prepared and cannot finish any discipline`);
        }
        completedCount = Math.floor(condition / 30);
        if (completedCount<=2){
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }else{
            this.listOfFinalists.push({[participantName] :  this.participants[participantName]})
            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }

    rewarding(participantName){

        const winner = this.listOfFinalists.filter(p => {
            if(Object.keys(p)[0] === participantName){
                return p;
            }
        });
        if(winner.length === 0){
            return `${participantName} is not in the current finalists list`;
        }
        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(participantGender){

        if(this.listOfFinalists.length === 0){
            return `There are no finalists in this competition`;
        }

        if (participantGender === 'all'){
            const list = this.listOfFinalists.map(f =>{
                return `${Object.keys(f)[0]}`;
            });
            return `List of all ${this.competitionName} finalists:\n${list.join("\n")}`;
        }

        const filteredByCriteria = this.listOfFinalists.filter(p => {
            if(p[Object.keys(p)[0]] === participantGender){
                return p;
            }
        });
        if (filteredByCriteria.length === 0){
            return `There are no ${participantGender}'s that finished the competition`;
        }
        const participantForReturn = filteredByCriteria[0];
        return  `${Object.keys(participantForReturn)[0]} is the first ${participantGender} that finished the ${this.competitionName} triathlon`;
    }
}
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

