const deleteRoutine = async ( id) => {

    const response = await fetch('/delete/'+ id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        console.log('hi')
    }
return false
}