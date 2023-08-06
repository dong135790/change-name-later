const {Exercise} = require ('../models');

const exercisedata = [
    {
        name: 'Tricep dips',
        group: 'Arms',
        muscle: 'Tricep branchii',
        equipment: 'None',
        instructions: 'Stand facing away from a bench, grab it with both hands at shoulder-width. Extend your legs out in front of you. Slowly lower your body by flexing at the elbows until your arm at forearm create a 90 degree angle. Using your triceps, lift yourself back to the starting position.',
        difficulty: 'Intermidiate',
        images: '',
        description: 'Tricep dip workout',
        group_id: 3,
        routine_id: 1
    },
    {
        name: 'Bicep curls',
        group: 'Arms',
        muscle: 'Biceps brachii, brachialis and brachioradialis',
        equipment: 'Dumbell or machine',
        instructions: 'To do a biceps curl with a dumbbell, hold a dumbbell with your palm facing upward. Slowly curl the weight up by bending your elbow, keeping your elbow close to your body. Then slowly lower the weight to the starting position.',
        difficulty: 'Beginner',
        images: '',
        description: 'Bicep curl workout',
        group_id: 3,
        routine_id: 1
    },
    {
        name: 'Tricep pushdown',
        group: 'Arms',
        muscle: 'Tricep pushdowns target the medial and lateral heads of the triceps',
        equipment: 'Cable machine',
        instructions: 'Attach a rope attachment or horizontal bar to the cable machine. Face the cable machine with your feet slightly apart. Brace your abs and tuck your elbows at your sides. Make sure that your chest is out and the shoulder blades are together. Slightly bend forward too. Inhale. Push the attachment down until your elbows are fully extended but not locked in the joint. As you push the bar down, exhale. Slowly bring the attachment back up and inhale as you do so.',
        difficulty: 'Beginner',
        images: '',
        description: 'Tricep pushdown workout',
        group_id: 3,
        routine_id: 2,
    },
    {
        name: 'Hammer curls',
        group: 'Arms',
        muscle: 'Bicep brachii, brachialis, and brachioradialis',
        equipment: 'Dumbells',
        instructions: 'While keeping your upper arms still, squeeze your bicep and bend your elbows until your lower arms touch your upper arms. The dumbbells should finish very close to your shoulders without actually touching your shoulders. Squeeze your biceps and pause for a few seconds at the top of the movement',
        difficulty: 'Intermidiate',
        images: '',
        description: 'Hammer curl workout',
        group_id: 3,
        routine_id: 2,
    },
    {
        name: 'Rear delt fly',
        group: 'Arms & Upper body',
        muscle: 'Posterior deltoid, & upper back',
        equipment: 'Dumbells',
        instructions: 'Bend from the hips with the dumbbells hanging on both sides. Begin to lift the dumbbells so they are at a level that is slightly higher than your shoulders. Slowly, lower to starting position.',
        difficulty: 'Advanced',
        images: '',
        description: 'Rear delt fly workout',
        group_id: 3,
        routine_id: 2,
    },
];

const seedExercise = () => Exercise.bulkCreate(exercisedata); 

module.exports = seedExercise;
