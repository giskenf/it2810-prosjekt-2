import React, {useState, useEffect} from "react";
import "./Text.css";

interface poemsPros{
    poemID:number
    num?: number
}

export interface Poem {
    author: string
    linecount: string
    lines: []
}
interface ServiceInit {
    status: 'init';
}
interface ServiceLoading {
    status: 'loading';
}
interface ServiceLoaded<T> {
    status: 'loaded';
    payload: T;
}
interface ServiceError {
    status: 'error';
    error: Error;
}
export type Service<T> =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;

export interface Poems{
    results: Poem[]

}

/*Henter ut tekst baser på props.poemID
* Dersom verdien endres vil nytt dikt hentes*/

export const usePoetryDB = (props:poemsPros) => {

    const[result,setResult] = useState<Service<Poems>>({
        status: 'loading'
    })

    useEffect(() => {

        fetch('https://poetrydb.org/author,title/Shakespeare;Sonnet')
            .then(response => response.json())
            .then(response => response.forEach((poem: any) => setResult({status: 'loaded', payload: poem.lines[props.poemID]})))
            .catch(error => setResult({ status: 'error', error }));
    }, [props.poemID]);
    return result;

};

/*Funksjon som kaller på usePoetryDB,
* som henter tekst.*/

export const Poems: React.FC<poemsPros> = (props:poemsPros) => {

    const service = usePoetryDB(props)

    return (
        <div>
            {service.status === 'loading' && <div>Loading...</div>}
            {service.status === 'loaded' && <div>{service.payload}</div>}
            {service.status === 'error' && <div>Error, ERRROR</div>}
        </div>
    )


}