import React from "react";
import "./Art.css";
import fox from '../svg/fox.svg'

interface Props{
    height?: number
    width?: number
    color?: string

}

export const Fox = (props: Props) => {

    return(

        <>
            <div className="Art">
                <svg height={props.height || 200} viewBox="0 0 37 58" width="auto" xmlns="http://www.w3.org/2000/svg"><g id="009---Fox" fill="none"><g fill="#e57e25"><path id="Shape" d="m35 29-12.41 24h-20.59c-.30427197-.0014028-.59135261-.1412626-.78-.38l19.78-33.62z"/><path id="Shape" d="m12 12-11 3 2-15z"/><path id="Shape" d="m26 4-5 15-9-7z"/></g><path id="Shape" d="m21 19-19.78 33.62c-.32-.39-.22 1.92-.22-37.62l7 16z" fill="#ecf0f1"/><path id="Shape" d="m21 19-13 12-7-16 11-3z" fill="#f29c1f"/><path id="Shape" d="m37 53-17 5 15-29z" fill="#f29c1f"/></g></svg>
            </div>
        </>
    );
};

export const Bear = (props: Props) => {

    return(

        <>
            <div className="Art">
                <svg height={props.height || 512} viewBox="0 0 58 55" width={props.width || 512} xmlns="http://www.w3.org/2000/svg"><g id="010---Dog" fill="none"><path id="Shape" d="m30.89 20.05-2.89 34.95h-13.13c-.501932.0049401-.9297504-.3629837-1-.86l-4.72-34.09z" fill={props.color || "#a56a43"}/><g fill="#805333"><path id="Shape" d="m53 33-5 22h-22c5.68-40.57 4.52-33.26 6-40l6 .73.08-.21z"/><path id="Shape" d="m21 40v15h-2v-15c0-.5522847.4477153-1 1-1s1 .4477153 1 1z"/><path id="Shape" d="m20 37c-.5522847 0-1-.4477153-1-1v-1c0-.5522847.4477153-1 1-1s1 .4477153 1 1v1c0 .5522847-.4477153 1-1 1z"/></g><path id="Shape" d="m33.19 16.85c-2.89 4-1.5 2.08-6.19 8.51-.3461546.402396-.8492203.6357018-1.38.64h-11.24c-.5307797-.0042982-1.0338454-.237604-1.38-.64l-6.19-8.51c6-16.92 5.54-15.68 5.66-15.85 16.22 0 15-.06 15.14.11z" fill="#cb8252"/><path id="Shape" d="m12.57 1-8 22-4.45-12.47c-.31190823-.90167925.05652586-1.898126.88-2.38z" fill="#cf976a"/><path id="Shape" d="m39.88 10.53-4.45 12.47c-8.68-23.87-7.3-20.09-8-22l11.62 7.15c.8046704.49723815 1.150959 1.4902104.83 2.38z" fill="#cf976a"/><path id="Shape" d="m22 19.53-1.24 2c-.1711944.2774859-.4739541.4464415-.8.4464415s-.6288056-.1689556-.8-.4464415l-1.24-2c-.1959922-.3131569-.203365-.7088598-.0191744-1.0291003.1841907-.3202405.5299353-.5128432.8991744-.5008997h2.4c.354905.0168048.6742421.2206642.8388742.5355233.1646322.314859.1498338.6934298-.0388742.9944767z" fill="#35495e"/><path id="Shape" d="m58 34-6-10-4 31z" fill="#a56a43"/></g></svg>
            </div>
        </>
    );
};



