import React, {useState, useEffect} from "react";
import "./Text.css";


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

const usePoetryDB = () => {
    const[result,setResult] = useState<Service<Poems>>({
        status: 'loading'
    })

    useEffect(() => {
        fetch('https://poetrydb.org/author,title/Shakespeare;Sonnet')
            .then(response => response.json())
            .then(response => response.forEach((poem: any) => setResult({status: 'loaded', payload: poem.lines})))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;

};
export default usePoetryDB;

export const Poems: React.FC<{}> = () => {
    const service = usePoetryDB();


    return(
        <div>

            {service.status === 'loading' && <div>Loading...</div>}
            {service.status ==='loaded' && <div>{service.payload}</div>}
            {service.status === 'error' && (
                <div>Error, ERRROR</div>
            )}
        </div>
    )
}

/*
return(
    <>
        <div className="Text">
            TEST
        </div>
    </>
);*/
