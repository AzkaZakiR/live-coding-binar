import sql from 'better-sqlite3';
import { resolve } from 'styled-jsx/css';

const db = sql('meals.db');
const meals = db.prepare('SELECT * FROM meals')

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const meals = db.prepare('SELECT * FROM meals')

}