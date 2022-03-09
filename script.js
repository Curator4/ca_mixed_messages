const locations = ["Whilst dungeon-diving at a secluded cave", "As you are traversing through a lively forest", "While passing through a small village", "When you enter the imposing castle"];
const npcs = ["you encounter a skeleton!", "you see a bat hanging from the walls.", "you spot a spider lurking in the shadows.", "a goblin appears from behind an obstacle.", "a wolf approaches you from behind.", "a bandit jumps out in front of you.", "you encounter a travelling merchant.", "a guard confronts you.", "a wise-looking wizard calls out for you."];
const actions = ["The creature attacks! Defend yourself!", "The creature runs off in fear.", "The creature attacks you but you fell it before it can do any damage. Victory!", "The creature attacks you and lands a critical hit, you bleed out on the ground and die. (BAD END)", "The bandit robs you at knife point, will you fight or give up your coin?", "The bandit seeing your imposing stature decides to scurry off.", "The two of you up strike up pleasant conversation.", "You end up purchasing a useful item.", "You are directed not to enter.", "The wizard recruits you as an apprentice and you live happily ever after. (GOOD END)"];
const ASCII = [
String.raw`
      .-.
     (o.o)
      |=|
     __|__
   //.=|=.\\
  // .=|=. \\
  \\ .=|=. //
   \\(_=_)//
    (:| |:)
     || ||
     () ()
     || ||
     || ||
    ==' '==`,
String.raw`
_________________               _________________
 ~-.              \  |\___/|  /              .-~
     ~-.           \ / o o \ /           .-~
        >           \\  W  //           <
       /             /~---~\             \
      /_            |       |            _\
         ~-.        |       |        .-~
            ;        \     /        i
           /___      /\   /\      ___\
                ~-. /  \_/  \ .-~
                   V         V
`,
String.raw`              
              (
               )
              (
        /\  .-"""-.  /\
       //\\/  ,,,  \//\\
       |/\| ,;;;;;, |/\|
       //\\\;-"""-;///\\
      //  \/   .   \/  \\
     (| ,-_| \ | / |_-, |)
       //'__\.-.-./__'\\
      // /.-(() ())-.\ \\
     (\ |)   '---'   (| /)
      ' (|           |) '
        \)           (/`,
String.raw`
             ,      ,
            /(.-""-.)\
        |\  \/      \/  /|
        | \ / =.  .= \ / |
        \( \   o\/o   / )/
         \_, '-/  \-' ,_/
           /   \__/   \
           \ \__/\__/ /
         ___\ \|--|/ /___
       /'    \      /    '\
      /       '----'       \
`,
String.raw`
                        ,     ,
                        |\---/|
                       /  , , |
                  __.-'|  / \ /
         __ ___.-'        ._O|
      .-'  '        :      _/
     / ,    .        .     |
    :  ;    :        :   _/
    |  |   .'     __:   /
    |  :   /'----'| \  |
    \  |\  |      | /| |
     '.'| /       || \ |
     | /|.'       '.l \\_
     || ||             '-'
     '-''-'
`,
String.raw`
     __|___|__
      ('o_o')
      _\~-~/_    ______.
     //\__/\ \ ~(_]---'
    / )O  O( .\/_)
    \ \    / \_/
    )/_|  |_\
   // /(\/)\ \
   /_/      \_\
  (_||      ||_)
    \| |__| |/
     | |  | |
     | |  | |
     |_|  |_|
     /_\  /_\
`,
String.raw`
                 ,#####,
                 #_   _#
                 |a' 'a|
                 |  u  |
                 \  =  /
                 |\___/|
        ___ ____/:     :\____ ___
      .'   '.-===-\   /-===-.'   '.
     /      .-"""""-.-"""""-.      \
    /'             =:=             '\
  .'  ' .:    o   -=:=-   o    :. '  '.
  (.'   /'. '-.....-'-.....-' .'\   '.)
  /' ._/   ".     --:--     ."   \_. '\
 |  .'|      ".  ---:---  ."      |'.  |
 |  : |       |  ---:---  |       | :  |
  \ : |       |_____._____|       | : /
  /   (       |----|------|       )   \
 /... .|      |    |      |      |. ...\
|::::/''     /     |       \     ''\::::|
'""""       /'    .L_      '\       """"'
           /'-.,__/' '\__..-'\
          ;      /     \      ;
          :     /       \     |
          |    /         \.   |
          |'../           |  ,/
          ( _ )           |  _)
          |   |           |   |
          |___|           \___|
          :===|            |==|
           \  /            |__|
           /\/\           /"""'8.__
           |oo|           \__.//___)
           |==|
           \__/
`,
String.raw`
,   A            {}
/ \, | ,        .--.
|    =|= >     /.--.\
\ /' | '       |====|
 '   |         |'::'|  
     |     .-;'\..../';_.-^-._
    /\\/  /  |...::..|'   :   '|
    |:'\ |   /'''::''|   .:.   |
     \ /\;-,/\   ::  |..:::::..|
     |\ <''>  >._::_.| ':::::' |
     | '""'  /   ^^  |   ':'   |
     |       |       \    :    /
     |       |        \   :   / 
     |       |___/\___|'-.:.-'
     |        \_ || _/    '
     |        <_ >< _>
     |        |  ||  |
     |        |  ||  |
     |       _\.:||:./_
     |      /____/\____\
`,
String.raw`
                  .'* *.'
               __/_*_*(_
              / _______ \
             _\_)/___\(_/_ 
            / _((\- -/))_ \
            \ \())(-)(()/ /
             ' \(((()))/ '
            / ' \)).))/ ' \
           / _ \ - | - /_  \
          (   ( .;''';. .'  )
          _\"__ /    )\ __"/_
            \/  \   ' /  \/
             .'  '...' ' )
              / /  |  \ \
             / .   .   . \
            /   .     .   \
           /   /   |   \   \
         .'   /    b    '.  '.
     _.-'    /     Bb     '-. '-._ 
 _.-'       |      BBb       '-.  '-. 
(________mrf\____.dBBBb.________)____)
`]
// Returns random number between two values, helper function
const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
const selectBackground = locationIndex => {
    switch (locationIndex) {
        case 0:
            return "url(assets/cave.jpg)";
        case 1:
            return "url(assets/forest.png)";
        case 2:
            return "url(assets/village.jpg)";
        case 3:
            return "url(assets/castle.jpg)";
        default:
            console.log("Couldn't find background")
            break;
    }
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
    console.log(npcIndex);
    const npc = npcs[npcIndex];
    const action = actions[selectActionIndex(npcIndex)];
    document.body.style.backgroundImage = selectBackground(locationIndex);
    document.getElementById("message").innerHTML = `${location} ${npc} ${action}`;
    document.getElementById("ASCII").innerHTML = ASCII[npcIndex];
    document.getElementById("ASCII").style.display = "block"; 
};

