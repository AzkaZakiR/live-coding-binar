import { Main } from "next/document";

export default function Error({ error }) {
    return (
        <main className="error">
            <h1>An Error Occured</h1>
            <p> failed to fetch meals data. Please reload or try again later</p>
        </main>
    )
}