const {Excercise} = require ('modules');

const excercisedata = [
    {
        name: 'Tricep dips',
        group: 'Arms',
        muscle: 'Tricep branchii',
        equipment: 'None',
        instructions: 'Stand facing away from a bench, grab it with both hands at shoulder-width. Extend your legs out in front of you. Slowly lower your body by flexing at the elbows until your arm at forearm create a 90 degree angle. Using your triceps, lift yourself back to the starting position.',
        difficulty: 'Beginner',
        images: '',
        description: 'Tricep dip workout',
    },
]

const seedExcercise = () => Excercise.bulkCreate(excercisedata); 

module.exports = seedExcercise;
