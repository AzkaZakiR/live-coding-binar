export async function shareMeal(formData) {
    'use server'

    const meal = {
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
    }

    console.log(meal)
}