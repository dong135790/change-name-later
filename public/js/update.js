const addExerciseToRoutine = async (event) => {
    event.preventDefault();
    const checked = document.querySelectorAll('input:checked');
    const ids = [...checked].map(o => +o.id);
    const routineId = document.location.pathname.split('/').at(-1);
    const response = await fetch(`/api/routines/${routineId}/add/exercies/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ids),
    });

    if (response.ok) {
        document.location.reload();
    } else {
        console.log('SOMETHING WHENT WRONG');
    }
};

const removeExerciseFromRoutine = async (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.matches('button')) {
        const routineId = document.location.pathname.split('/').at(-1);
        const response = await fetch(`/api/routines/${routineId}/remove/exercies/`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: target.id }),
        });
        if (response.ok) {
            document.location.reload();
        } else {
            console.log('SOMETHING WHENT WRONG');
        }
    }

};

document.querySelector('#addToRoutine').addEventListener('click', addExerciseToRoutine);
document.querySelector('#routine').addEventListener('click', removeExerciseFromRoutine);
