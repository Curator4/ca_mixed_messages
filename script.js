const locations = ["whilst dungeon-diving at a secluded cave", "As you are traversing through a lively forest", "While passing through a small village", "When you enter the imposing castle"];
const npcs = ["you encounter a skeleton!", "you see a bat hanging from the walls.", "you spot a spider lurking in the shadows.", "a goblin appears from behind an obstacle.", "a wolf approaches you from behind.", "a bandit jumps out in front of you.", "you encounter a travelling merchant.", "a guard confronts you.", "a wise-looking wizard calls out for you."];
const actions = ["The creature attacks! Defend yourself!", "The creature runs off in fear.", "The creature attacks you but you fell it before it can do any damage. Victory!", "The creature attacks you and lands a critical hit, you bleed out on the ground and die. (BAD END)", "The bandit robs you at knife point, will you fight or give up your coin?", "The bandit seeing your imposing stature decides to scurry off.", "The two of you up strike up pleasant conversation.", "You end up purchasing a useful item.", "You are directed not to enter.", "The wizard recruits you as an apprentice and you live happily ever after (GOOD END)"];

// Returns random number between two values, helper function
const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
// determines which npc to encounter depending on location
const selectNPCIndex = locationIndex => {
    switch (locationIndex) {
        case 0:
            return randNum(0, 4);
        case 1:
            return randNum(2, 6);
        case 2:
            return randNum(5, 8);
        case 3:
            return randNum(6, 9);
        default:
            console.log("Couldn't select encounter NPC");
            break;
    };
};
// determines which action will play depending on the npc encountered
const selectActionIndex = npcIndex => {
    if (npcIndex <= 4) {
        return randNum(0, 4);
    }
    if (npcIndex <= 5) {
        return randNum(4, 7);
    }
    if (npcIndex <= 6) {
        return randNum(6, 8);
    }
    if (npcIndex <= 7) {
        return 8;
    }
    if (npcIndex <= 8) {
        return randNum(7, 10);
    }
};

// returns the final randomized message
randomMessage = () => {
    const locationIndex = Math.floor(Math.random() * locations.length);
    const location = locations[locationIndex];
    const npcIndex = selectNPCIndex(locationIndex);
    const npc = npcs[npcIndex];
    const action = actions[selectActionIndex(npcIndex)];
    return `${location} ${npc} ${action}`;
};

